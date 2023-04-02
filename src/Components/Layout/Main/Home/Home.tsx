import DownloadExtension from "./DownloadExtension/DownloadExtension";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<DownloadExtension/>
        </div>
    );
}

export default Home;
