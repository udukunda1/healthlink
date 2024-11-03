import PharmacyItem from './PharmacyItem';
import './PharmacyItemsHome.css';
// import obed from '../../../image/obed.jpeg'
import pharma1 from '../../../image/pharma1.png'
import pharma2 from '../../../image/pharma2.png'
import pharma3 from '../../../image/pharma3.png'
import Button from '../../../shared/components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';



function PharmacyItemsHome() {

    const navigate = useNavigate();

    const featured = [
        {
            image: pharma1,
            title: 'kigali pharma',
            content: '24/7 kigali nyarugenge town'
        },
        {
            image: pharma2,
            title: 'Mediasol',
            content: '24/7 Musanze Branch'
        },
        {
            image: pharma3,
            title: 'Salus Pharmacy',
            content: '20/day kigali kicukiro town'
        }
    ]

    function navigateHandler() {
        navigate("/directory")
    }


    return(
        <div className='PharmacyItemsHome'>
        {featured.map(pharmacy => <PharmacyItem key={pharmacy.title} image={pharmacy.image} title={pharmacy.title} content={pharmacy.content} />)}
        <Button onClick={navigateHandler}>See More</Button>
        </div>
        )
}

export default PharmacyItemsHome;