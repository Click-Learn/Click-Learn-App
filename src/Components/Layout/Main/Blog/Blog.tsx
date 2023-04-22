import "./Blog.css";
import MainBanner from "./MainBanner.jpg";
import blog1Image from "./blog1.jpg";
import blog2Image from "./blog2.jpg";
import blog3Image from "./blog3.jpg";
import { useNavigate } from "react-router-dom";
import PodcastsSection from "./PodcastsSection/PodcastsSection";
import AdvantagesSection from "./AdvantagesSection/AdvantagesSection";

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
                <p className="article_title">"למידת אנגלית באינטרנט: הפתרון הנוח"</p>
                <p className="article_author">היתרונות הרבים של למידת אנגלית באמצעות האתר שלנו, כולל לוח זמנים גמיש, מסלולי למידה מותאמים אישית, וגישה לדוברי אנגלית שוטפים.</p>
                </div>
                <div className="article" onClick={() => navigate("/blog-post-2")}>
                <img className="image_article" src={blog2Image} alt="" />
                <p className="article_title">"מעבר מעברית לאנגלית: טיפים וטכניקות"</p>
                <p className="article_author">אסטרטגיות מועילות שיעזרו לדוברי עברית להתמודד עם אתגרים נפוצים בלמידת האנגלית, כמו תרגול מילים, דקדוק וביטוי.</p>
                </div>
                <div className="article" onClick={() => navigate("/blog-post-1")}>
                <img className="image_article" src={blog1Image} alt="" />
                <p className="article_title">"היתרונות של למידת אנגלית וההזדמנויות"</p>
                <p className="article_author">היתרונות הרבים של שליטה בשפה אנגלית ועברית ברמה גבוהה, בין אם זה בתחום העבודה, קשרים בינלאומיים או טיולים.</p>
                </div>

            </div>

                <PodcastsSection/>
                <AdvantagesSection/>
        </div>
    );
}

export default Blog;
