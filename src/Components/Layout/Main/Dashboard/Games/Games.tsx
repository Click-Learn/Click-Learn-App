import { useNavigate } from "react-router-dom";
import "./Games.css";
import memoryGamePhoto from './memory-game-photo.webp';
import quizGamePhoto from './quiz-game-photo.webp';
import translatebyTime from './translateByTime.webp';
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../../../Services/ToastFunctions";
import { useSelector } from "react-redux";

function Games(): JSX.Element {

    const navigate = useNavigate();
    const isLogin = useSelector((state : any) => state.authSlice)

       
    const  handleMemoryGameClick = async () =>  {
        if (!isLogin) {
            navigate("/");
            toastsFunctions.toastError("אנא התחבר בכדי להמשיך...");
          } 
        const totalWords = await servicesFunctions.getAllWordByUser();
        console.log(totalWords?.length);
        
        if(totalWords?.length < 6 ){
            toastsFunctions.toastError("חייבים לשמור לפחות 6 מילים על מנת לשחק במשחק הזיכרון")   
        }else{
            navigate("/memorygame")
        }
      };

    return (
        <div className="Games">
			<div className="games_top_container">
                <img className="background_top_image" src="https://img.freepik.com/free-photo/top-view-interlocking-plastic-blocks-baby-shower_23-2148430489.jpg?w=1480&t=st=1680540345~exp=1680540945~hmac=4041335935a7e1c94afbb978943134555af96179462c0eb366c841e6a2bf083e" alt="" />
                <h1 className="top_text">תבחר/י את הדרך שלך לתרגל</h1>
            </div>

            <div className="games_container">
                <div className="game_box" onClick={() => navigate("/TranslateWithTimer")}>
                    <img src={translatebyTime} alt="" />
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box" onClick={() => navigate("/quiz")}>
                    <img src={quizGamePhoto} alt="" />
                    <span>עם המילים שלך</span>
                </div>

                <div className="game_box " onClick={handleMemoryGameClick}>
                    <img src={memoryGamePhoto} alt=""  />
                    <span>עם המילים שלך</span>
                </div>
            </div>
            
        </div>
    );
}

export default Games;
