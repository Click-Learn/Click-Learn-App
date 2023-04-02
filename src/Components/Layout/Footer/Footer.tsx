import "./Footer.css";
import studentHatImage from "./illustration-student.png"
function Footer(): JSX.Element {
    return (
        <div className="Footer">
     
     {/* <footer className="footer">
        <div className="start-learning">
            <div className="footer-start">
                <div className="texts">
                    <h2 className="section-title">תתחיל/י לשפר את האנגלית</h2>
                    <h3 className="section-sub-heading">
                        <span>  בקרוב - לימוד עם  </span>
                        <strong>מורה</strong> 
                        <span> רק ב</span> 
                        <strong>30 ש"ח</strong>
                        <span> לשיעור </span>
                    </h3>
                </div>
                <a href="#" className="button">
                    <span className="label">הצטרף/י למשפחה</span>
                </a>
            </div>
        </div>
        <div className="inner">
            <div className="column is-nav">
                <div className="column-title">Navigation</div>
                <ul>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Contact</div>
                <ul>
                    <li><a href="mailto:clicklearnapp@gmail.com"><i className="fa fa-envelope-open"></i> clicklearnapp@gmail.com</a></li>
                    <li><a href="*"><i className="fa fa-twitter"></i>@Github</a></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Here</div>
                <ul>
                    <li>Here</li>
                    <li>here</li>
                </ul>
            </div>
        </div>
    </footer> */}
        
        
        <footer className="footer">
        <div className="start-learning">
            <div className="footer-start">
                <div className="texts">
                   <h2 className="section-title">תתחיל/י לשפר את האנגלית</h2>
                    <h3 className="section-sub-heading">
                    <span>  בקרוב - לימוד עם  </span>
                        <strong>מורה</strong> 
                        <span> רק ב</span> 
                        <strong>30 ש"ח</strong>
                        <span> לשיעור </span>
                    </h3>
                </div>
                <a href="#" className="button">
                <span className="label">הצטרף/י למשפחה</span>
                </a>
                <img className="illustration" src={studentHatImage} alt="illustration" width="120" height="94"/>
            </div>
        </div>
        <div className="inner">
            <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src="logo.png" alt="stackfindover"/>
                    </div>
                    <div className="logo-info">
                        <div className="text">Stackfindover</div>
                        <span className="copyright">© 2021. All rights reserved.</span>
                    </div>
                </a>
            </div>
            <div className="column is-nav">
                <div className="column-title">Navigation</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Join</a></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Contact</div>
                <ul>
                    <li><a href="#"><i className="fa fa-envelope-open"></i> info@stackfindover.com</a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i>@stackfindover</a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i>Linkedin</a></li>
                </ul>
                <div className="column-title">Other</div>
                <ul>
                    <li><a href="#">Quiz</a></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">Blog</div>
                <ul>
                    <li><a href="#">What is jQuery</a></li>
                    <li><a href="#">What is JavaScript</a></li>
                    <li><a href="#">How to make money with a blog</a></li>
                </ul>
            </div>
        </div>
    </footer>
        
        
        </div>
    );
}

export default Footer;
