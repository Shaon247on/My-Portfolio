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
            <div className='  '>
                <Banner></Banner>
            </div>
            <div id='skills' className='mt-40'>
                <Skills></Skills>
            </div>
            <div id='work' className='mt-40'>
                <Work></Work>
            </div>
            {/* <div className='mt-40'>
                <Blogs></Blogs>  ==> It will be added later.
            </div> */}
            <div className='mt-[500px]'>
                <Experience></Experience>
                {/* <Cover></Cover> */}
            </div>
            <div className='mt-40'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;