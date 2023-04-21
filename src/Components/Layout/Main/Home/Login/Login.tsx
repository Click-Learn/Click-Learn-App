import "./Login.css";
import { logoutRedux } from "../../../../../App/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "./LoginButton/LoginButton";


function Login(): JSX.Element {
    const dispatch = useDispatch();

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
            <button onClick={() => dispatch(logoutRedux())}>התנתק/י</button>
            ) : (
         <LoginButton/>
        )}

          </div>
        </div>
      </div>
    );
}

export default Login;
