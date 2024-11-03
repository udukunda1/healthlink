import ImageHolder2 from '../../components/imageholder2/ImageHolder2';
import PharmacyItemsDirectory from '../../components/pharmacy/PharmacyItemsDirectory';
import './Directory.css';

function Directory(){
    return (
        <>
        <ImageHolder2 />
        <section className='pharmacies'>
            <h1> Pharmacy Directory.</h1>
            <PharmacyItemsDirectory />
         </section>
        </>
    )
}

export default Directory;