import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProviderContext } from "../../Provider/Provider";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    const { theme } = useContext(ProviderContext)
    const {location} = useParams()
    console.log(location)
    return (
        <footer className="footer footer-center bg-[#2a1454] dark:bg-[#140c1c] text-primary-content p-10">
            <aside>
                <NavLink to='/'>
                    <img src={`${theme === 'winter' ? 'https://i.ibb.co/yh6Hpd7/Solidarity.png' : 'https://i.ibb.co/Qbs9whn/Dark-logo.png'}`} alt="" className="hover:scale-105 duration-300 rounded-full w-16 h-16" />
                </ NavLink>
                <div className="mt-2">
                    <ul className="flex flex-col md:flex-row items-center gap-4 justify-center">
                        <li className="text-white  relative">
                            <NavLink to="/" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-white relative">
                            <NavLink to="skills" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Skills
                            </NavLink>
                        </li>
                        <li className="text-white relative ">
                            <NavLink to="experience" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Experience
                            </NavLink>
                        </li>
                        <li className="text-white relative ">
                            <NavLink to="work" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Work
                            </NavLink>
                        </li>
                        <li className="text-white relative ">
                            <NavLink to="contact" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Contact Us
                            </NavLink>
                        </li>
                        {/* <li className="text-white relative ">
                            <NavLink to="blogs" smooth={true} duration={500} className="cursor-pointer borderEffect">
                                Blogs
                            </NavLink>
                        </li> */}

                    </ul>
                </div>
            </aside>
            <nav>
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
            </nav>
        </footer>
    );
};

export default Footer;