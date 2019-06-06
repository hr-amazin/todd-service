import React, { Component } from 'react'; 
import { render } from 'react-dom'; 
import StarRatings from 'react-star-ratings'; 
import { Chart } from '../../node_modules/react-google-charts'; 
import styles from '../../public/Reviews.css'; 


const BarChart = ({ reviews, averageRating }) => { 
  
  return (
  
    <div className={styles.barChartContainer}>
      <div className={styles.chartTitle}> {reviews.length} customer reviews</div>
      <div>
        <StarRatings
          rating={ averageRating }//reviw.stars 
          starRatedColor='#ffa700'
          numberOfStars={5}
          name='rating'
          starDimension='20px'
          starSpacing='0px'
        />
        <span className={styles.averageText}> { averageRating } out of 5 stars </span>
      </div>
      <Chart
        width={'400px'}
        height={'200px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          [
            'Element',
            'Density',
            { role: 'style' },
            {
              sourceColumn: 0,
              role: 'annotation',
              type: 'string',
              calc: 'stringify',
            },
          ],
          ['5 star', 3.5, 'color: #ffce00', null],
          ['4 star', 4.5, 'color: #ffce00', null],
          ['3 star', 1.5, 'color: #ffce00', null],
          ['2 start', 3.5, 'color: #ffce00', null],
          ['1 star', 2.5, 'color: #ffce00', null ],
        ]}
        options={{
          title: '',
          width: 400,
          height: 200,
          bar: { groupWidth: '50%' },
          legend: { position: 'none' },
        }}
  
        />

        <div>
          
        </div>
    </div>
  );
}; 

export default BarChart; 
