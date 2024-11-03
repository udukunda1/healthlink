import PharmacyItem from '../../components/pharmacy/PharmacyItem';
import SearchableList from '../../components/search/SearcheableList';
import './AvailabilitySearch.css';
import { pharmacies } from '../../../shared/utils/data';

function AvailabilitySearch(){

    return (
        <>
        <div className='rem3-top-place-holder'></div>
        <div className='availability-search'>
        <h1>Check Availability</h1>
        <div>
        <SearchableList items={pharmacies} itemKeyFn={(item) => item.id}>
          {(item) => <PharmacyItem title={item.title} content={item.content} image={item.image} id={item.id} />}
        </SearchableList>
        </div>
        </div>
        </>
    )

}

export default AvailabilitySearch;