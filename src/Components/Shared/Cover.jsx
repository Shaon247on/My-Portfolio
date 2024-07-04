
const Cover = ({text}) => {
    return (
        <div className="relative h-[450px]">
            <div className="h-full w-full absolute top-0 left-0 opacity-30 z-20 bg-gradient-to-r from-[#30185e] to-[#864ff5]"></div>
            <img src="https://i.ibb.co/RQ3Sf5x/top-view-white-keyboard-desk.jpg" className="object-cover w-full h-full disabled:block"/>
            <div className="absolute bottom-[40%] lg:bottom-[50%] left-[30%] md:left-[35%] lg:left-[40%] z-30">
                <h1 className="text-3xl md:text-5xl font-bold text-white borderEffect cursor-default">{text}</h1>
            </div>
        </div>
    );
};

export default Cover;