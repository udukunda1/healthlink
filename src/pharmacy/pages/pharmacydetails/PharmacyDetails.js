import { Link, useParams } from 'react-router-dom';
import Button from '../../../shared/components/UI/Button/Button';
import Details from '../../components/pharmacydetails/Details';
import Inventory from '../../components/pharmacydetails/Inventory';
import Map from '../../components/pharmacydetails/Map';
import PharmcyStudentReviews from '../../components/pharmacydetails/PharmcyStudentReviews';
import './PharmacyDetails.css';
import { pharmacies } from '../../../shared/utils/data';
import { IoCaretBackCircle } from 'react-icons/io5';


function PharmacyDetails() {

    let { pharmacyId } = useParams();
    const pharmacy = pharmacies.find(pharma => pharma.id === pharmacyId);

    return(
        <>
        <div className='rem3-top-place-holder'></div>
        <div className='pharmacy-details'>
            <div className='pharmacy-details__head'>
                <Link to="/directory" ><Button><IoCaretBackCircle /> Back</Button></Link>
                <h1>{pharmacy.title}</h1>
            </div>
            <div className='pharmacy-details__map'>
                <Map />
            </div>
            <div className='pharmacy-details__details'>
                <Details tel={pharmacy.tel} hours={pharmacy.workingHours} address={pharmacy.address} services={pharmacy.avairableServises} />
            </div>
            <div className='pharmacy-details__inventory'>
            <h2>live inventory Medication List</h2>
                <Inventory lastUpdated={pharmacy.inventory.updatedAt} medicines={pharmacy.inventory.medicines} />
                <div className='buttons'>
                <Button>Add to favourite</Button>
                <Button>Rate</Button>
                </div>
            </div>
            <div className='pharmacy-details__reviews'>
            <h2>Students reviews</h2>
               <PharmcyStudentReviews reviews={pharmacy.studentsReviews} />
            </div>
        </div>
        </>
    )
}

export default PharmacyDetails;