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
        uuid: 1001
      }
    })
    .then(reviews => { 
      // console.log(`reviews procured db!`, reviews.data) 
      this.setState({ 
        uuid: reviews.data
      }, () => { 
        console.log('fetched data', this.state)  
      })
    })
    .catch(err => console.log(`error retrieving reviews`))
  } 

  // componentDidUpdate(prevProps) { 
  //   if (this.props.uuid !== prevProps.uuid) { 
  //     axios.get('/api/oneReview', { 
  //       params: { 
  //         uuid: this.props.uuid
  //       }
  //     })
  //     .then(review => { 
  //       console.log(`reviews procured db!`) 
  //       this.setState({ 
  //         uuid: review.data
  //       })
  //     })
  //     .catch(err => console.log(`error retrieving reviews`))
  //   }
  // }

  render(){  
    const { uuid } = this.state;
    return (
      <>
        <h2 className='Reviews'> Reviews and Ratings </h2>
          { uuid.map(review => <EachReview review={ review } /> )}
      </>
    )}

}

ReactDOM.render(<Reviews/>, document.getElementById('footer'));