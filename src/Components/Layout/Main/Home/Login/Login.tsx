import "./Login.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginRedux, logoutRedux } from "../../../../../App/authSlice";
import { useDispatch, useSelector } from "react-redux";


function Login(): JSX.Element {
const navigate = useNavigate()
const dispatch = useDispatch();

const isLogin = useSelector((state : any) => state.authSlice)

    function loginGoogle(credentialResponse: any) {
        const details: any = jwtDecode(credentialResponse.credential)
        console.log(details);
        
        // const email= details.email; 
        // console.log(email);
            try {
                    dispatch(loginRedux(credentialResponse.credential))
                    // if (!notComputer) {
                        // toastsFunctions.toastInfo("Head to the settings to choose a different language");
                    // }
                    navigate("/dashboard");
            } catch (e) {
                console.log(e);
                // toastsFunctions.toastError(e.response.data);
            }
        }
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
            <button onClick={() => dispatch(logoutRedux())}>Logout</button>
            ) : (
          <GoogleOAuthProvider clientId="5407130036-dmu0ef4jmaslij5smo0d0lt31ug63jkv.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                loginGoogle(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        )}

          </div>
        </div>
      </div>
    );
}

export default Login;
