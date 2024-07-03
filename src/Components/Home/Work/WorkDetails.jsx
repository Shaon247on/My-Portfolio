import { useLoaderData, useParams } from "react-router-dom";
import Cover from "../../Shared/Cover";
import Button from "../../Shared/Button";


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
    const { name, image, projectDescription, ourApproach, category, startDate, client, designer } = work
    return (
        <div>
            <Cover
                text={name}
            ></Cover>
            <div className="mt-24 px-16 pt-16 mx-8 shadow-2xl overflow-hidden bg-white dark:bg-black">
                <img src={image} alt="" className="object-cover w-full" />
            </div>
            <div className="flex items-start justify-between px-8 gap-6 ">
                <div className="py-8 px-5 space-y-3">
                    <h1 className="text-[#2a1454] dark:text-white text-5xl font-bold">{name}</h1>
                    <p className="w-[600px]">{ourApproach.slice(0, 100)}...</p>
                    <Button
                        text='Live Preview'
                    ></Button>
                </div>
                <div className="grid gap-7 py-8 md:grid-cols-2 md:grid-rows-2 h-full flex-grow">
                    <div>
                        <h1 className="font-medium mb-1">Category</h1>
                        <h2 className="text-xl font-bold">{category}</h2>
                    </div>
                    <div>
                        <h1>Category</h1>
                        <h2>{startDate}</h2>
                    </div>
                    <div>
                        <h1>Category</h1>
                        <h2>{client}</h2>
                    </div>
                    <div>
                        <h1>Category</h1>
                        <h2>{designer}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;