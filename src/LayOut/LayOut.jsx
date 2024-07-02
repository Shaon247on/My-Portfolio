import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


const LayOut = () => {
    return (
        <div>
            <div className="fixed w-full md:px-16 z-20">
                <NavBar></NavBar>
            </div>
            <div className="z-10 pt-[80px]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;