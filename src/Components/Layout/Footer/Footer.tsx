import "./Footer.css";
import studentHatImage from "./illustration-student.png"
import logo from "../Header/clickLearnNewLogo.png";
import { Link } from "react-router-dom";
import { Modal, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { servicesFunctions } from "../../../Services/ServicesFunctions";
import { toastsFunctions } from "../../../Services/ToastFunctions";


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
    const handleOpen = () =>{
        setOpen(true);
        setEmailError("");
    } 

    const handleClose = () => setOpen(false);
    const [emailInput, setEmailInput] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("");

   async function SubscribeNewsletter() {
        if(validateEmail(emailInput)){
            // verify email 
            const sub = await servicesFunctions.Subscribe(emailInput);
            if(!sub){
                toastsFunctions.toastError("🔒 המייל הזה כבר רשום")
                handleClose();
                return
            } else {

                handleClose();
                toastsFunctions.toastSuccess("👌 קיבלנו בהצלחה")
            }
        } else {
            console.log("wrong email ");
            setEmailError("כתובת המייל שהוזנה אינה חוקית");

        }
    }

    function validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      
    function handleKeypress(e: any) {
        if (e.keyCode === 13) {
            SubscribeNewsletter();
          }
    }

    return (
        <div className="Footer">
        <footer className="footer">
        <div className="start-learning">
            <div className="footer-start">
                <div className="texts">
                   <h2 className="section-title">תתחיל/י לשפר את האנגלית</h2>
                    <h3 className="section-sub-heading">
                        <strong>בקרוב</strong>
                    <span>   - לימוד עם  </span>
                        <strong>מורה  </strong> 
                        <span>אונליין</span>
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
                    <TextField onKeyDown={handleKeypress} id="outlined-basic" sx={{width: '80%'}} onInput={(e: any) => setEmailInput(e.target.value)} label="Email" variant="outlined" />
                    {emailError && <span style={{ color: "red", position:'absolute', bottom: '85px' }}>{emailError}</span>}
                    <button onClick={() => SubscribeNewsletter()} className="newsletter_modal_btn">שלח</button>
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
            </div>
            <div className="column is-nav last_column">
                <div className="column-title">בלוג</div>
                <ul>
                    <li> <Link to="/blog-post-1">"היתרונות של למידת אנגלית"</Link></li>
                    <li> <Link to="/blog-post-2">"מעבר מעברית לאנגלית טיפים וטכניקות"</Link></li>
                    <li> <Link to="/blog-post-3">"למידת אנגלית באינטרנט"</Link></li>
                </ul>
            </div>
        </div>
    </footer>
        
        
        </div>
    );
}

export default Footer;
