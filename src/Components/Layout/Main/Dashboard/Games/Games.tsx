import { useNavigate } from "react-router-dom";
import "./Games.css";

function Games(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Games">
			<div className="games_top_container">
                <img className="background_top_image" src="https://img.freepik.com/free-photo/top-view-interlocking-plastic-blocks-baby-shower_23-2148430489.jpg?w=1480&t=st=1680540345~exp=1680540945~hmac=4041335935a7e1c94afbb978943134555af96179462c0eb366c841e6a2bf083e" alt="" />
                <h1 className="top_text">תבחר/י את הדרך שלך לתרגל</h1>
            </div>

            <div className="games_container">
                <div className="game_box">
                    <img src="https://i.ibb.co/TwcD0d6/New-Project-6.jpg" alt="" />
                    <p>תרגום לפי זמן</p>
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box">
                    <img src="https://i.ibb.co/WkkxbkB/New-Project-7.jpg" alt="" onClick={() => navigate("/quiz")} />
                    <p>חידון</p>
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box">
                    <img src="https://i.ibb.co/gtxJpfX/New-Project-8.jpg" alt="" />
                    <p>משחק הזיכרון</p>
                    <span>עם המילים שלך</span>
                </div>
            </div>
            
        </div>
    );
}

export default Games;
