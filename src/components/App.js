import React from 'react';
import SignUp from './SignUp';
import Navbar from './Navbar';
import { Link } from 'react-router';



class App extends React.Component{
  render() {
    return(
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    );
  }

}


export default App;
