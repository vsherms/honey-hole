import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Life Coach</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wheel">Value Wheel</Link></li>
            <li><Link to="/lifegoals">Life Goals</Link></li>
            <li><Link to="/history">Value History</Link></li>
          </ul>);
        </div>
      </nav>
  );
  }
}
Navbar.propTypes={userStore: React.PropTypes.object};
export default inject("userStore")(observer(Navbar));
