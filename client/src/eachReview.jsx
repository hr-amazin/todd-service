import React from 'react'; 
import { convertDate } from '../helpers/helperFuncs'; 
import StarRatings from 'react-star-ratings';

const  EachReview = ({ review }) => { 
  review.revDate = convertDate(review.revDate)

  return (
  <>
    <div>
      <img className='revAvatars' src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" ></img>
      <div className='revName'> {review.revName} </div>
    </div>
    <div className='ratingRow'>
      <StarRatings
        rating={review.stars} 
        starRatedColor='#ffa700'
        numberOfStars={5}
        name='rating'
        starDimension='15px'
        starSpacing='0px'
      /><span className='revTitle'> {review.revTitle} </span>
    </div>
    <div className='revDate'> {review.revDate} </div>
    <p className='revBody'> {review.revBody} </p>
  </>);
}; 

export default EachReview; 