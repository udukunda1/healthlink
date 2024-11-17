import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { authContext } from '../../context/auth-context';
import './Navbar.css';

function Navbar() {
    const auth = useContext(authContext);
    const navigate = useNavigate();

    function handleLogout(){
        auth.logout();
        navigate('/');
    }

    return (
    <nav className="nav">
        <ul className="nav-lists">
            <li className="nav-list logo">Logo</li>
            {auth.isLoggedIn && <li className="nav-list__user"><FaUserCircle /> User: {auth.isLoggedIn.name}</li>}
            <div className='nav-lists__links'>
            <li className="nav-list"><NavLink to="/" className={({isActive}) => isActive? 'link active' : 'link'} end>Home</NavLink></li>
            <li className="nav-list"><NavLink to="/directory" className={({isActive}) => isActive? 'link active' : 'link'}>Pharmacy directory</NavLink></li>
            <li className="nav-list"><NavLink to="/search" className={({isActive}) => isActive? 'link active' : 'link'}>Med availability Search</NavLink></li>
            {!auth.isLoggedIn ? <li className="nav-list"><Link to="/authenticate/student/"><Button type='a' className='cta-white'>Login</Button></Link></li> : <Button type='a' className='cta-white' onClick={handleLogout}>Logout</Button>}
            </div>
        </ul>
    </nav>
    )
}

export default Navbar;