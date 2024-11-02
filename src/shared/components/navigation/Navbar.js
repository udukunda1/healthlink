
import Button from '../UI/Button/Button';
import './Navbar.css';

function Navbar() {
    return (
    <nav className="nav">
        <ul className="nav-lists">
            <li className="nav-list logo">Logo</li>
            <div className='nav-lists__links'>
            <li className="nav-list">Home</li>
            <li className="nav-list">Pharmacy directory</li>
            <li className="nav-list">Med availability Search</li>
            <li className="nav-list"><Button type='a' className='cta-white'>Login</Button></li>
            </div>
        </ul>
    </nav>
    )
}

export default Navbar;