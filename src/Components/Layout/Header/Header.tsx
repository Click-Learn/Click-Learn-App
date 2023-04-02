import "./Header.css";
import logo from "./ClickLearnLogo.jpeg";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<div>
                <img className="header_logo" src={logo} alt="" />
            </div>
        </div>
    );
}

export default Header;
