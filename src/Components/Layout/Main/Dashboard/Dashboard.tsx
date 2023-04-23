import "./Dashboard.css";
import { AiFillStar, AiFillRead, AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft, BsSun } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LoginButton from "../Home/Login/LoginButton/LoginButton";
import SavedWords from "./SavedWords/SavedWords";
import { servicesFunctions } from "../../../../Services/ServicesFunctions";
import { WordModel } from "../../../../Models/WordModel";

function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [userWords, setUserWords] = useState<WordModel[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const isLogin = useSelector((state : any) => state.authSlice)

    const saveWordsListRef = useRef<HTMLDivElement>(null);
    
    const handleSavedWordsClick = () => {
      if (saveWordsListRef.current) {
        saveWordsListRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
        
        setIsAnimating(true);

        setTimeout(() => {
              setIsAnimating(false);
        }, 2000);      }
    };

    useEffect(() => {
        if(isLogin) {
            servicesFunctions.getAllWordByUser().then((words: WordModel[] | undefined) => {
                if (words) {
                    setUserWords(words);
                }
            });
        } else {
            console.log("not logged");
            
        }
      }, [refresh, isLogin]);
      
 

    return (
        <div className="Dashboard">
			<div className="dashboard_top_container">
                    <div className="dashboard_top_box saved_words_box" onClick={() => handleSavedWordsClick()}>
                        <span className="icon_box"><AiFillStar/></span>
                        <div className="saved_words_container">
                            <div className="saved_words_inner">

                            <p className="saved_text">מילים שמורות</p>
                            <p className="saved_words_count">
                                {isLogin ? 
                            userWords.length 
                            : 
                            0    
                        }
                            </p>
                        </div>
                        </div>
                        <span className="icon_arrow"><BsArrowLeft/></span>
                    </div>
                <div className="dashboard_top_box" onClick={() => navigate("/games") }>
                       <span className="icon_box"><IoGameController/></span>
                        <div>
                            <p className="game_text">לתרגל את המילים</p>
                            <p className="saved_words_count"></p>
                        </div>
                        <span className="icon_arrow"><BsArrowLeft/></span>
                </div>

                <div className="dashboard_top_box"  onClick={() => navigate("/articles") }>
                <span className="icon_box"><AiFillRead/></span>
                        <div>
                            <p className="game_text">לקריאת מאמרים</p>
                            <p className="saved_words_count"></p>
                        </div>
                        <span className="icon_arrow"><BsArrowLeft/></span>
                    
                </div>
            </div>
            <div className="dashboard_bottom_container">
                    <div className="banner_dashboard">
                        <img src="https://i.ibb.co/0Zm9jyk/duplicate-concept-illustration-114360-4010-2.png" alt="" />
                    </div>
                    <div className={`save_words_list_container${isAnimating ? " animating" : ""}`} ref={saveWordsListRef}>
                    
                    {isLogin ?
                        <SavedWords userWords={userWords} refresh={refresh} setRefresh={setRefresh} />
         
                 :
                 <div className="notLogged_dashboard_container">
                    <p>התחבר כדי לראות את המילים ששמרת</p>
                     <LoginButton/> 
                 </div>
        }
                    </div>
            </div>
            </div>
    );
}

export default Dashboard;
