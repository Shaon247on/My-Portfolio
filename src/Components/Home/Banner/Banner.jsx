import { useContext } from "react";
import { ProviderContext } from "../../../Provider/Provider";
import photo from '../../../assets/Shawon1 (2).jpg'


const Banner = () => {
    const { theme } = useContext(ProviderContext)
    return (
        <div className={`${theme === 'winter' ? "bg-winter" : "bg-night"} bg-no-repeat bg-cover h-screen flex gap-12 items-center`}>
            <div className="w-[600px] ml-28 space-y-4">
                <h1 className="text-3xl font-bold text-[#2a1454] dark:text-[#dfdbe0]">I am Shaon</h1>
                <div className={`${theme === 'winter' ? "text-gradient" : "dark-text-gradient"} `}>
                    <h2 className="text-6xl font-bold">Full-Stake <br /> Web Developer</h2>
                </div>
                <p className="text-[20px] ">Junior web developer skilled in creating responsive websites using HTML, CSS, JavaScript, and React. Passionate about crafting user-friendly and visually appealing web experiences</p>
                <div>
                    <button className="px-6 py-3  border-2 border-[#8851f7] rounded-full bg-none hover:bg-[#8851f7] duration-300 text-[#8851f7] font-semibold hover:text-white"><a href="My-Resume.pdf" download>Download CV</a></button>
                </div>
            </div>

            <div className="flex items-center justify-center rounded-3xl  shadow-none hover:shadow-[0 4px 6px rgb(136,81,247)] w-[560px]">
                <img src={photo} alt="" className="w-[400px] h-[470px] border-[0px] hover:border-[4px] border-[#8851f7] rounded-3xl rotate-6 hover:rotate-0 duration-300" />
            </div>
        </div>
    );
};

export default Banner;