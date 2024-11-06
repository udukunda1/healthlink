import SearchableList from '../../components/search/SearcheableList';
import './AvailabilitySearch.css';
import { pharmacies } from '../../../shared/utils/data';
import SearchItem from '../../components/pharmacy/SearchItem';

function AvailabilitySearch(){

    return (
        <>
        <div className='rem3-top-place-holder'></div>
        <div className='availability-search'>
        <h1>Check Availability</h1>
        <div>
        <SearchableList items={pharmacies} itemKeyFn={(item) => item.id}>
          {(item) => <SearchItem title={item.title} address={item.address} image={item.image} time={item.workingHours} meds={item.inventory.medicines.slice(0, 3)} id={item.id} />}
        </SearchableList>
        </div>
        </div>
        </>
    )

}

export default AvailabilitySearch;