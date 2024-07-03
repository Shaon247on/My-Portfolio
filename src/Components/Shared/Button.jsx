
const Button = ({text, func}) => {
    return (
        <button onClick={func} className='px-7 py-3 animation-hover rounded-xl font-semibold text-white'>
            {text}
        </button>
    );
};

export default Button;