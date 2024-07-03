import { Link } from "react-router-dom";
import Title from "../../Shared/Title";

const Work = () => {
    return (
        <div>
            <Title title='My Recent Works' subTitle="Showcasing my latest projects where creativity meets functionality. Discover the innovative web solutions I've crafted for various clients."></Title>
            <div className="container">
                <div className="cart__container grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article className="card__article">
                        <img src="https://i.ibb.co/qB5Mq9m/Realty-Nest-Home.png" alt="" className="card__img" />
                        <Link>
                            <div className="card__data text-white cursor-pointer py-20">
                                <span className="card__description">Booking Apartment </span>
                                <h1 className="card__title">Real Estate</h1>
                            </div>
                        </Link>
                    </article>
                    <article className="card__article">
                        <img src="https://i.ibb.co/qB5Mq9m/Realty-Nest-Home.png" alt="" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Booking Apartment </span>
                            <h1 className="card__title">Real Estate</h1>
                            <Link className="card__button">View Details</Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Work;