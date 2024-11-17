import { MdOutlineFavorite } from 'react-icons/md';
import './FavouriteIcon.css';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/auth-context';
import Modal from '../UI/Modal/modal';
import useOpenModal from '../../hooks/useOpenModal';
import FavoutiteCard from '../favouritecard/FavoutiteCard';


function FavouriteIcon() {
    const [logData, setLogData] = useState({favourite: []});
    const auth = useContext(authContext);
    const [modalRef, openModal] = useOpenModal();

    useEffect(() => {
        async function getFav(){
            try{

            const response = await fetch(`http://localhost:5000/users/favourite`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.isLoggedIn.token
                }
            });

            const resData = await response.json();

            if(resData.err){
                return;
            }
            setLogData(resData);

            }
            catch {
                console.log('failed');
            }
        }

        getFav();

    }, [auth.isLoggedIn])

    return(
        <>
        <Modal ref={modalRef}>
            <div className='favourite-modal'>
            <h2>favourites</h2>
            <p>{!auth.isLoggedIn && 'Your favorite pharmacy is missing. Log in to add it now!'}</p>
            {auth.isLoggedIn && logData.favourite.length !== 0 && <>{logData.favourite.map(pharma => <FavoutiteCard name={pharma.title} image={pharma.image} id={pharma.id} key={pharma.id} />)}</> }
            {auth.isLoggedIn && logData.favourite.length === 0 && <p>No favorite pharmacy selected. Choose one today!</p>}
            </div>
        </Modal>
        <div className='favourite-icon' onClick={openModal}>
        <h1><MdOutlineFavorite /></h1>
        <p>{logData.favourite.length}</p>
        </div>
        </>
    )
}

export default FavouriteIcon;