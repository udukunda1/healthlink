import './PharmcyStudentReviews.css';
import obed from '../../../image/obed.jpeg';
import cynthia from '../../../image/cynthia.jpeg';
import silas from  '../../../image/silas.jpeg';
import PharmcyStudentReviewsItem from './PharmcyStudentReviewsItem';

function PharmacyStudentReviews() {
    let reviews = [
        {
         image: obed,
         name: 'Nzayisenga Emmanuel',
         content: '"Exceptional service with friendly staff! Always willing to help and answer my questions."'
        },
        {
           image: silas,
           name: 'Nsengiyumva Clement',
           content: '""Clean, welcoming environment and excellent customer service! They truly care about their patients."'
       },
        {
           image: cynthia,
           name: 'Denise MUHORAKEYE',
           content: '"Great selection of products and knowledgeable pharmacists! I always leave feeling well-informed."'
        }
       ]

   return (
       <div className='PharmacyStudentReviews'>
           {reviews.map(review => <PharmcyStudentReviewsItem key={review.content} name={review.name} content={review.content} image={review.image} />)}
       </div>
   )

}

export default PharmacyStudentReviews;