import { Link } from "react-router-dom";
import Title from "../../Shared/Title";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards);
    return (
        <div>
            <Title title='My Recent Works' subTitle="Showcasing my latest projects where creativity meets functionality. Discover the innovative web solutions I've crafted for various clients."></Title>
            <div className="container">
                <div className="cart__container grid grid-cols-1 md:grid-cols-2 gap-8">

                    {
                        cards.map(card =>
                            <article key={card.id} className="card__article group shadow-2xl">
                                <img src={card.image} alt="" className="card__img" />
                                <Link to={`/work/${card.id}`}>
                                    <div className="card__data text-white cursor-pointer py-20 flex justify-between">
                                        <div>
                                            <span className="card__description">{card.category}</span>
                                            <h1 className="card__title">{card.name}</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <FaArrowRight   className="text-2xl font-thin rotate-[-60deg] opacity-0 group-hover:opacity-100 group-hover:rotate-[330deg] duration-[600ms] ease-out"></FaArrowRight  >
                                        </div>
                                    </div>
                                </Link>
                            </article>

                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Work;