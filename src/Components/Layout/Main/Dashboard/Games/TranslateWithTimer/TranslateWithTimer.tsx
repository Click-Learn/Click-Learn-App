import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WordModel } from "../../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./TranslateWithTimer.css";

interface WordPair {
    hebrewWord: string;
    englishWord: string;
}

// const words: WordPair[] = [
//     { hebrewWord: "שלום", englishWord: "hello" },
//     { hebrewWord: "כחול", englishWord: "blue" },
//     // Add more words here
// ];


function TranslateWithTimer(): JSX.Element {

    const isLogin = useSelector((state: any) => state.authSlice)
    const navigate = useNavigate()
    const [words, setWords] = useState<WordPair[]>([])
    useEffect(() => {
        if (!isLogin) {
            navigate("/")
            toastsFunctions.toastError("Must be Login to continue...")
        } else {
            servicesFunctions.getAllFavoriteWordsByUser().then((res: WordModel[]) => {
                const userWords = res.map(({ englishWord, hebrewWord }) => ({
                    hebrewWord,
                  englishWord,
                }));
                console.log(userWords);
                
                // const shuffledWords = userWords.sort(() => Math.random() - 0.5);
                setWords(userWords);
                startGame();

        })
        }

    }, [])
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(60);
    const [userTranslation, setUserTranslation] = useState<string>("");
    const [countCorrect, setCountCorrect] = useState<number>(0);
    const [countUncorrect, setCountUncorrect] = useState<number>(0);
    const [gameComplete, setGameComplete] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

    const [usedWordIndices, setUsedWordIndices] = useState<Set<number>>(new Set());


    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearTimeout(timer);
                setCorrectAnswer(true);
                // gameOver();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining]);


    function startGame() {
        setTimeRemaining(60);
        getRandomWord();
    }

    function resetGame() {
        setTimeRemaining(60);
        setUserTranslation("");
        setCountCorrect(0);
        setCountUncorrect(0);
        setUsedWordIndices(new Set());
        startGame();
        setGameComplete(false);
        setCorrectAnswer(false);
    }
    function getRandomWord() {
        if (usedWordIndices.size === words.length) {
          gameOver();
          return;
        }
      
        let newIndex = Math.floor(Math.random() * words.length);
        while (usedWordIndices.has(newIndex)) {
          newIndex = Math.floor(Math.random() * words.length);
        }
      
        setCurrentWordIndex(newIndex);
        setUsedWordIndices((prevSet) => new Set(prevSet.add(newIndex)));
      }

    function checkAnswer() {
        const inputElemnt = document.getElementById("input");
        if (userTranslation.toLowerCase() === words[currentWordIndex].englishWord.toLocaleLowerCase()) {
            // Correct answer
            setCountCorrect(countCorrect + 1);
            inputElemnt!.style.border = "1px solid grey";
            getRandomWord();
        } else {
            // Incorrect answer
            inputElemnt!.style.border = "1px solid red";
            setCountUncorrect(countUncorrect + 1);
        }

        setUserTranslation("");
    }

    function endOfTime(){
        getRandomWord();
        setCorrectAnswer(false);
        setCountUncorrect(countUncorrect + 1);
        setTimeRemaining(60);
    }

    function gameOver() {
        // Implement your game over logic here, e.g., show a final score or a message
        setGameComplete(true);
    }
    return (
        <div className="TranslateWithTimer">
            {!gameComplete ? (
                <div className="game-container">


                    <div className="word-container">
                        <span>{words[currentWordIndex]?.hebrewWord}</span>
                    </div>
                    <input
                        id="input"
                        type="text"
                        value={userTranslation}
                        onChange={(e) => setUserTranslation(e.target.value)}
                        placeholder="....כיתבו את המילה באנגלית"
                    />
                    {correctAnswer && <div className="end-of-time"><div className="text">{words[currentWordIndex].englishWord}: המילה הנכונה היא </div> <button className="next-button" onClick={endOfTime}>המשך לשאלה הבאה</button> </div>}
                    {!correctAnswer && <div className="timer">{timeRemaining}</div>}
                    {!correctAnswer &&<progress max="60" value={timeRemaining}></progress>}
                    

                    {!correctAnswer && <button className="done-button" onClick={checkAnswer}>שלח</button>}
                    
                </div>
            ) : (
                <div className="game-footer">
                    <div className="game-data">
                        <div>כישלונות: {countUncorrect}</div>
                        <div>הצלחות: {countCorrect}</div>
                        <div> כמות מילים: {words.length}</div>
                    </div>
                    <button className="reset-button" onClick={resetGame}>איפוס משחק</button>
                </div>
            )}
        </div>
    );
}

export default TranslateWithTimer;
