import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
     
     <footer className="footer">
        <div className="start-learning">
            <div className="footer-start">
                <div className="texts">
                    <h2 className="section-title">Start improve yourself</h2>
                    <h3 className="section-sub-heading">
                        {/* <span> PREMIUM Cards - Only</span><strong> $5 </strong> */}
                        <span> Coming Soon - PREMIUM Games - Only</span><strong> $5 </strong>
                        <span>for a</span> <strong>One year</strong>
                    </h3>
                </div>
                <a href="#" className="button">
                    <span className="label">Join the club</span>
                </a>
            </div>
        </div>
        <div className="inner">
            {/* <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src="logo.png" alt="stackfindover"/>
                    </div>
                    <div className="logo-info">
                        <div className="text">Stackfindover</div>
                        <span className="copyright">© 2021. All rights reserved.</span>
                    </div>
                </a>
            </div> */}
            <div className="column is-nav">
                <div className="column-title">Navigation</div>
                <ul>
                    {/* <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/createcardsteps">Create new Card</Link></li>
                    <li><Link to={`/user`}>My Cards</Link></li> */}
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
    </footer>
        </div>
    );
}

export default Footer;
