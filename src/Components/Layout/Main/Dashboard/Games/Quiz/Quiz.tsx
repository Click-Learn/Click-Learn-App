

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WordModel } from "../../../../../../Models/WordModel";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./Quiz.css";

interface Word {
  englishWord: string;
  hebrewWord: string;
}

const Quiz: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [timer, setTimer] = useState(10);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [words, setWords] = useState<Word[]>([])
  const [numCorrectAnswers, setNumCorrectAnswers] = useState<number>(0)
  const [numIncorrectAnswers, setNumIncorrectAnswers] = useState<number>(0)
  const isLogin = useSelector((state : any) => state.authSlice)
  const navigate = useNavigate()
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
      toastsFunctions.toastError("אנא התחבר בכדי להמשיך...");
    } else if(!quizCompleted){
      setCurrentWordIndex(0);
      setIsCorrectAnswer(null);
      setNumCorrectAnswers(0);
      setNumIncorrectAnswers(0);
      setHasAnswered(false);
      setIsTimerRunning(true);
      setTimer(10);
      servicesFunctions.getAllFavoriteWordsByUser().then((res: WordModel[]) => {
        const userWords = res.map(({ englishWord, hebrewWord }) => ({
          englishWord,
          hebrewWord,
        }));
        const shuffledWords = userWords.sort(() => Math.random() - 0.5);
        setWords(shuffledWords);
      });
    }
  }, [isLogin, quizCompleted]);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 0.1);
        } else {
          setIsTimerRunning(false);
          setIsCorrectAnswer(false);
          setHasAnswered(true);
        }
        
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [timer, isTimerRunning]);
  
  const handleAnswer = (answerIndex: number) => {
    const isAnswerCorrect = answerIndex === shuffledAnswers.indexOf(currentWord.hebrewWord);
    setIsCorrectAnswer(isAnswerCorrect);
    setIsTimerRunning(false);
    setHasAnswered(true);
  
    const answerButtons = document.querySelectorAll(".Quiz button");
    answerButtons.forEach((button, index) => {
      if (index === shuffledAnswers.indexOf(currentWord.hebrewWord)) {
        button.classList.add("correct");
      } else if (index === answerIndex) {
        button.classList.add("incorrect");
      }
    });
  
    if (isAnswerCorrect) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
    } else {
      setNumIncorrectAnswers(numIncorrectAnswers + 1);
    }
  };
  
  const handleNextWord = () => {
    const answerButtons = document.querySelectorAll(".Quiz button");
    answerButtons.forEach((button, index) => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
    });

    setCurrentWordIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < words.length) {
        return nextIndex;
      } else {
        return 0;
      }
    });
    setTimer(10);
    setIsCorrectAnswer(null);
    setHasAnswered(false);
    setIsTimerRunning(true);
  };


  const currentWord = words.length > 0 ? words[currentWordIndex] : { englishWord: '', hebrewWord: '' };
    // const currentWord = words[currentWordIndex];
    const shuffledAnswers = React.useMemo(() => {
      if (currentWord && words.length > 1) {
        const answers = [
          currentWord.hebrewWord,
          ...words
          .filter((word) => word.englishWord !== currentWord.englishWord)
          .map((word) => word.hebrewWord),
        ].slice(0, 4);
        return answers.sort(() => Math.random() - 0.5);
      } else {
        return [];
      }
    }, [currentWord, words]); 
  

  return (
    <div className="Quiz">
      
      <h1>Quiz Game</h1>
        {!quizCompleted ?
        <>

      <div>
      <p>שאלה {currentWordIndex + 1} מתוך {words.length}</p>
      <p>:תרגם/י את המילה</p>
      <h2>{currentWord.englishWord}</h2>
      </div>
      <div className="answer_button_container">
        {shuffledAnswers.map((answer, index) => (
          <button
          key={index}
          onClick={() => handleAnswer(index)}
          disabled={hasAnswered}
            >
            {answer}
          </button>
        ))}
      </div>
      <div>
        <p className="time_left_p">:זמן שנשאר</p>
        <progress max="10" value={timer}></progress>
      </div>
      {isCorrectAnswer !== null && (
        <div>
        {isCorrectAnswer ? (
          <p className="correct-answer">!תשובה נכונה</p>
          ) : (
            <p className="incorrect-answer">.תשובה לא נכונה</p>
            )}
        </div>
      )}
      {hasAnswered && (
        <div>
          {currentWordIndex === words.length - 1 ?
          <button onClick={(() => setQuizCompleted(true))}>סיים/י</button>
          :
          <button onClick={() => {handleNextWord()}}>
            למילה הבאה
          </button>
          }
        </div>
      )}
      </>

    : 
      <>
        <p style={{margin: '30px'}}>סיימת! הצלחת  {numCorrectAnswers} מתוך {words.length}  </p>
        <h2 style={{margin: '30px'}}>{(numCorrectAnswers / words.length) * 100}%</h2>
        <button onClick={() => setQuizCompleted(false)}>התחלה מחדש</button>
      </>
    }
    </div>
    
  );
};

export default Quiz;
