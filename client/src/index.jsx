import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import EachReview from './eachReview.jsx'; 
import axios from 'axios'; 

class Reviews extends React.Component {

  constructor(props){
    super(props) 
    this.state = { 
      uuid: null, 
      reviews: []
    }
  } 

  componentDidMount() { 
    axios.get('api/oneReview', { 
      // axios.get('http://review.us-east-2.elasticbeanstalk.com/api/oneReview', { 
      params: { 
        uuid: 1001
      }
    })
    .then(reviews => { 
      // console.log(`reviews procured db!`, reviews.data[0].uuid) 
      this.setState({ 
        reviews: reviews.data, 
        uuid: reviews.data[0].uuid
      })
    })
    .catch(err => console.log(`error retrieving reviews`))
  } 

  componentDidUpdate(prevProps, prevState) { 
    // if (this.state.uuid !== prevState.uuid) { 
    //   this.setState({ 
    //     uuid: this.state.uuid
    //   })
    // } 
    if (this.props.uuid !== prevProps.uuid) { 
      axios.get('http://review.us-east-2.elasticbeanstalk.com/api/oneReview', { 
        params: { 
          uuid: this.props.uuid
        }
      })
      .then(reviews => { 
        // console.log(`reviews procured db!`, reviews.data[0].uuid) 
        this.setState({ 
          reviews: reviews.data, 
          uuid: reviews.data[0].uuid
        })
      })
      .catch(err => console.log(`error retrieving reviews`))
    }
  }

  render(){  
    const { reviews } = this.state; 

    return (
      <>
        <h2 className='reviews'> Reviews and Ratings </h2>
          { reviews.map((review, i) => <EachReview key={i} review={ review } /> )}
      </>
    )}

}
window.Reviews = Reviews;
// ReactDOM.render(<Reviews/>, document.getElementById('reviews'));