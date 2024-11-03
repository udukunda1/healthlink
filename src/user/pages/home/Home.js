

import ImageHolder from '../../components/imageholder/ImageHolder';
import Button from "../../../shared/components/UI/Button/Button";
import Modal from "../../../shared/components/UI/Modal/modal";
import useOpenModal from "../../../shared/context/useOpenModal";
import './Home.css';
import StudentExperience from '../../components/studentexperience/StudentExperience';
import PharmacyItemsHome from '../../../pharmacy/components/pharmacy/PharmacyItemsHome';
// import { ChakraProvider } from '@chakra-ui/react';

function Home() {
    const [modalRef, openModal] = useOpenModal();

   return (
      <>
      <ImageHolder />
      <Modal ref={modalRef} addButton={{name:'okay'}}>
        Hello, Welcome to health link ;
        soon we will be able to link students to pharmacies.
      </Modal>
      <div className='cta-findmedicine'>
      <h1 className='cta-findmedicine__text'>Find Specific medicines in Real time</h1>
      <div className='cta-findmedicine__button'>
      <Button onClick={openModal}>Find</Button>
      </div>
      </div>
      <StudentExperience />
      <div className='cta-getstarted'>
      <h2 className='cta-getstarted__text'>Ready to get started? Join our commuity and make finding medication stressfree!</h2>
      <div className='cta-getstarted__button'>
      <Button onClick={openModal}>Get Started</Button>
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