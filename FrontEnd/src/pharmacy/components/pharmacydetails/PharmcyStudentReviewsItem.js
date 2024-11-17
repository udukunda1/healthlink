import { FaStar } from 'react-icons/fa';

import './PharmcyStudentReviewsItem.css';


function PharmcyStudentReviewsItem({name, content, image}) {

    return (
        <div className='PharmcyStudentReviewsItem'>
            <div className="PharmcyStudentReviewsItem__heading">
                <div className="PharmcyStudentReviewsItem__heading--image">
                <img src={`http://localhost:5000/${image}`} alt='img' />
                </div>
                <div className="PharmcyStudentReviewsItem__heading--name">
                    <p>{name}</p>
                    <p className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>
            </div>
            <div className="PharmcyStudentReviewsItem__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default PharmcyStudentReviewsItem;