import PharmacyItem from './PharmacyItem';
import './PharmacyItemsDirectory.css';


import { pharmacies } from '../../../shared/utils/data';

function PharmacyItemsDirectory(){


    return(
        <div className='PharmacyItemsDirectory'>
        {pharmacies.map(pharmacy => <PharmacyItem key={pharmacy.id} id={pharmacy.id} image={pharmacy.image} title={pharmacy.title} content={pharmacy.address} />)}
        </div>
        )
}


export default PharmacyItemsDirectory;