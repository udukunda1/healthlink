import './PharmaDashBoard.css';
import Med from '../../components/med';
import Service from '../../components/Service';
import Button from '../../../shared/components/UI/Button/Button';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { pharmaAuthContext } from '../../../shared/context/pharma-auth-context';

function PharmaDashBoard() {
    const { pharmacy } = useLoaderData();
    // console.log(pharmacy);
    const auth = useContext(pharmaAuthContext);
    const navigate = useNavigate();

    function handleLogout(){
        auth.logout();
        navigate('/authenticate/pharmacy');
    }


    return (
        <>
        <div className='pharma-dashboard' style={{backgroundImage: `url(http://localhost:5000/uploads/images/${pharmacy.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        </div>
        <div className='pharma-dashboard__header'>
            <h1>{pharmacy.title} !</h1>
        </div>
        <div className='pharma-dashboard__content'>
            <div className='pharma-dashboard__content-holder'>
                <div className='inventory-management'>
                    <h2>Inventory Management</h2>
                    <h3>Last Updated At {pharmacy.inventory.updatedAt}</h3>
                    <h3>Med List: </h3>
                    {pharmacy.inventory.medicines.length !== 0? pharmacy.inventory.medicines.map(medicine => <Med name={medicine} key={medicine} />): <h2>Add some Meds</h2>}
                    <Button>add med</Button>
                </div>
                <div className='avairable-services'>
                <h2>Avairable Services</h2>
                {pharmacy.avairableServices.length !== 0? pharmacy.avairableServices.map(service => <Service service={service} key={service} /> ): <h2>Add some Services</h2>}
                <Button>add service</Button>
                </div>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </div>
        </>
    )
}

export default PharmaDashBoard;

export async function dashboardloader({params}) {
    const id = params.pharmaId;
    const response = await fetch(`http://localhost:5000/pharma/${id}`);

    return response;
  }