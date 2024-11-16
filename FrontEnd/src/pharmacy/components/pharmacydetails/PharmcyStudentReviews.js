import './PharmcyStudentReviews.css';
import PharmcyStudentReviewsItem from './PharmcyStudentReviewsItem';

function PharmacyStudentReviews({reviews}) {

    if(reviews.length === 0){
        return (
            <h3 style={{textAlign: 'center', padding: '1rem'}}>no reviews yet</h3>
        )
    }

   return (
       <div className='PharmacyStudentReviews'>
           {reviews.map(review => <PharmcyStudentReviewsItem key={review.id} name={review.uid.name} content={review.content} image={review.uid.picture} />)}
       </div>
   )

}

export default PharmacyStudentReviews;