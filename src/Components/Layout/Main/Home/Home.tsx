import DownloadExtension from "./DownloadExtension/DownloadExtension";
import "./Home.css";
import Login from "./Login/Login";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<DownloadExtension/>
            <Login/>
        </div>
    );
}

export default Home;
