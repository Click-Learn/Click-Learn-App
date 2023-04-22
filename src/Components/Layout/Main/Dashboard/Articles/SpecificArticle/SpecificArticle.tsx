import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./SpecificArticle.css";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Breadcrumbs, Typography } from "@mui/material";
import { servicesFunctions } from "../../../../../../Services/ServicesFunctions";
import loadingGIF from "./loadingGIF.gif";

function SpecificArticle(): JSX.Element {
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    
    const isLogin = useSelector((state : any) => state.authSlice);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const [hasLoaded, setHasLoaded] = useState(false);

    
  useEffect(() => {
    if(!isLogin){
      navigate("/")
      toastsFunctions.toastError("אנא התחבר בכדי להמשיך...")
    } else {
      if(!hasLoaded && !description){
        setIsLoading(true);
        servicesFunctions.createNewArticle().then((res: any) => {
          res = JSON.parse(res);
          console.log(res);
          setDescription(res.article)
          setTitle(res.articleTitle ?? "אירעה שגיאה, נסה/י שוב מאוחר יותר")
          setIsLoading(false)
          setHasLoaded(true);
        });
      }
                
    }
  }, [description, hasLoaded]);
    return (
        <div className="SpecificArticle">
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
            <div className="specificArticle_top_container">
                    <h1>מאמר חדש </h1>
            </div>
            <article className="article_main_container">
                {isLoading ? 
                <div>
                  <div className="loader_container">
                    <p>...כותבים עבורך את המאמר עם המילים המועדפות שלך</p>
                  <img src={loadingGIF} />
                  </div>
                <div>

                    <Box   sx={{
                      width: 750,
                        justifyContent: 'start',
                        gap: '30px',
                        margin: '0 auto',
                        '@media (max-width: 866px)': {
                          width: '90%',
                          margin: '0 auto',
                        },
                      }}>
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
                      </div>
                  </div>
                  :
                  <div>
                    
                 <h2>{title}</h2>
                 <p>{description}</p>
                </div>
            }
            </article>
        </div>
    );
}

export default SpecificArticle;
