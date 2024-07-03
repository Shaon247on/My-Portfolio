import Cover from '../../Shared/Cover';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <div className='  mb-40'>
                <Banner></Banner>
            </div>
            <div className='h-screen'>
                <Skills></Skills>
            </div>
            <div id='work' className=''>
                <Work></Work>
            </div>
            <div className='h-screen'>
                <Experience></Experience>
                <Cover></Cover>
            </div>
            <div className='h-screen'>
                <Blogs></Blogs>
            </div>
            <div className='h-screen'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;