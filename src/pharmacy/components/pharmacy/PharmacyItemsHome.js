import { useNavigate } from 'react-router-dom';

import './PharmacyItemsHome.css';
import PharmacyItem from './PharmacyItem';
import Button from '../../../shared/components/UI/Button/Button';
import { pharmacies } from '../../../shared/utils/data';



function PharmacyItemsHome() {

    const navigate = useNavigate();

    const featured = pharmacies.slice(0, 3);

    function navigateHandler() {
        navigate("/directory")
    }


    return(
        <div className='PharmacyItemsHome'>
        {featured.map(pharmacy => <PharmacyItem key={pharmacy.id} id={pharmacy.id} image={pharmacy.image} title={pharmacy.title} content={pharmacy.address} />)}
        <Button onClick={navigateHandler}>See More</Button>
        </div>
        )
}

export default PharmacyItemsHome;