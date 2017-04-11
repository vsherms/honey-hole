import React from 'react';
import { Jumbotron, Well, Col, Row } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { LinkContainer } from 'react-router-bootstrap';
import HomeWheel from './HomeWheel';
import HomeGoals from './HomeGoals';

class Home extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.wheelStore.loadWheelsFromServer(this.props.userStore.userId);
    this.props.goalStore.loadGoalsFromServer(this.props.userStore.userId);
  }

  render(){
    return (
      <div className="parent">
        <div className="container">
          <h1 className="welcome-header">Welcome, {this.props.userStore.firstName}! </h1>
          <Col md={2}/>
          <Col md={8}>
            <LinkContainer to={{pathname: '/wheel'}}>
              <div className="home-well" id="well1">
                <div>
                  <i className="fa fa-pie-chart fa-5x icon1" aria-hidden="true"></i>
                </div>
                <div className= "description">
                  <h1 className= "home-title">
                    <strong>THE WHEEL OF LIFE</strong>
                  </h1>
                  <h3>Rate your current standing in eight essential life categories.</h3>
                </div>
              </div>
            </LinkContainer>
            <LinkContainer to={{pathname: '/lifegoals'}}>
              <div className="home-well" id="well2">
                <div>
                  <i className="fa fa-heart fa-5x icon2" aria-hidden="true"></i>
                </div>
                <div className= "description">
                  <h1 className= "home-title">
                    <strong>GOALS</strong>
                  </h1>
                  <h3>Set and organize goals for yourself based on which areas you would like to work on.</h3>
                </div>
              </div>
            </LinkContainer>
            <LinkContainer to={{pathname: '/history'}}>
              <div className="home-well" id="well3">
                <div>
                  <i className="fa fa-database fa-5x icon3" aria-hidden="true"></i>
                </div>
                <div className= "description">
                  <h1 className= "home-title">
                    <strong>HISTORY</strong>
                  </h1>
                  <h3>Keep track of your progress over time. </h3>
                </div>
              </div>
            </LinkContainer>
          </Col>
          <Col md={2}/>
        </div>
        </div>
    );
  }
}
Home.propTypes={
  userStore: React.PropTypes.object,
  wheelStore: React.PropTypes.object,
  goalStore: React.PropTypes.object
};

export default inject('userStore', 'wheelStore', 'goalStore')(observer(Home));
