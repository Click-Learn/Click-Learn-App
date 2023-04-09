import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastsFunctions } from "../../../../../../Services/ToastFunctions";
import "./TranslateWithTimer.css";

function TranslateWithTimer(): JSX.Element {
    const isLogin = useSelector((state : any) => state.authSlice)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isLogin){
            navigate("/")
            toastsFunctions.toastError("Must be Login to continue...")
        }
    })
    return (
        <div className="TranslateWithTimer">
			
        </div>
    );
}

export default TranslateWithTimer;
