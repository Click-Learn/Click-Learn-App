import "./PodcastsSection.css";
import { SiApplepodcasts } from "react-icons/si";
import { useNavigate } from "react-router-dom";


function PodcastsSection(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="PodcastsSection">
			      <div className="podcasts_container">
                    <h3 className="podcasts_title">הפודקאסטים המומלצים</h3>
                    <div className="podacsts_boxes">
                        <div className="podacsts_box"  onClick={() => window.open('https://www.earwolf.com/show/comedy-bang-bang/', '_blank')}>
                                <div className="podcast_name_topic podcast">
                                    <span> Comedy Bang Bang</span>
                                    <span className="podcast_topic">הומור</span>
                                </div>
                                <div className="podcast_icon">
                                    <SiApplepodcasts/>
                                </div>
                            </div>

                            <div className="podacsts_box"  onClick={() => window.open('https://open.spotify.com/show/1NulSGKhstJuty8iYPBMo5?si=05a552d9a28b4a93&nd=1', '_blank')}>
                                <div className="podcast_name_topic podcast">
                                    <span>  Marketing School</span>
                                    <span className="podcast_topic">עסקים ויזמות</span>
                                </div>
                                <div className="podcast_icon">
                                    <SiApplepodcasts/>
                                </div>
                            </div>

                            <div className="podacsts_box" onClick={() => window.open('https://open.spotify.com/show/4byxEuJGV8xnxlgoqHQxxs', '_blank')}>
                                <div className="podcast_name_topic podcast">
                                    <span>The One You Feed</span>
                                    <span className="podcast_topic">התפתחות אישית</span>
                                </div>
                                <div className="podcast_icon">
                                    <SiApplepodcasts/>
                                </div>
                            </div>

                            <div className="podacsts_box"onClick={() => window.open('https://open.spotify.com/show/2dXkTgfC5mECruaLFUERe1?si=ecd31600784744bc&nd=1', '_blank')}> 
                                <div className="podcast_name_topic podcast">
                                    <span>You’re Dead to Me</span>
                                    <span className="podcast_topic">היסטוריה</span>
                                </div>
                                <div className="podcast_icon">
                                    <SiApplepodcasts/>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    );
}

export default PodcastsSection;
