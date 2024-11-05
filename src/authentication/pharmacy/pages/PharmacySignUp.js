import Button from "../../../shared/components/UI/Button/Button";
import './PharmacySignUp.css';

function PharmacySignUp(){

    return (
        <>
        <div className="pharmacy-signup">
        <h1>Pharmacy Register</h1>
        <form>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" required />
            <label htmlFor='address'>Address</label>
            <input type="text" id="address" required />
            <label htmlFor='number'>Phone Number</label>
            <input type="number" id="number" required />
            <label htmlFor='Hours'>Working Hours</label>
            <input type="text" id="Hours" required />
            <label htmlFor='photo'>Picture</label>
            <input type="file" id="photo" required />
            <label htmlFor='password'>Password</label>
            <input type="password" id="Password" required />
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type="password" id="confirmPassword" required />
            <label htmlFor='code'>Access Code</label>
            <input type="number" id="code" required />
            <Button type='submit' id="button">Register</Button>
        </form>
        </div>
        </>
    )
}

export default PharmacySignUp;