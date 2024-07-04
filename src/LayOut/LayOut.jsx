import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";


const LayOut = () => {
    const {theme} = useContext(ProviderContext)
    return (
        <div className={`${theme=== 'winter'? 'bg-white': 'bg-[#0f172a]'}`}>
            <div className="fixed w-full md:px-16 z-20">
                <NavBar></NavBar>
            </div>
            <div className="z-10 pt-[80px] mb-10">
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default LayOut;