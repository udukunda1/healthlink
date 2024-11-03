import './PharmcyStudentReviews.css';
import PharmcyStudentReviewsItem from './PharmcyStudentReviewsItem';

function PharmacyStudentReviews({reviews}) {

   return (
       <div className='PharmacyStudentReviews'>
           {reviews.map(review => <PharmcyStudentReviewsItem key={review.content} name={review.name} content={review.content} image={review.image} />)}
       </div>
   )

}

export default PharmacyStudentReviews;