import './Footer.css';

function Footer() {

    return(
        <div className='footer'>
            <div className='footer__main-contents'>
                <div className='footer__main-content'>
                <p><a href='#link1'>FAQ</a></p>
                <p><a href='#link2'>Contacts</a></p>
                </div>
                <div className='footer__main-content'>
                <p><a href='#link3'>Pharmacy Directory</a></p>
                <p><a href='#link4'>Med Availability Search</a></p>
                </div>
            </div>
            <div className='footer__bottom-contents'>
                {/* <h3 className='footer__bottom-content-1'>"optimized for student needs"</h3> */}
                <div className='footer__bottom-content-2'>
                    <div className='logo'>
                        <p>logo</p>
                    </div>
                    <p>c2024 health Link</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;