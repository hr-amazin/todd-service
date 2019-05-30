import React from 'react'

const  EachReview = ({ review }) => { 

  return (
  <>
    <img className='revAvatars' src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" ></img>
    <div className='revName'> {review.revName} </div>
    <div className='revTitle'> {review.revTitle} </div>
    <div className='revDate'> { 
      review.revDate.slice(0, 10) 
      } </div>
    <p className='revBody'> {review.revBody} </p>
  </>);
}; 

export default EachReview; 