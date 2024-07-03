import Title from "../../Shared/Title";
import react from '../../../assets/react.png'
import mongoDB from '../../../assets/mongoDB.png'
import html from '../../../assets/html.png'
import css from '../../../assets/css-3.png'
import express from '../../../assets/Express.png'
import javaScript from '../../../assets/java-script.png'
import nodeJS from '../../../assets/nodejs.png'

const Skills = () => {
    return (
        <div>
            <Title title='My Skills' subTitle='Empowering digital experiences through innovative solutions and creative problem-solving. Explore how my expertise transforms ideas into impactful web applications.'></Title>
            <div className="flex items-center justify-center gap-9">
                <div className="flex mt-10">
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={express} alt="" />
                        <h1>Express</h1>
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={mongoDB} alt="" />
                        <h1>MongoDB</h1>
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={nodeJS} alt="" />
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={html} alt="" />
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={css} alt="" />
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={javaScript} alt="" />
                    </div>
                    <div className="skill-card bg-white dark:bg-[#0f172a] px-4 w-[200px] h-[300px] overflow-hidden relative cursor-pointer rounded-md">
                        <img src={react} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;