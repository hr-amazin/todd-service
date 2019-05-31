
const convertDate = (date) => { 
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

export default convertDate;