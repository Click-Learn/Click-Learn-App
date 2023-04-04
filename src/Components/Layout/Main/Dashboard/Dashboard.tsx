import "./Dashboard.css";
import { AiFillStar, AiFillRead } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    const saveWordsListRef = useRef<HTMLDivElement>(null);
    
    const handleSavedWordsClick = () => {
      if (saveWordsListRef.current) {
        saveWordsListRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
        
        setIsAnimating(true);

        setTimeout(() => {
              setIsAnimating(false);
        }, 2000);      }
    };

    return (
        <div className="Dashboard">
			<div className="dashboard_top_container">
                    <div className="dashboard_top_box saved_words_box" onClick={() => handleSavedWordsClick()}>
                        <span className="icon_box"><AiFillStar/></span>
                        <div>
                            <p className="saved_text">מילים שמורות</p>
                            <p className="saved_words_count">9</p>
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
                        <img src="https://img.freepik.com/free-vector/duplicate-concept-illustration_114360-4010.jpg?w=740&t=st=1680533346~exp=1680533946~hmac=a3ba35e309431c8289f0fd114cd36c45cd5912d6ac7c67d656b276486fbc676d" alt="" />
                    </div>
                    <div className={`save_words_list_container${isAnimating ? " animating" : ""}`} ref={saveWordsListRef}>
                        <div className="save_words_lists_line">

                            <div>
                                Star
                            </div>
                            <div className="translate_saved_word">
                                <p>מילה</p>
                                <span>Array</span>
                                <p>Word</p>
                            </div>
                        </div>
                        <div className="save_words_lists_line">

                            <div>
                                Star
                            </div>
                            <div className="translate_saved_word">
                                <p>מילה</p>
                                <span>Array</span>
                                <p>Word</p>
                            </div>
                        </div>
                        <div className="save_words_lists_line">

                            <div>
                                Star
                            </div>
                            <div className="translate_saved_word">
                                <p>מילה</p>
                                <span>Array</span>
                                <p>Word</p>
                            </div>
                        </div>
                        <div className="save_words_lists_line">

                            <div>
                                Star
                            </div>
                            <div className="translate_saved_word">
                                <p>מילה</p>
                                <span>Array</span>
                                <p>Word</p>
                            </div>
                        </div>
                        <div className="save_words_lists_line">

                            <div>
                                Star
                            </div>
                            <div className="translate_saved_word">
                                <p>מילה</p>
                                <span>Array</span>
                                <p>Word</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Dashboard;
