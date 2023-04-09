import "./Blog.css";
import MainBanner from "./MainBanner.jpg";
import blog1Image from "./blog1.jpg";
import blog2Image from "./blog2.jpg";
import blog3Image from "./blog3.jpg";
import blog4Image from "./blog4.jpg";
import { useNavigate } from "react-router-dom";

function Blog(): JSX.Element {
    const navigate = useNavigate()
    return (
        <div className="Blog">
			<div className="blog_main_img_container">
                <img className="main_image"src={MainBanner} alt="" />
            </div>
			<div className="blog_articles_container">
                <div className="article" onClick={() => navigate("/blog-post-3")}>
                <img className="image_article" src={blog3Image} alt="" />
                <p className="article_title">"האנגלית כשפת מפתח להצלחה"</p>
                <p className="article_author">חשיבותה של השפה האנגלית בהשגת הצלחה, קידום אישי ומקצועי.</p>
                </div>
                <div className="article" onClick={() => navigate("/blog-post-2")}>
                <img className="image_article" src={blog2Image} alt="" />
                <p className="article_title">"הדרך הקלה ביותר ללמוד אנגלית"</p>
                <p className="article_author">גישה פשוטה ויעילה ללימוד אנגלית, שניתן להבין וליישם בקלותם.</p>
                </div>
                <div className="article" onClick={() => navigate("/blog-post-1")}>
                <img className="image_article" src={blog1Image} alt="" />
                <p className="article_title">"טיפים לשיפור האנגלית שלך"</p>
                <p className="article_author">עצות שימושיות לייעול תהליך למידת השפה האנגלית.</p>
                </div>

            </div>

                <div>
                    <h3 className="vacation_advantages_title">Vacations Advantages</h3>
                    {/* <img width={400} src="https://img.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg?w=1380&t=st=1676228322~exp=1676228922~hmac=bd0cab36d7d64e6db59a31886c00851e097dfc003814284f204fae78af19325d" alt="" /> */}
                </div>
        </div>
    );
}

export default Blog;
