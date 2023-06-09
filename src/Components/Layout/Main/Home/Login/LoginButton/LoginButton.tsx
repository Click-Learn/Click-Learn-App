import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginRedux } from "../../../../../../App/authSlice";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import "./LoginButton.css";
import { useDispatch } from "react-redux";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";

function LoginButton(): JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    function loginGoogle(credentialResponse: any) {
        const details: any = jwtDecode(credentialResponse.credential)
            try {
                dispatch(loginRedux(credentialResponse.credential))
                if (window.location.pathname === "/" || window.location.pathname === "/home") {
                    navigate("/dashboard");
                  }
                  window.location.reload();

              
            } catch (e : any) {
                console.log(e);
                toastsFunctions.toastError("ישנה תקלה בהתחברות");
            }
        }
        
    return (
        <div className="LoginButton">
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
        </div>
    );
}

export default LoginButton;
