import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { servicesFunctions } from "../../../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../../../Services/ToastFunctions";
import "./Articles.css";
import { MdArticle, MdOutlineArticle } from "react-icons/md";
import { ArticleModel } from "../../../../../Models/ArticleModel";

function Articles(): JSX.Element {
    const navigate = useNavigate();
    const isLogin = useSelector((state : any) => state.authSlice);
    const [articles, setArticles] = useState<ArticleModel[]>([]);

    function navigateToNewArticle(){
        if(!isLogin){
            toastsFunctions.toastError("Must be Login to continue...")
        } else {
            navigate('/specific-article')
        }
    }

    useEffect(() => {
        if(isLogin){ 
            servicesFunctions.getAllArticlesByUser().then(res => setArticles(res));
        }
        
    }, [isLogin])

    return (
        <div className="Articles">
			<div className="Articles_top_container">
                <h1>מאמרים</h1>
            </div>

            <div className="articles_container">
                <div className="last_articles_container">
                    {articles.length >= 1 ?
                    articles.map((article) => (
                        <div className="article_by_user_container" onClick={() => navigate(`/article/${article.id}`)}>
                        <div className="article_icon">
                            <MdOutlineArticle className="delete_icon_stroke" style={{ color : 'var(--color-dark)'}}/>
                            <MdArticle className="delete_icon_full" style={{ color : 'var(--color-dark)'}}/>
                        </div>
                        <div className="article_title_desc">
                            <p className="article_title">{article.articleTitle} /</p>
                            <p className="article_desc">{article.article.split(' ').slice(0, 3).join(' ')}...</p>
                        </div>
                    </div>
                    ))
                   : <>
                   Please Login
                   </>}
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
