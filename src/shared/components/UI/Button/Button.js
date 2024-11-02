import './Button.css';

//className='cta-white'|| 'button(default)' || 'red';

function Button({children , type='button', className = '',...props}){

    if(type === 'a'){
        return (
        <a className={`ui-button ${className??null}`} {...props}>
            {children}
        </a>
        )
    }

    if(type === 'red'){
        return (
            <button className={`ui-button ${className}`} {...props}>
                {children}
            </button>
            )
    }

    return (
        <button className='ui-button' {...props}>
            {children}
        </button>
    )
}

export default Button;