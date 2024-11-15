import { useContext, useRef, useState, useEffect } from 'react';
import Button from '../../../shared/components/UI/Button/Button';
import './StudentLogin.css';
import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { authContext } from '../../../shared/context/auth-context';
import { useNavigate } from 'react-router-dom';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import Modal from '../../../shared/components/UI/Modal/modal';

function StudentLogin(){
    const auth = useContext(authContext);
    const emailRef = useRef();
    const pssRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [logData, setLogData] = useState({err: ''});
    const navigate = useNavigate();
    const [modalRef, openModal] = useOpenModal();

    function handleSubmit(event){
        event.preventDefault();

        async function loginData(){
            try{
                setIsLoading(true);
            const response = await fetch('http://localhost:5000/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailRef.current.value, password: pssRef.current.value})
            })

            const resData = await response.json();
            setIsLoading(false);

            console.log(resData);
            setLogData(resData);

            if(resData.err){
                return;
            }
            auth.login();
            navigate('/');
            }
            catch {
                setIsLoading(false);
                console.log('failed');
            }
        }

        loginData();
    }

    useEffect(() => {
        if(logData.err){
          openModal();
        }
      }, [logData, openModal])

    return (
        <div className="student-login">
        <Modal  ref={modalRef}>
        {logData.err}
        </Modal>
        <h1>student login</h1>
        <form>
            {isLoading && <LoadingSpinner asOverlay />}
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type="email" id="email" name="email" required />
            <label htmlFor='password'>Password</label>
            <input ref={pssRef} type="password" id="password" name="password" required />
            <Button type='submit' id="button" onClick={handleSubmit} >Login</Button>
        </form>
        </div>
    )
}

export default StudentLogin;

// export async function action({request}) {
//     try {
//         const data = await request.formData();
//         console.log(data, 'daata');
//     const loginData = {
//         email: data.get('email'),
//         password: data.get('password')
//     }
//     const response = await fetch('http://localhost:5000/users/login',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     })

//     if(!response.ok){
//         //....
//     }

//     const resData = await response.json();

//     console.log(resData);
//     }
//     catch {
//         console.log('failed');
//     }
// }