import './Med.css';

function Service({service}){
    return(
        <div className='med'>
            <h3>{service}</h3>
            <button>remove</button>
        </div>
    )
}

export default Service;