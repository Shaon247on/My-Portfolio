import { useContext } from 'react';
import { LinearGradient } from 'react-text-gradients'
import { ProviderContext } from '../../Provider/Provider';
const Title = ({ title, subTitle }) => {
    const {theme} = useContext(ProviderContext)
    return (
        <div className="text-center autoScroll">
            <LinearGradient className={` text-5xl font-bold `} gradient={theme === 'winter'? ['to left', '#30185e, #8851f7']: ['to left', '#f8f4fe, #8851f7']}>
                {title}
            </LinearGradient>

            <p className='w-[250px] md:w-[450px] mx-auto mt-4 text-black dark:text-white font-medium'>{subTitle}</p>
        </div>
    );
};

export default Title;