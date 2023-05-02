import { Routes, Route } from "react-router-dom";
import Articles from "./Dashboard/Articles/Articles";
import Dashboard from "./Dashboard/Dashboard";
import Games from "./Dashboard/Games/Games";
import Home from "./Home/Home";
import "./Main.css";
import PageNotFound from "./PageNotFound/PageNotFound";
import SpecificArticle from "./Dashboard/Articles/SpecificArticle/SpecificArticle";
import Video from "./Video/Video";
import Quiz from "./Dashboard/Games/Quiz/Quiz";
import MemoryGame from "./Dashboard/Games/MemoryGame/MemoryGame";
import TranslateWithTimer from "./Dashboard/Games/TranslateWithTimer/TranslateWithTimer";
import Blog from "./Blog/Blog";
import BlogArticle1 from "./Blog/BlogArticles/BlogArticle1/BlogArticle1";
import BlogArticle2 from "./Blog/BlogArticles/BlogArticle2/BlogArticle2";
import BlogArticle3 from "./Blog/BlogArticles/BlogArticle3/BlogArticle3";
import ArticleById from "./Dashboard/Articles/ArticleById/ArticleById";
import PrivacyPolicy from "../Footer/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Footer/TermsOfService/TermsOfService";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/games" element={<Games/>}></Route>
                <Route path="/quiz" element={<Quiz/>}></Route>
                <Route path="/TranslateWithTimer" element={<TranslateWithTimer/>}></Route>
                <Route path="/memorygame" element={<MemoryGame/>}></Route>
                <Route path="/articles" element={<Articles/>}></Route>
                <Route path="/article/:id" element={<ArticleById/>}></Route>
                <Route path="/video" element={<Video/>}></Route>
                <Route path="/specific-article" element={<SpecificArticle/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/blog-post-1" element={<BlogArticle1/>}></Route>
                <Route path="/blog-post-2" element={<BlogArticle2/>}></Route>
                <Route path="/blog-post-3" element={<BlogArticle3/>}></Route>
                <Route path="/termsofservice" element={<TermsOfService/>}></Route>
                <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
                <Route path="/*" element={<PageNotFound/>}></Route>
			</Routes>
        </div>
    );
}

export default Main;
