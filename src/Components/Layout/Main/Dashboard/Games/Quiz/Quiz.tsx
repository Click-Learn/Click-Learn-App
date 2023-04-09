

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./Quiz.css";

interface Word {
  englishWord: string;
  hebrewWord: string;
}

const words: Word[] = [
  { englishWord: "hello", hebrewWord: "שלום" },
  { englishWord: "goodbye", hebrewWord: "להתראות" },
  { englishWord: "please", hebrewWord: "בבקשה" },
  { englishWord: "thank you", hebrewWord: "תודה" },
  { englishWord: "sun", hebrewWord: "שמש" },
  { englishWord: "hat", hebrewWord: "כובע" },
  // Add more card data as needed
];

const Quiz: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [timer, setTimer] = useState(10);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);


  const isLogin = useSelector((state : any) => state.authSlice)
  const navigate = useNavigate()
  
  useEffect(() => {
      if(!isLogin){
          navigate("/")
          toastsFunctions.toastError("Must be Login to continue...")
      }
  })

  
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

  const currentWord = words[currentWordIndex];
  const shuffledAnswers = React.useMemo(() => {
    const answers = [
      currentWord.hebrewWord,
      ...words
        .filter((word) => word.englishWord !== currentWord.englishWord)
        .map((word) => word.hebrewWord),
    ].slice(0, 4);
    return answers.sort(() => Math.random() - 0.5);
  }, [currentWord, words]);


  return (
    <div className="Quiz">
      <h1>Quiz Game</h1>
      <div>
        <p>Translate this word:</p>
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
        <p className="time_left_p">Time left:</p>
        <progress max="10" value={timer}></progress>
      </div>
      {isCorrectAnswer !== null && (
        <div>
          {isCorrectAnswer ? (
            <p className="correct-answer">Correct answer!</p>
          ) : (
            <p className="incorrect-answer">Incorrect answer.</p>
          )}
        </div>
      )}
      {hasAnswered && (
        <div>
          <button onClick={() => {handleNextWord()}}>
            Next word
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
