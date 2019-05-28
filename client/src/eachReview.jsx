import React from 'react'

const  EachReview = ({ review }) => ( 
  <>
  <h6 className='revName'> { review.revName } </h6> 
  <div className='revTitle'> { review.revTitle } </div>
  <div className='revDate'> { review.revDate } </div>
  <p className='revBody'> { review.revBody } </p>
  </>
); 

export default EachReview; 