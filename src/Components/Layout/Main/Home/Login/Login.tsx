import "./Login.css";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";


function Login(): JSX.Element {
const navigate = useNavigate();
const isLogin = useSelector((state : any) => state.authSlice)


    return (
      <div className="Login">

        <div className="Text_Conatiner">
          <span>😎</span>
          <h3>לצפייה במילים ששמרת</h3>
        </div>
        <div className="login_image_and_google">
          <div>
            <img src="https://i.ibb.co/cYwnYNX/New-Project.png" alt="" />
          </div>

          <div className="login_google">
            <div className="click_here_icon">👇</div>
            {isLogin ? (
            <button onClick={() => navigate("/dashboard")}>לאיזור האישי</button>
            ) : (
         <LoginButton/>
        )}

          </div>
        </div>
      </div>
    );
}

export default Login;
