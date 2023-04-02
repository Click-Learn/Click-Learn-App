import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";
import Main from "./Main/Main";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header/>
            <Main/>
			<Footer/>
        </div>
    );
}

export default Layout;
