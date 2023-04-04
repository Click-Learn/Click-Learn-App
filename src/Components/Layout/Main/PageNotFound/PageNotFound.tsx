import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="PageNotFound">
            <div className="pageNotFound_Container">
			<h1 className="notFoundNumber">404</h1>
			<h1 className="notFountText">..העמוד לא נמצא</h1>
            <button onClick={() => navigate("/dashboard")}>חזרה לאזור האישי</button>

            </div>
        </div>
    );
}

export default PageNotFound;
