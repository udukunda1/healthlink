import { ImAddressBook } from 'react-icons/im';
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";

import './Details.css';

function Details() {

    return(
        <div className='datails-container'>
        <h2 className='item item1'><ImAddressBook /> +25079004543</h2>
        <h3 className='item item2'><MdOutlineLocalPharmacy /> working: 24/7</h3>
                <p className='item item3'><MdLocationOn /> kigali, nyarugenge</p>
                <h3 className='item item4'><MdMedicalServices /> available services</h3>
                <ul className='item item5'>
                    <li>diagnosis</li>
                    <li>take care</li>
                    <li>---------------</li>
                    <li>---------------</li>
                </ul>
        </div>
    )

}

export default Details;