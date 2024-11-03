import Button from '../../../shared/components/UI/Button/Button';
import Details from '../../components/pharmacydetails/Details';
import Inventory from '../../components/pharmacydetails/Inventory';
import Map from '../../components/pharmacydetails/Map';
import PharmcyStudentReviews from '../../components/pharmacydetails/PharmcyStudentReviews';
import './PharmacyDetails.css';


function PharmacyDetails() {

    return(
        <>
        <div className='rem3-top-place-holder'></div>
        <div className='pharmacy-details'>
            <div className='pharmacy-details__head'>
                <h1>Saul KG</h1>
            </div>
            <div className='pharmacy-details__map'>
                <Map />
            </div>
            <div className='pharmacy-details__details'>
                <Details />
            </div>
            <div className='pharmacy-details__inventory'>
            <h2>live inventory Medication List</h2>
                <Inventory />
                <div className='buttons'>
                <Button>Add to favourite</Button>
                <Button>Rate</Button>
                </div>
            </div>
            <div className='pharmacy-details__reviews'>
            <h2>Students reviews</h2>
               <PharmcyStudentReviews />
            </div>
        </div>
        </>
    )
}

export default PharmacyDetails;