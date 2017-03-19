import React from 'react';
import SignUp from './SignUp';
import { Link } from 'react-router';

class App extends React.Component{
  render() {
    return(
      <div>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/signup">SignUp</Link></li>
          <li><Link to = "/login">Login</Link></li>
          <li><Link to = "/wheel">Wheel!!!!</Link></li>
          <li><Link to = "/lifegoals">Goals</Link></li>
          <li><Link to = "/history">History</Link></li>

        </ul>
        {this.props.children}
      </div>
    );
  }
}


export default App;
