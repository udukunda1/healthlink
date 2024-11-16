import './FavoutiteCard.css';

function FavoutiteCard({image, name}){

    return(
        <div className='favoutite-card'>
            <div className='favoutite-card__image'>
            <img src={`http://localhost:5000/uploads/images/${image}`} alt='img' />
            </div>
            <h5>{name}</h5>
            <button>Remove</button>
        </div>
    )
}

export default FavoutiteCard;