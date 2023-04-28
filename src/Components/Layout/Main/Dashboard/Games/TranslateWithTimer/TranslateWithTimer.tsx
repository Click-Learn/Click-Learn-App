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

function TranslateWithTimer(): JSX.Element {

    const isLogin = useSelector((state: any) => state.authSlice)
    const navigate = useNavigate()
    const [words, setWords] = useState<WordPair[]>([])
    useEffect(() => {
        if (!isLogin) {
            navigate("/")
            toastsFunctions.toastError("אנא התחבר בכדי להמשיך...")
        } else {
            servicesFunctions.getAllFavoriteWordsByUser().then((res: WordModel[]) => {
                const userWords = res.map(({ englishWord, hebrewWord }) => ({
                    hebrewWord,
                  englishWord,
                }));
                console.log(userWords);

                if(!userWords || userWords.length < 1){
                    toastsFunctions.toastError("חייב לפחות מילה אחת מועדפת כדי לשחק במשחק")
                    navigate("/dashboard");
                  }

                const shuffledWords = userWords.sort(() => Math.random() - 0.5);
                setWords(shuffledWords);
                
            })
        }

    }, [])
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    // const [currentWordIndeCounting, setCurrentWordIndeCounting] = useState<number>(1);
    const [timeRemaining, setTimeRemaining] = useState<number>(60);
    const [userTranslation, setUserTranslation] = useState<string>("");
    const [countCorrect, setCountCorrect] = useState<number>(0);
    const [countUncorrect, setCountUncorrect] = useState<number>(0);
    const [gameComplete, setGameComplete] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearTimeout(timer);
                setCorrectAnswer(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining]);


    function startGame() {
        setTimeRemaining(60);
        getNextWord();
        setCountUncorrect(0);
    }

    function resetGame() {
        const shuffledWords = words.sort(() => Math.random() - 0.5);
        setWords(shuffledWords);
        setTimeRemaining(60);
        setUserTranslation("");
        setCountCorrect(0);
        setCurrentWordIndex(0)
        setCountUncorrect(0);
        startGame();
        setGameComplete(false);
        setCorrectAnswer(false);
    }


      function getNextWord() {
        if (currentWordIndex + 1 >= words.length) {
          console.log("test");
          gameOver();
          return;
        }
        setCurrentWordIndex(currentWordIndex + 1);
        console.log(currentWordIndex);
      }
      

    function checkAnswer() {
        const inputElemnt = document.getElementById("input");
        if (userTranslation.toLowerCase() === words[currentWordIndex].englishWord.toLocaleLowerCase()) {
            // Correct answer
            setCountCorrect(countCorrect + 1);
            inputElemnt!.style.border = "1px solid grey";
            getNextWord();
            setTimeRemaining(60);
        } else {
            // Incorrect answer
            inputElemnt!.style.border = "1px solid red";
            setCountUncorrect(countUncorrect + 1);
        }

        setUserTranslation("");
    }

    function endOfTime(){
        getNextWord();
        setCorrectAnswer(false);
        setCountUncorrect(countUncorrect + 1);
        setTimeRemaining(60);
    }

    function gameOver() {
        // Implement your game over logic here, e.g., show a final score or a message
        setGameComplete(true);
    }



    function handleKeypress(e: any) {
        if (e.keyCode === 13) {
            checkAnswer();
          }
    }
    return (
        <div className="TranslateWithTimer">

            {!gameComplete ? (
                <div className="game-container">
                  <p>שאלה {currentWordIndex + 1 } מתוך {words.length}</p>


                    <div className="word-container">
                        <span>{words[currentWordIndex]?.hebrewWord}</span>
                    </div>
                    <input
                        id="input"
                        type="text"
                        value={userTranslation}
                        onChange={(e) => setUserTranslation(e.target.value)}
                        placeholder="....כיתבו את המילה באנגלית"
                        onKeyDown={handleKeypress}
                        />
                    {correctAnswer && <div className="end-of-time"><div className="text">{words[currentWordIndex].englishWord}: המילה הנכונה היא </div> <button className="next-button btn " onClick={endOfTime}>המשך לשאלה הבאה</button> </div>}
                    {!correctAnswer && <div className="timer">{timeRemaining}</div>}
                    {!correctAnswer &&<progress max="60" value={timeRemaining}></progress>}
                    

                    {!correctAnswer && <button className="done-button btn " onClick={checkAnswer}>שלח</button>}
                    
                </div>
            ) : (
                <div className="game-footer">
                    <div className="game-data">
                        <div className="game-data-text"> כמות מילים: {words.length}</div>
                        <div className="game-data-text">הצלחות: {countCorrect}</div>
                        {/* <div className="game-data-text">כישלונות: {countUncorrect}</div> */}
                    </div>
                    <button className="reset-button" onClick={resetGame}>איפוס משחק</button>
                </div>
            )}
        </div>
    );
}

export default TranslateWithTimer;
