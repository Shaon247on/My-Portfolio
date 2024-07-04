import { useLoaderData, useParams } from "react-router-dom";
import Cover from "../../Shared/Cover";
import Button from "../../Shared/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiExternalLinkFill } from "react-icons/ri";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Title from "../../Shared/Title";


const WorkDetails = () => {
    const works = useLoaderData()
    console.log(works);
    if (!works) {
        <span className="loading loading-ring loading-lg"></span>
    }
    const { id } = useParams()
    const _id = parseInt(id)
    const work = works.find(prop => prop.id === _id)
    console.log(work, typeof _id);
    const { name, image, projectDescription, ourApproach, category, startDate, client, designer, subImage, liveLink, githubLink, githubServer } = work
    console.log(githubServer);
    return (
        <div className="sora">
            <Cover
                text={name}
            ></Cover>
            <div className="mt-24 px-16 pt-16 mx-8 shadow-2xl overflow-hidden bg-white dark:bg-black">
                <img src={image} alt="" className="object-cover w-full" />
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between px-8 lg:gap-6 text-[#2a1454] dark:text-white mb-5">
                <div className="py-8 px-5 space-y-3">
                    <h1 className=" text-5xl font-bold">{name}</h1>
                    <p className="lg:w-[600px]">{ourApproach.slice(0, 130)}...</p>
                    <div className="flex flex-col md:flex-row gap-5 md:gap items-start md:items-center">
                        <button className="px-7 py-3 animation-hover rounded-xl font-semibold text-white flex items-center gap-2">
                            <a href={liveLink} target="_blank">Live Preview </a>
                            <RiExternalLinkFill className="text-base"></RiExternalLinkFill>
                        </button>                        
                        <button className="px-7 py-3 animation-hover rounded-xl font-semibold text-white flex items-center gap-2">
                            <a href={githubLink} target="_blank">GitHub Repo </a>
                            <RiExternalLinkFill className="text-base"></RiExternalLinkFill>
                        </button>                        
                        {
                            work?.githubServer === ""? "": <button className="px-7 py-3 animation-hover rounded-xl font-semibold text-white flex items-center gap-2">
                            <a href={work.githubServer} target="_blank">Github Server </a>
                            <RiExternalLinkFill className="text-base"></RiExternalLinkFill>
                        </button>
                        }                       
                    </div>
                </div>
                <div className="grid gap-7 py-8 md:grid-cols-2 md:grid-rows-2 h-full flex-grow">
                    <div>
                        <h1 className="text-base text-gray-500 dark:text-white mb-1">Category</h1>
                        <h2 className="text-xl font-bold">{category}</h2>
                    </div>
                    <div>
                        <h1 className="text-base text-gray-500 dark:text-white mb-1">Start Date</h1>
                        <h2 className="text-xl font-bold">{startDate}</h2>
                    </div>
                    <div>
                        <h1 className="text-base text-gray-500 dark:text-white mb-1">Client</h1>
                        <h2 className="text-xl font-bold">{client}</h2>
                    </div>
                    <div>
                        <h1 className="text-base text-gray-500 dark:text-white mb-1">Designer</h1>
                        <h2 className="text-xl font-bold">{designer}</h2>
                    </div>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        subImage.map(image =>

                            <SwiperSlide key={image} >
                                <img src={image} alt="" className="rounded-lg" />
                            </SwiperSlide>

                        )
                    }

                </Swiper>
            </div>
            <div className="mt-16 mx-10">
                <h1 className="text-[#2a1454] dark:text-white text-3xl lg:text-5xl font-bold borderEffect cursor-default mb-4 ">Project Description</h1>
                <p className="text-base text-[#2a1454] dark:text-white">{projectDescription}</p>
                <h1 className="text-[#2a1454] mt-4 dark:text-white text-3xl lg:text-5xl font-bold borderEffect cursor-default mb-4 ">Our Approach</h1>
                <p className="text-base text-[#2a1454] dark:text-white">{ourApproach}</p>
            </div>
        </div>
    );
};

export default WorkDetails;