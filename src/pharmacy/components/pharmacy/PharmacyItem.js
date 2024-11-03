import './PharmacyItem.css';
// import obed from '../../../image/obed.jpeg'

function PharmacyItem({title, content, image}) {
    return(
        <div className='pharmacy-card'>
            <div className='pharmacy-card__image'>
                <img src={image} alt='img' />
            </div>
            <div className='pharmacy-card__content'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default PharmacyItem;
