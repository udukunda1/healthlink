import { ImAddressBook } from 'react-icons/im';
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";

import './Details.css';

function Details({tel, hours, address, services}) {

    return(
        <div className='datails-container'>
        <h2 className='item item1'><ImAddressBook /> {tel}</h2>
        <h3 className='item item2'><MdOutlineLocalPharmacy /> working: {hours}</h3>
                <p className='item item3'><MdLocationOn /> {address}</p>
                <h3 className='item item4'><MdMedicalServices /> available services</h3>
                <ul className='item item5'>
                    {services.length === 0? <h3>unavairable at the moment</h3> : services.map(service => <li>{service}</li>)}
                </ul>
        </div>
    )

}

export default Details;