import { Link } from 'react-router-dom';
import './PharmacyItem.css';
// import obed from '../../../image/obed.jpeg'

function PharmacyItem({title, content, image, id}) {
    return(

        <div className='pharmacy-card'>
            <Link to={`/directory/details/${id}`} >
            <div className='pharmacy-card__image'>
                <img src={image} alt='img' />
            </div>
            <div className='pharmacy-card__content'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            </Link>
        </div>
    )
}

export default PharmacyItem;
