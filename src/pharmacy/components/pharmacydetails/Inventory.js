import { FaCheckCircle } from "react-icons/fa";

import './Inventory.css';


function Inventory() {

    return (
        <div className='Inventory'>
        <h3>Last updated at 11/3/2024</h3>
        <ul>
            <li><FaCheckCircle /> <span>amoxycilin</span></li>
            <li><FaCheckCircle /> <span>Paracetamor</span></li>
            <li><FaCheckCircle /> <span>PigPong</span></li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
            <li>---------------</li>
        </ul>
</div>
    )

}

export default Inventory;