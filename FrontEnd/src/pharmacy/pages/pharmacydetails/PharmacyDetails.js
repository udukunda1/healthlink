import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import Button from '../../../shared/components/UI/Button/Button';
import Details from '../../components/pharmacydetails/Details';
import Inventory from '../../components/pharmacydetails/Inventory';
import Map from '../../components/pharmacydetails/Map';
import PharmcyStudentReviews from '../../components/pharmacydetails/PharmcyStudentReviews';
import './PharmacyDetails.css';
// import { pharmacies } from '../../../shared/utils/data';
import { IoCaretBackCircle } from 'react-icons/io5';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';

function PharmacyDetails() {
    const { pharmacy } = useLoaderData();
    // console.log(pharmacy);
    const [modalRef, openModal] = useOpenModal();
    const [favouriteModalRef, openFavouriteModal] = useOpenModal();
    // console.log(pharmacy.inventory.medicines);
    // console.log(pharmacy.studentReviews);

    let navigate = useNavigate();
    let navig = useNavigate();
    // let { pharmacyId } = useParams();
    // const pharmacy = pharmacies.find(pharma => pharma.id === pharmacyId);

    function handleLogin(){
        navig('/authenticate/student/');
    }

    return(
        <>
        <div className='rem3-top-place-holder'></div>
        <div className='pharmacy-details'>
        <Modal ref={modalRef} addButton={{name:'Rate'}}>
        <h3>leave your review on this Pharmacy here.</h3>
        <form>
        <textarea name="message" rows="5" cols="40">
        </textarea>
        </form>
        </Modal>
        <Modal ref={favouriteModalRef} addButton={{name:'Login', handleClick: handleLogin}}>
            Login to add Pharmacy to favourite.
        </Modal>
            <div className='pharmacy-details__head'>
                <Button onClick={() => navigate(-1)}><IoCaretBackCircle /> Back</Button>
                <h1>{pharmacy.title}</h1>
            </div>
            <div className='pharmacy-details__map'>
                <Map />
            </div>
            <div className='pharmacy-details__details'>
                <Details tel={pharmacy.number} hours={pharmacy.workingHours} address={pharmacy.address} services={pharmacy.avairableServices} />
            </div>
            <div className='pharmacy-details__inventory'>
            <h2>live inventory Medication List</h2>
                <Inventory lastUpdated={pharmacy.inventory.updatedAt || 'not yet'} medicines={pharmacy.inventory.medicines} />
                <div className='buttons'>
                <Button onClick={openFavouriteModal}>Add to favourite</Button>
                <Button onClick={openModal}>Rate</Button>
                </div>
            </div>
            <div className='pharmacy-details__reviews'>
            <h2>Students reviews</h2>
               <PharmcyStudentReviews reviews={pharmacy.studentReviews} />
            </div>
        </div>
        </>
    )
}

export default PharmacyDetails;

export async function ploader({params}) {
    const id = params.pharmacyId;
    const response = await fetch(`http://localhost:5000/pharma/${id}`);
    if(!response.ok){
      //..
    }

    return response;
  }