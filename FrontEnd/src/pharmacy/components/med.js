import './Med.css';

function Med({name}){
    return(
        <div className='med'>
            <h3>{name}</h3>
            <button>remove</button>
        </div>
    )
}

export default Med;