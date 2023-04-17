import "./Footer.css";
import studentHatImage from "./illustration-student.png"
import logo from "../Header/clickLearnNewLogo.png";
import { Link } from "react-router-dom";
import { Modal, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    alignItems: 'center',
    justifyContent: 'center'
  };

function Footer(): JSX.Element {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="Footer">
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
                <a onClick={handleOpen} className="button">
                <span className="label">לקבלת עדכון</span>
                </a>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    הרשם/י לקבלת עדכונים
                    </Typography>
                    <TextField id="outlined-basic" sx={{width: '80%'}}  label="Email" variant="outlined" />
                    <button className="newsletter_modal_btn">שלח</button>
                </Box>
                </Modal>
                <img className="illustration" src={studentHatImage} alt="illustration" width="120" height="94"/>
            </div>
        </div>
        <div className="inner">
            <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src={logo} alt="Click Learn App Logo"/>
                    </div>
                    {/* <div className="logo-info">
                        <div className="text">Click Learn App</div>
                        <span className="copyright">© 2021. All rights reserved.</span>
                    </div> */}
                </a>
            </div>
            <div className="column is-nav">
                <div className="column-title">ניווט באתר</div>
                <ul>
                    <li> <Link to="/">דף הבית</Link></li>
                    <li> <Link to="/dashboard">איזור אישי</Link></li>
                    <li> <Link to="/games">משחקים</Link></li>
                    <li> <Link to="/blog">בלוג</Link></li>
                </ul>
            </div>
            <div className="column is-nav">
                <div className="column-title">צור קשר</div>
                <ul>
                    <li><a href="#"><i className="fa fa-envelope-open"></i> clicklearnapp@gmail.com</a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i>@Youtube</a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i>Linkedin</a></li>
                </ul>
                {/* <div className="column-title">Other</div>
                <ul>
                    <li><a href="#">Quiz</a></li>
                </ul> */}
            </div>
            <div className="column is-nav last_column">
                <div className="column-title">בלוג</div>
                <ul>
                    <li> <Link to="/blog-post-1">"טיפים לשיפור האנגלית שלך"</Link></li>
                    <li> <Link to="/blog-post-2">"הדרך הקלה ביותר ללמוד אנגלית"</Link></li>
                    <li> <Link to="/blog-post-3">"האנגלית כשפת מפתח להצלחה"</Link></li>
                </ul>
            </div>
        </div>
    </footer>
        
        
        </div>
    );
}

export default Footer;
