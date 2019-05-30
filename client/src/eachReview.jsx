import React from 'react'

const  EachReview = ({ review }) => { 
  
  return (
  <>
    <h6 className='revName'> {review.revname} </h6>
    <div className='revTitle'> {review.revtitle} </div>
    <div className='revDate'> {review.revdata} </div>
    <p className='revBody'> {review.revbody} </p>
  </>);
}; 

export default EachReview; 