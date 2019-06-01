import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import EachReview from './eachReview.jsx'; 
import { compareReviewRating } from '../helpers/helperFuncs.js'
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
    // axios.get('api/oneReview', { 
    axios.get('http://review.us-east-2.elasticbeanstalk.com/api/oneReview', { 
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

  handleChange(e) { 
    if ( e.target.value === 'Most Recent') { 

    }
    
  }

  render(){  
    const { reviews } = this.state; 
    console.log(reviews.sort(compareReviewRating));

    return ( 
      
      <>
        <h4 className='reviews'> Showing 1-{reviews.length} of {reviews.length} reviews </h4>
        <div className='sortForm'>
          <form>
            <select onChange={this.handleChange}> 
              <option value='Top Reviews'>Top Reviews</option>
              <option value='Most Recent'>Most Recent</option>
            </select>
          </form>
        </div>
          { reviews.map((review, i) => <EachReview key={i} review={ review } /> )}
      </>
    )}

}
window.Reviews = Reviews;
// ReactDOM.render(<Reviews/>, document.getElementById('reviews'));