import "./Video.css";

function Video(): JSX.Element {
    return (
        <div className="Video">
			<div className="video_container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lvi0-1h_wsc" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
        </div>
    );
}

export default Video;
