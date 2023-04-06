import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import "./Layout.css";
import Main from "./Main/Main";

function Layout(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)

    return (
        <div className="Layout" data-theme={webMode ? `dark-mode` : `light-mode`}> 
            <div className="svg1"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M441.5770568847656,231.5412139892578C438.5035809326172,214.85662651062012,407.5179179382324,179.02777442932128,429.0322570800781,163.44085693359375C450.54659622192383,147.85393943786622,525.8781420898438,181.31272010803224,529.3906860351562,167.921142578125C532.9032299804687,154.52956504821776,434.5878112792969,120.63619449615479,443.3691711425781,108.78135681152344C452.15053100585936,96.92651912689209,535.3763401794433,116.89964015960693,565.2329711914062,119.53404998779297" fill="none" strokeWidth="8" stroke="#58e5a5" strokeLinecap="round" strokeDasharray="0 0"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg></div>
            <div className="svg2"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M334.0501708984375,66.66667175292969C351.07526143391925,79.80884552001953,426.3440856933594,113.41099294026694,436.2007141113281,145.51971435546875C446.0573425292969,177.62843577067056,372.72996520996094,234.82676696777344,393.18994140625,259.3190002441406C413.64991760253906,283.8112335205078,531.3321329752604,286.9474283854167,558.9605712890625,292.4731140136719" fill="none" strokeWidth="9" stroke="#58e5a5" strokeLinecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg></div>
            <Header/>
            <Main/>
			<Footer/>
        </div>
    );
}

export default Layout;
