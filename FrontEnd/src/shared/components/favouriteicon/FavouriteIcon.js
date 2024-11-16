import { MdOutlineFavorite } from 'react-icons/md';
import './FavouriteIcon.css';


function FavouriteIcon() {

    function handle(){
        alert('clicked')
    }

    return(
        <div className='favourite-icon' onClick={handle}>
        <h1><MdOutlineFavorite /></h1>
        <p>1</p>
        </div>
    )
}

export default FavouriteIcon;