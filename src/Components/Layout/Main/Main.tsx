import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                {/* <Route path="/card/:id" element={<CardTemplate/>}></Route> */}
                {/* <Route path="/user" element={<UserDashboard/>}></Route> */}
                {/* <Route path="/*" element={<PageNotFound/>}></Route> */}
			</Routes>
        </div>
    );
}

export default Main;
