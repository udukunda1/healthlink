import { useNavigate, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Button from '../../../shared/components/UI/Button/Button';
import Details from '../../components/pharmacydetails/Details';
import Inventory from '../../components/pharmacydetails/Inventory';
import Map from '../../components/pharmacydetails/Map';
import PharmcyStudentReviews from '../../components/pharmacydetails/PharmcyStudentReviews';
import './PharmacyDetails.css';
import { IoCaretBackCircle } from 'react-icons/io5';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { useContext, useEffect, useRef, useState } from 'react';
import { authContext } from '../../../shared/context/auth-context';
import { path } from '../../../shared/utils/imagePath';

function PharmacyDetails() {
    const { pharmacy } = useLoaderData();
    const [modalRef, openModal, closeModal] = useOpenModal();
    const [myModalRef, myOpenModal] = useOpenModal();
    const textRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({err: ''});
    const { pharmacyId } = useParams();

    let navigate = useNavigate();
    let navigation = useNavigation();
    const auth = useContext(authContext);


    function handleRate(){
        closeModal();
        async function Rate(){
            try{
                setIsLoading(true);
            const response = await fetch(`${path}/users/rate/${pharmacyId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                },
                body: JSON.stringify({review: textRef.current.value})
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);

            if(resData.err){
                return;
            }
            textRef.current.value = '';
            navigate(`/directory/details/${pharmacyId}`);
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        Rate();
    }

    function handleAddToFavourite() {
        async function Add(){
            try{
                setIsLoading(true);
            const response = await fetch(`${path}/users/favourite/${pharmacyId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                }
            })

            const resData = await response.json();
            setIsLoading(false);

            setLogData(resData);

            if(resData.err){
                return;
            }
            auth.toggleChanger();
            navigate(`/directory/details/${pharmacyId}`);
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        Add();
    }

    useEffect(() => {
        if(logData.err){
          myOpenModal();
        }
      }, [logData, myOpenModal])

    return(
        <>
        {navigation.state === 'loading' && <LoadingSpinner asOverlay />}
        {isLoading && <LoadingSpinner asOverlay />}
        <Modal  ref={myModalRef}>
        {logData.err === 'authentication failed'? 'You must Login first': logData.err}
        </Modal>
        <div className='rem3-top-place-holder'></div>
        <div className='pharmacy-details'>
        <Modal ref={modalRef} addButton={{name:'Rate', handleClick: handleRate}}>
        <h3>leave your review on this Pharmacy here.</h3>
        <form>
        <textarea name="message" rows="5" cols="40" ref={textRef}>
        </textarea>
        </form>
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
                <Button onClick={handleAddToFavourite}>Add to favourite</Button>
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
    const response = await fetch( `${path}/pharma/${id}`);

    return response;
  }