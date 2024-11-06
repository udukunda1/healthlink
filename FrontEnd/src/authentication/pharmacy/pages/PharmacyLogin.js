import Button from "../../../shared/components/UI/Button/Button";
import './PharmacyLogin.css';

function PharmacyLogin(){

    return (
        <div className="pharmacy-login">
        <h1>Pharmacy login</h1>
        <form>
            <label htmlFor='number'>Phone Number</label>
            <input type="number" id="number" required />
            <label htmlFor='password'>Password</label>
            <input type="password" id="Password" required />
            <Button type='submit' id="button">Login</Button>
        </form>
        </div>
    )
}

export default PharmacyLogin;