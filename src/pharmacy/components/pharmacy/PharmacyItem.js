import './PharmacyItem.css';
import obed from '../../../image/obed.jpeg'

function PharmacyItem() {
    return(
        <div className='pharmacy-card'>
            <div className='pharmacy-card__image'>
                <img src={obed} alt='img' />
            </div>
            <div className='pharmacy-card__content'>
                <h4>kigali pharma</h4>
                <p>here for you</p>
            </div>
        </div>
    )
}

export default PharmacyItem;
