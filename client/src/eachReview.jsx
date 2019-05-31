import React from 'react'; 
import converDate from '../helpers/helperFuncs'; 
import StarRatings from 'react-star-ratings';

const  EachReview = ({ review }) => { 
  review.revDate = converDate(review.revDate)

  return (
  <>
    <img className='revAvatars' src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" ></img>
      <div className='revName'> {review.revName} </div>
    <StarRatings
      rating={review.stars} 
      starRatedColor='rgb(255, 206, 0)'
      numberOfStars={5}
      name='rating'
    />
      <div className='revTitle'> {review.revTitle} </div>
    <div className='revDate'> {review.revDate} </div>
    <p className='revBody'> {review.revBody} </p>
  </>);
}; 

export default EachReview; 