import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// console.log(React);

class Reviews extends React.Component {

  constructor(props){
    super(props) 
    this.state = { 
      currentProduct: {}
    }
  }

  render(){
    return (
    <div>
      <h2>component1 </h2> 
      <div>Tester </div>
    </div>)
  }

}


ReactDOM.render(<Reviews/>, document.getElementById('footer'));