import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../Services/ToastFunctions";
import "./Articles.css";


function Articles(): JSX.Element {
    const navigate = useNavigate();
    const isLogin = useSelector((state : any) => state.authSlice)

    function navigateToNewArticle(){
        if(!isLogin){
            toastsFunctions.toastError("Must be Login to continue...")
        } else {
            navigate('/specific-article')
        }
    }

    return (
        <div className="Articles">
			<div className="Articles_top_container">
                <h1>מאמרים</h1>
            </div>

            <div className="articles_container">
                <div className="last_articles_container">
                    <p>המאמרים שקראת לאחרונה</p>

                </div>

                <div className="create_new_article" onClick={()=> navigateToNewArticle()}>
                    <p>?רוצים לקרוא מאמר חדש</p>
                    <button >לחצו כאן</button>
                    <img src="https://img.freepik.com/free-photo/close-up-book-paper-with-white-background_23-2148255922.jpg?w=1480&t=st=1680545702~exp=1680546302~hmac=c0c948d64ae654bb9dcacbb287a39d3c27e9d5a010e94577dd58ee0e8ef5299b" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Articles;
