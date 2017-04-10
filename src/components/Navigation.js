import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import {NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand} from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="navigationBar">
        <Navbar collapseOnSelect style={{backgroundColor:'#3251FF', border: 'none'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home" className="lifecoach-header" style={{color:'white'}}>Life Coach</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/wheel'}}>
                <NavItem>
                  <i style={{color:'#FF3251'}} className="fa fa-pie-chart fa-lg" aria-hidden="true"></i>
                </NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/lifegoals'}}>
                <NavItem>
                  <i style={{color:'#32B7FF'}} className="fa fa-heart fa-lg" aria-hidden="true"></i>
                </NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/history'}}>
                <NavItem>
                  <i style={{color:'#E032FF'}} className="fa fa-database fa-lg" aria-hidden="true"></i>
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight className="nav-bar-right">
              <Navbar.Text style={{color: "rgba(255,255,255, 0.8)"}}>
                <i className="fa fa-user fa-lg" aria-hidden="true"></i> Welcome, {this.props.userStore.firstName}!
              </Navbar.Text>
              <LinkContainer onClick={this.props.userStore.logUserOut} to={{pathname: '/'}}>
                <NavItem>
                  <i style={{color: "rgba(255,255,255, 0.8)"}} className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
Navigation.propTypes = {
  userStore: React.PropTypes.object,
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
