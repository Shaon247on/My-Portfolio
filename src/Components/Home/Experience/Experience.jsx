import { useContext } from "react";
import Title from "../../Shared/Title";
import { ProviderContext } from "../../../Provider/Provider";
import { LuGraduationCap } from "react-icons/lu";
import { TbSettingsCode } from "react-icons/tb";


const Experience = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-around mx-10">
            <div className="autoScroll">
                <div className="flex items-center justify-center">
                    <LuGraduationCap className="text-purple-500 text-[70px] -mr-12 -mt-5 autoScroll"></LuGraduationCap>
                    <Title
                        title='My Education'
                    ></Title>
                </div>
                <div className="pl-7 py-8 space-y-2 rounded-3xl  bg-white hover:bg-gradient-to-r from-[#311860] to-[#864ff5] duration-300 dark:bg-[#140c1c] group">
                    <h1 className="text-xl text-[#8750f7] group-hover:text-white duration-300 font-semibold">2018-2023</h1>
                    <h2 className="text-2xl text-[#140c1c] group-hover:text-white duration-300 dark:text-white font-bold uppercase">Honors in Accounting</h2>
                    <p className="text-base text-[#140c1c] group-hover:text-white duration-300 dark:text-white font-medium">Tongi Govn College and University, Gazipur.</p>
                </div>
            </div>
            <div className="autoScroll">
                <div className="flex items-center justify-center">
                    <TbSettingsCode className="text-purple-500 text-[55px] -mr-8 -mt-5 autoScroll"></TbSettingsCode>
                    <Title
                        title='My Experience'
                    ></Title>
                </div>
                <div className="pl-7 py-8  space-y-2 rounded-3xl bg-white hover:bg-gradient-to-r from-[#311860] to-[#864ff5] duration-300 dark:bg-[#140c1c] group">
                    <h1 className="text-xl text-[#8750f7] group-hover:text-white duration-300 font-semibold">2024-Present</h1>
                    <h2 className="text-2xl text-[#140c1c] group-hover:text-white duration-300 dark:text-white font-bold uppercase">Web Development</h2>
                    <p className="text-base text-[#140c1c] group-hover:text-white duration-300 dark:text-white font-medium">Programming Hero, Banani.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;