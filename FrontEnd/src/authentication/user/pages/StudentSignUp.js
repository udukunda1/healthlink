import Button from "../../../shared/components/UI/Button/Button";
import './StudentSignUp.css';

function StudentSignUp(){

    return (
        <div className="student-signup">
        <h1>student SignUp</h1>
        <form>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" required />
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" required />
            <label htmlFor='pic'>Picture</label>
            <input type="file" id="pic" required />
            <label htmlFor='password'>Password</label>
            <input type="password" id="Password" required />
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type="password" id="confirmPassword" required />
            <Button type='submit' id="button">SignUp</Button>
        </form>
        </div>
    )
}

export default StudentSignUp;