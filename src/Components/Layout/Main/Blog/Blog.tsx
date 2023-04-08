import "./Blog.css";
import MainBanner from "./MainBanner.jpg";

function Blog(): JSX.Element {
    return (
        <div className="Blog">
			<div className="blog_main_img_container">
                <img className="main_image"src={MainBanner} alt="" />
            </div>
			<div className="blog_articles_container">
                <div className="article">
                <img className="image_article" src="https://img.freepik.com/free-photo/landscape-tropical-vacation-palm-summer_1203-5352.jpg?w=1380&t=st=1675791517~exp=1675792117~hmac=ef425190945513f93deb4bec94c0bccdca00665a81087668bc44215b5e63a852" alt="" />
                <p className="article_title">"Escape to Paradise: Ultimate Vacations"</p>
                <p className="article_author">A guide to the most luxurious vacation destinations.</p>
                </div>
                <div className="article">
                <img className="image_article" src="https://img.freepik.com/free-photo/wing-airplane-flying-sea-island_1232-1560.jpg?w=1380&t=st=1675791546~exp=1675792146~hmac=3ebffffd547cf15c7e9a233a13c8a0b63de4c80e16e75fcf39fed4fb9953196c" alt="" />
                <p className="article_title">"Discover Adventure: Unforgettable Vacations"</p>
                <p className="article_author">A guide to adventure-filled vacation destinations.</p>
                </div>
                <div className="article">
                <img className="image_article" src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1085.jpg?w=1380&t=st=1675791615~exp=1675792215~hmac=41797ef143e86c1da5e89ea583a9be50fc68f644a00f3b92e7d8849b428dbca0" alt="" />
                <p className="article_title">"Relax and Rejuvenate: Dream Vacations"</p>
                <p className="article_author">A guide to tranquil vacation destinations for relaxation.</p>
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
