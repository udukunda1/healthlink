import { Await, defer, Link, useLoaderData, useNavigation } from 'react-router-dom';

import ImageHolder from '../../components/imageholder1/ImageHolder1';
import Button from "../../../shared/components/UI/Button/Button";
import './Home.css';
import StudentExperience from '../../components/studentexperience/StudentExperience';
import PharmacyItemsHome from '../../../pharmacy/components/pharmacy/PharmacyItemsHome';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import { Suspense, useEffect } from 'react';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { path } from '../../../shared/utils/imagePath';


function Home() {
  const response = useLoaderData();
  const navigation = useNavigation();
  const [modalRef, openModal] = useOpenModal();

  useEffect(() => {
    if(response.error){
      openModal();
    }
  }, [response.error, openModal])

  if(response.error){

    return (
      <>
      <Modal  ref={modalRef}>
        {response.message}
      </Modal>
      </>
    )
  }

   return (
      <div>
      {navigation.state === 'loading' && <LoadingSpinner asOverlay />}
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
        <Suspense fallback={<LoadingSpinner asOverlay />}>
        <Await resolve={response.pharmas}>
        {(loadedPharmas) => <PharmacyItemsHome pharmas={loadedPharmas} />}
        </Await>
        </Suspense>
      </section>
      </div>
    );
}

export default Home;

async function loadpharma() {
  try{
    const response = await fetch(`${path}/pharma`);
  if(!response.ok){
    return {error: true, message: 'failed to fetch from server'}
  }

  const resData = await response.json();
  return resData;
  }
  catch {
    return {error: true, message: 'server is down now can not fetch'}
  }
}

export function loader() {
  return defer({
    pharmas: loadpharma()
  })
}