import './Button.css';

function Button({children , type='button', className,...props}){

    if(type === 'a'){
        return (
        <a className={`ui-button ${className??null}`} {...props}>
            {children}
        </a>
        )
    }
    return (
        <button className='ui-button' {...props}>
            {children}
        </button>
    )
}

export default Button;