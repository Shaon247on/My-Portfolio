import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <div className='h-screen'>
                <Banner></Banner>
            </div>
            <div className='h-screen'>
                <Skills></Skills>
            </div>
            <div className='h-screen'>
                <Experience></Experience>
            </div>
            <div className='h-screen'>
                <Work></Work>
            </div>
        </div>
    );
};

export default Home;