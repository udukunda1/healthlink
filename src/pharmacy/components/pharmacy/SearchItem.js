import { Link } from 'react-router-dom';
import './SearchItem.css';
import { MdMedication } from 'react-icons/md';

function SearchItem({title, address, image, time, meds, id}) {
    return(
        <Link to={`/directory/details/${id}`} className='search-item-card__link' >
        <div className='search-item-card'>
            <div className='search-item-card__image'>
                <img src={image} alt='img' />
            </div>
            <div className='search-item-card__content'>
                <h3>{title}</h3>
                <div className='search-item-card__content--time-and-address'>
                <p>{address}</p>
                <p>{'-'}{time}</p>
                </div>
                <h4>Available Meds:</h4>
                {meds.length === 0? <p>Unavailable at the moment!</p>
                :
                <ul>
                    {meds.map(med => <li><MdMedication />{med}</li>)}
                    <li className='others'>and others</li>
                </ul>
                }
            </div>
        </div>
        </Link>
    )
}

export default SearchItem;
