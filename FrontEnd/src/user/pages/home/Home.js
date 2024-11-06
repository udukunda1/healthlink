import { Link } from 'react-router-dom';

import ImageHolder from '../../components/imageholder1/ImageHolder1';
import Button from "../../../shared/components/UI/Button/Button";
import './Home.css';
import StudentExperience from '../../components/studentexperience/StudentExperience';
import PharmacyItemsHome from '../../../pharmacy/components/pharmacy/PharmacyItemsHome';


function Home() {


   return (
      <>
      <ImageHolder />
      <div className='cta-findmedicine'>
      <h1 className='cta-findmedicine__text'>Find Specific medicines in Real time</h1>
      <div className='cta-findmedicine__button'>
      <Link to="/search"><Button>Find</Button></Link>
      </div>
      </div>
      <StudentExperience />
      <div className='cta-getstarted'>
      <h2 className='cta-getstarted__text'>Ready to get started? Join our commuity and make finding medication stressfree!</h2>
      <div className='cta-getstarted__button'>
      <Link to="/authenticate/student/signup"><Button>Get Started</Button></Link>
      </div>
      </div>
      <section className='featured-pharmacies'>
        <h1>Featuted Pharmacies.</h1>
      <PharmacyItemsHome />
      </section>
      </>
    );
}

export default Home;