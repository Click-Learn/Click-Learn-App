import { useEffect, useState } from "react";
import "./ArticleById.css";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from "react-redux";
import { ArticleModel } from "../../../../../../Models/ArticleModel";
import { Link, useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import { useParams } from 'react-router-dom';
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


function ArticleById(): JSX.Element {
    const isLogin = useSelector((state : any) => state.authSlice)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [article, setArticles] = useState<ArticleModel>();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        // get user by id

        if(!isLogin){
            navigate("/")
            toastsFunctions.toastError("Must be Login to continue...")
        } else {
            if(id){
                servicesFunctions.getArticleByIdByUser(+id).then((res) => setArticles(res)).then(() => {
                    setIsLoading(false)
                })
            } else {
                console.log("error there is not a valid id");
            }
        }        
    }, [])

    return (
        <div className="ArticleById">
            <div className="ArticleById_breadCrumbs">
                    <Breadcrumbs aria-label="breadcrumb"  >
                        <Link  color="inherit" to="/">
                            דף הבית
                        </Link>
                        <Link  color="inherit" to="/dashboard">
                            איזור אישי
                        </Link>
                        <Link
                            color="inherit"
                            to={"/articles"}
                            >
                            כל המאמרים
                        </Link>
                        <Typography color="text.primary"> מאמר הנוכחי</Typography>
                    </Breadcrumbs>
                    </div>
            <div className="ArticleById_top_container">
                    <h1>מאמר חדש </h1>
            </div>
            <article className="article_main_container">
                {isLoading ? 
                    <Box sx={{ width: 600, justifyContent: 'start', gap: "30px" }}>
                    <Skeleton  sx={{ height: 80 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                    <Skeleton animation="wave"  sx={{ height: 30 }} />
                    <Skeleton animation={false}  sx={{ height: 30 }} />
                  </Box>
                  :
                  <div>
                    
                 <h2>{article?.articleTitle}</h2>
                 <p>{article?.article}</p>
                </div>
            }
            </article>
        </div>
    );
}

export default ArticleById;
