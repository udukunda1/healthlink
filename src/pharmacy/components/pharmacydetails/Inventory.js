import { FaCheckCircle } from "react-icons/fa";

import './Inventory.css';


function Inventory({lastUpdated, medicines}) {

    return (
        <div className='Inventory'>
        <h3>Last updated at {lastUpdated}</h3>
        <ul>
            {medicines.map(medicine => <li><FaCheckCircle /> <span>{medicine}</span></li>)}
        </ul>
</div>
    )

}

export default Inventory;