import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./SpecificArticle.css";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Breadcrumbs, Typography } from "@mui/material";
const newArticle = {
    title: "",
    // title: "Food article",
    // description: " Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, a corporis optio asperiores tempore porro ad nam excepturi qui voluptatibus consequatur sunt illum soluta necessitatibus voluptatum pariatur ipsa perferendis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse ipsam officiis dolorem est laborum iusto debitis. Dolores ut, nulla ullam consectetur distinctio fuga molestiae quis quam sunt eum velit. consectetur adipisicing elit. Commodi accusamus nemo fugit qui reprehenderit eius aliquam velit illo, accusantium quae, molestias aperiam odio eligendi ducimus! Molestias pariatur rem similique mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iste optio iure! Sunt consequatur ratione quisquam, suscipit rerum, necessitatibus debitis nihil voluptatibus unde ut quae veniam a sint nobis accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et cum quo vitae fugiat non maiores dolore cumque deserunt ipsam, iste excepturi saepe, neque eos repellat quas mollitia dolor tempora?"
    description: ""
}

function SpecificArticle(): JSX.Element {
    
    const isLogin = useSelector((state : any) => state.authSlice)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isLogin){
            navigate("/")
            toastsFunctions.toastError("Must be Login to continue...")
        }
        // setIsLoading(true)

        setTimeout(() => {
            newArticle.title = "Food article"
            newArticle.description = " Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, a corporis optio asperiores tempore porro ad nam excepturi qui voluptatibus consequatur sunt illum soluta necessitatibus voluptatum pariatur ipsa perferendis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse ipsam officiis dolorem est laborum iusto debitis. Dolores ut, nulla ullam consectetur distinctio fuga molestiae quis quam sunt eum velit. consectetur adipisicing elit. Commodi accusamus nemo fugit qui reprehenderit eius aliquam velit illo, accusantium quae, molestias aperiam odio eligendi ducimus! Molestias pariatur rem similique mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iste optio iure! Sunt consequatur ratione quisquam, suscipit rerum, necessitatibus debitis nihil voluptatibus unde ut quae veniam a sint nobis accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et cum quo vitae fugiat non maiores dolore cumque deserunt ipsam, iste excepturi saepe, neque eos repellat quas mollitia dolor tempora?"
            setIsLoading(false)

        }, 1000);
    })
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
                  :
                  <div>
                    
                 <h2>{newArticle.title}</h2>
                 <p>{newArticle.description}</p>
                </div>
            }
            </article>
        </div>
    );
}

export default SpecificArticle;
