import { Link } from "react-router-dom";
import Title from "../../Shared/Title";

const Work = () => {
    return (
        <div>
            <Title title='My Recent Works' subTitle="Showcasing my latest projects where creativity meets functionality. Discover the innovative web solutions I've crafted for various clients."></Title>
            <div className="grid mt-8 items-center p-8">
                <div className="relative card_body">
                    <img src="https://i.ibb.co/qB5Mq9m/Realty-Nest-Home.png" alt="" className="w-[528px]"/>
                    <div className="w-[420px] px-8 py-6 shadow-2xl rounded-lg absolute -bottom-12 card_details left-[50px] animation-hover text-white">
                        <span>Booking Website</span>
                        <h2>Real Estate</h2>
                        <Link>Read More....</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;