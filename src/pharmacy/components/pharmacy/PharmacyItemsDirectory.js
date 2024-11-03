import PharmacyItem from './PharmacyItem';
import './PharmacyItemsDirectory.css';

import pharma1 from '../../../image/pharma1.png';
import pharma2 from '../../../image/pharma2.png';
import pharma3 from '../../../image/pharma3.png';

function PharmacyItemsDirectory(){
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
        },
        {
            image: pharma1,
            title: 'optica pharma',
            content: '24/7 kigali silverBackMall'
        },
        {
            image: pharma2,
            title: 'kakiak',
            content: '24/7 lit out there'
        }
    ]


    return(
        <div className='PharmacyItemsDirectory'>
        {featured.map(pharmacy => <PharmacyItem key={pharmacy.title} image={pharmacy.image} title={pharmacy.title} content={pharmacy.content} />)}
        </div>
        )
}


export default PharmacyItemsDirectory;