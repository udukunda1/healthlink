import './PharmacyItemsHome.css';
import PharmacyItem from './PharmacyItem';
import Button from '../../../shared/components/UI/Button/Button';
import { pharmacies } from '../../../shared/utils/data';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';



function PharmacyItemsHome() {

    // const [resData, setResData] = useState([]);

    // useEffect(() => {
    //     async function GetData() {
    //         try{
    //         const data = await fetch('http://localhost:5000/pharma');
    //         const fetched = await data.json();
    //         setResData(fetched.pharmacies);
    //         }
    //         catch(err){
    //             setResData('failed to fetch');
    //         }
    //     }
    //     GetData();
    // }, [])

    // console.log(resData);

    const featured = pharmacies.slice(0, 3);


    return(
        <div className='PharmacyItemsHome'>
        {featured.map(pharmacy => <PharmacyItem key={pharmacy.id} id={pharmacy.id} image={pharmacy.image} title={pharmacy.title} content={pharmacy.address} />)}
        <Link to="/directory"><Button>See More</Button></Link>
        </div>
        )
}

export default PharmacyItemsHome;