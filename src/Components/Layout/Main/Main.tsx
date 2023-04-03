import { Routes, Route } from "react-router-dom";
import Articles from "./Dashboard/Articles/Articles";
import Dashboard from "./Dashboard/Dashboard";
import Games from "./Dashboard/Games/Games";
import Home from "./Home/Home";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                {/* <Route path="/card/:id" element={<CardTemplate/>}></Route> */}
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/games" element={<Games/>}></Route>
                <Route path="/articles" element={<Articles/>}></Route>
                {/* <Route path="/*" element={<PageNotFound/>}></Route> */}
			</Routes>
        </div>
    );
}

export default Main;
