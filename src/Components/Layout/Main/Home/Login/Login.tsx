import "./Login.css";

function Login(): JSX.Element {
    return (
        <div className="Login">
            <div className="Text_Conatiner">
                <span>😎</span>
                <h3>לצפייה במילים ששמרת</h3>
            </div>
            <div className="login_image_and_google">
                <div>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=900&t=st=1680446646~exp=1680447246~hmac=223f77afdaadc58c6c63fb3b32eb0b9c1cba969426ee2e759c104e94bb4460f2" alt="" />
                </div>
                <div className="login_google">
                    <div className="click_here_icon">👇</div>
                    <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
