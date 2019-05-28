import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import EachReview from './eachReview.jsx'; 
import axios from 'axios'; 

// console.log(React);

class Reviews extends React.Component {

  constructor(props){
    super(props) 
    this.state = { 
      uuid: []
    }
  } 

  componentDidMount() { 
    axios.get('/api/oneReview', { 
      params: { 
        uuid: 1090
      }
    })
    .then(data => { 
      console.log(`reviews procured db!`) 
      this.setState({ 
        uuid: data.data
      })
    })
    .catch(err => console.log(`error retrieving reviews`))
  }

  render(){  
    return (
      <>
        <h2 className='Reviews'> Reviews and Ratings </h2>
          { this.state.uuid.map(review => <EachReview review={ review } /> )}
      </>
    )}

}

ReactDOM.render(<Reviews/>, document.getElementById('footer'));