
const convertDate = (date) => { 
  // console.log(date);
  
  let formattedDate;
  date.slice(0, 10); 

  let year = date.slice(0, 4); 
  // console.log(year); 
  
  let month = date.slice(5, 7); 
  // console.log(month); 
  
  let day = date.slice(8, 10);
  // console.log(day); 

  if (month === '12') { month = 'December'}
  else if (month === '11') { month = 'November'}
  else if (month === '10') { month = 'October'}
  else if (month === '09') { month = 'September'}
  else if (month === '08') { month = 'August'}
  else if (month === '07') { month = 'July'}
  else if (month === '06') { month = 'June'}
  else if (month === '05') { month = 'May'}
  else if (month === '04') { month = 'April'}
  else if (month === '03') { month = 'March'}
  else if (month === '02') { month = 'February'}
  else if (month === '01') { month = 'January'} 

  formattedDate = `${month} ${day}, ${year}`
  return formattedDate;
} 

const compareReviewRating = (a, b) => { 
  const aStars = a.stars; 
  const bStars = b.stars; 

  let comparison = 0; 
  if (aStars < bStars) { comparison = 1; } 
  else if (aStars > bStars) { comparison = -1; } 
  return comparison; 
} 

const getAvgRating = (arrOfObjs) => { 
  let avgRating = 0; 

  arrOfObjs.forEach(review => {
    // console.log(review.stars);
    
    avgRating += review.stars; 
  });
  avgRating = avgRating / arrOfObjs.length; 
  return avgRating;
}

export { convertDate, compareReviewRating, getAvgRating } ;