import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <div className="pageNotFound_Container">
			<h1 className="notFoundNumber">404</h1>
			<h1 className="notFountText">Page Not Found..</h1>

            </div>
        </div>
    );
}

export default PageNotFound;
