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
                    <img src="https://i.ibb.co/cYwnYNX/New-Project.png" alt="" />
                </div>
                
                <div className="login_google">
                    <div className="click_here_icon">👇</div>
                    <button>
                        <img src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" />
                        <span>התחבר/י עם גוגל</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
