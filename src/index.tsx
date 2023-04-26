import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './App/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./helpers/ScrollToTop";
import ReactGA from "react-ga4";

function App() {
  const webMode = useSelector((state: any) => state.chosenMode.toggle);

  return (
    <BrowserRouter>
      <Layout />
      <ScrollToTop />

      <ToastContainer theme={webMode ? 'light' : 'dark'} />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

ReactGA.initialize("G-T88M5S5TSF");

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

reportWebVitals(SendAnalytics);