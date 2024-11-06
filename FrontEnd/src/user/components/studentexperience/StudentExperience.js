import './StudentExperience.css';
import StudentExperienceItems from './StudentExperienceItems';


function StudentExperience(){

    return (
        <div className='student-experience'>
        <h2 className='student-experience__heading'>Student Experience</h2>
        <StudentExperienceItems />
        </div>
    )
}

export default StudentExperience;