import { useContext } from "react";
import { ProviderContext } from "../../../Provider/Provider";
import photo from '../../../assets/Shawon1 (2).jpg'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Button from "../../Shared/Button";


const Banner = () => {
    const { theme } = useContext(ProviderContext)
    return (
        <div className={`${theme === 'winter' ? "bg-winter" : "bg-night"} bg-no-repeat bg-cover pt-6`}>
            <div className="md:h-screen flex flex-col-reverse md:flex-row gap-12 items-center">
                <div className="w-[300px] md:w-[400px] lg:w-[600px] ml-2 md:ml-12 lg:ml-28">
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#2a1454] dark:text-[#dfdbe0]">I am Shaon</h1>
                    <div className={`${theme === 'winter' ? "text-gradient" : "dark-text-gradient"} my-1 md:my-3 lg:my-4`}>
                        <h2 className="text-3xl lg:text-6xl font-bold">Full-Stake <br /> Web Developer</h2>
                    </div>
                    <p className="md:text-base lg:text-[20px] mb-4 lg:mb-10">Junior web developer skilled in creating responsive websites using HTML, CSS, JavaScript, and React. Passionate about crafting user-friendly and visually appealing web experiences</p>
                    <div className="flex flex-col lg:flex-row items-start md:items-center gap-4 lg:gap-12">
                        <Button text='Download CV' className="px-6 py-3 border-2 border-[#8851f7] rounded-full bg-none hover:bg-[#8851f7] duration-300 text-[#8851f7] font-semibold hover:text-white"><a href="   -Resume.pdf" download></a></Button>
                        <div className="flex items-center gap-4">
                            <div className="border-2 border-[#8851f7] p-2 rounded-full bg-none hover:bg-[#8851f7] duration-300 ease-out group">
                                <a href="https://www.facebook.com/profile.php?id=100007517474589" target="_blank">
                                    <FaFacebookF className="text-[#8851f7] group-hover:text-white duration-300 text-3xl"></FaFacebookF>
                                </a>
                            </div>
                            <div className="border-2 border-[#8851f7] p-2 rounded-full bg-none hover:bg-[#8851f7] duration-300 ease-out group">
                                <a href="https://github.com/Shaon247on" target="_blank">
                                    <FaGithub className="text-[#8851f7] group-hover:text-white duration-300 text-3xl"></FaGithub>
                                </a>
                            </div>
                            <div className="border-2 border-[#8851f7] p-2 rounded-full bg-none hover:bg-[#8851f7] duration-300 ease-out group">
                                <a href="https://www.linkedin.com/in/md-aminul-islam-shaon-61198a208/" target="_blank"><FaLinkedinIn className="text-[#8851f7] group-hover:text-white duration-300 text-3xl"></FaLinkedinIn></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center rounded-3xl  shadow-none hover:shadow-[0 4px 6px rgb(136,81,247)] md:w-[560px]">
                    <img src={photo} alt="" className="w-[250px] md:w-[310px] lg:w-[360px] md:h-[350px] lg:h-[440px] border-[0px] hover:border-[4px] border-[#8851f7] rounded-3xl rotate-6 hover:rotate-0 duration-300" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 px-8 md:px-20 text-[#8851f7] dark:text-white mt-6 md:mt-6 lg:mt-0 pb-8">
                <div className="flex items-center gap-3 col-span-1 ">
                    <h1 className=" text-7xl font-semibold">6</h1>
                    <p className="text-lg font-medium">Months of<br /> Experience</p>
                </div>
                <div className="flex items-center gap-3 col-span-1">
                    <h1 className=" text-7xl font-semibold">5+</h1>
                    <p className="text-lg font-medium">Project<br /> Completed</p>
                </div>
                <div className="flex items-center gap-3 col-span-2 md:col-span-1 sm:justify-center">
                    <h1 className=" text-7xl font-semibold">2</h1>
                    <p className="text-lg font-medium">Happy<br /> Clients</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;