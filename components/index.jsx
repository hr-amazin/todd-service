// import React from 'react';
// import ReactDOM from 'react-dom'

// console.log(React);

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
      <h2>component1 </h2> 
      <div>Tester </div>
    </div>)
  }

}


ReactDOM.render(<App/>, document.getElementById('start'));