import { useNavigate } from "react-router-dom";
import "./Games.css";
import translateWithTimePhoto from './translate-with-time-photo.jpg';
import memoryGamePhoto from './memory-game-photo.jpg';
import quizGamePhoto from './quiz-game-photo.jpg';

function Games(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Games">
			<div className="games_top_container">
                <img className="background_top_image" src="https://img.freepik.com/free-photo/top-view-interlocking-plastic-blocks-baby-shower_23-2148430489.jpg?w=1480&t=st=1680540345~exp=1680540945~hmac=4041335935a7e1c94afbb978943134555af96179462c0eb366c841e6a2bf083e" alt="" />
                <h1 className="top_text">תבחר/י את הדרך שלך לתרגל</h1>
            </div>

            <div className="games_container">
                <div className="game_box" onClick={() => navigate("/TranslateWithTimer")}>
                    <img src={translateWithTimePhoto} alt="" />
                    <p className="game_name">תרגום לפי זמן</p>
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box" onClick={() => navigate("/quiz")}>
                    <img src={quizGamePhoto} alt="" />
                    <p className="game_name">חידון</p>
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box " onClick={() => navigate("/memoryGame")}>
                    <img src={memoryGamePhoto} alt=""  />
                    <p className="game_name">משחק הזיכרון</p>
                    <span>עם המילים שלך</span>
                </div>
            </div>
            
        </div>
    );
}

export default Games;
