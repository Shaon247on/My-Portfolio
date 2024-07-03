
const Button2 = ({text, func}) => {
    return (
        <button onClick={func} className='relative px-7 py-3 borderEffect rounded-lg font-semibold'>
            {text}
        </button>
    );
};

export default Button2;