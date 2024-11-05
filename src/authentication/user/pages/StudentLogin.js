
import Button from '../../../shared/components/UI/Button/Button';
import './StudentLogin.css';

function StudentLogin(){

    return (
        <div className="student-login">
        <h1>student login</h1>
        <form>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" required />
            <label htmlFor='password'>Password</label>
            <input type="password" id="Password" required />
            <Button type='submit' id="button">Login</Button>
        </form>
        </div>
    )
}

export default StudentLogin;