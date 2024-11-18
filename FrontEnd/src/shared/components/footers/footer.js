import { Link } from 'react-router-dom';
import './Footer.css';
import { FaCopyright } from 'react-icons/fa';

function Footer() {

    return(
        <div className='footer'>
            <div className='footer__main-contents'>
                <div className='footer__main-content'>
                <p><Link to='/authenticate/student/'>Login</Link></p>
                <p><Link to='/authenticate/pharmacy/signup'>Register Pharmacy</Link></p>
                </div>
                <div className='footer__main-content'>
                <p><Link to="/directory">Pharmacy Directory</Link></p>
                <p><Link to="/search">Med Availability Search</Link></p>
                </div>
            </div>
            <div className='footer__bottom-contents'>
                <div className='footer__bottom-content-2'>
                    <div className='logo'>
                        <h4>Health Link</h4>
                    </div>
                    <p className='copyright'><FaCopyright /><span>2024 Health Link</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;