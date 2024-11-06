import { Link } from 'react-router-dom';
import './Footer.css';
import { FaCopyright } from 'react-icons/fa';

function Footer() {

    return(
        <div className='footer'>
            <div className='footer__main-contents'>
                <div className='footer__main-content'>
                <p><a href='#link1'>FAQ</a></p>
                <p><a href='#link2'>Contacts</a></p>
                </div>
                <div className='footer__main-content'>
                <p><Link to="/directory">Pharmacy Directory</Link></p>
                <p><Link to="/search">Med Availability Search</Link></p>
                </div>
            </div>
            <div className='footer__bottom-contents'>
                {/* <h3 className='footer__bottom-content-1'>"optimized for student needs"</h3> */}
                <div className='footer__bottom-content-2'>
                    <div className='logo'>
                        <p>logo</p>
                    </div>
                    <p className='copyright'><FaCopyright /><span>2024 health Link</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;