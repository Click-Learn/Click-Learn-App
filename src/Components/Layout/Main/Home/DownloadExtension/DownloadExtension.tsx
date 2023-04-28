import "./DownloadExtension.css";
import { BsFillPlayFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
function DownloadExtension(): JSX.Element {
    const navigate = useNavigate()
    return (
        <div className="DownloadExtension">
			<h1>התוסף שיקל לך על החיים</h1>
            <p>הפתרון האולטימטיבי לכל צרכי תרגום המילים שלך בלחיצה אחת. תוכל לבחור כל מילה ולקבל את התרגום שלה במהירות. היפרד מהטרחה של המעבר בין כרטיסיות ומנועי חיפוש לתרגומים</p>

            <div className="Download_Video_Container">
                <button className="btn_video" onClick={() => navigate("/video")}>צפה הדגמה <BsFillPlayFill/></button>
                <a target="_blank" href="https://chrome.google.com/webstore/detail/english-to-hebrew-transla/pdchgmgjkeopcekfahjaikiclljlcpjc">
                    <button className="btn_extension" >למעבר לתוסף</button>
                </a>
            </div>
        </div>
    );
}

export default DownloadExtension;
