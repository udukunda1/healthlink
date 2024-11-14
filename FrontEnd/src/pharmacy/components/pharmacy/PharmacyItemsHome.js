import './PharmacyItemsHome.css';
import PharmacyItem from './PharmacyItem';
import Button from '../../../shared/components/UI/Button/Button';
import { Link, useLoaderData } from 'react-router-dom';



function PharmacyItemsHome() {
    const { pharmacies } = useLoaderData();

    const featured = pharmacies.slice(0, 3);


    return(
        <div className='PharmacyItemsHome'>
        {featured.map(pharmacy => <PharmacyItem key={pharmacy.id} id={pharmacy.id} image={pharmacy.image} title={pharmacy.title} content={pharmacy.address} />)}
        <Link to="/directory"><Button>See More</Button></Link>
        </div>
        )
}

export default PharmacyItemsHome;