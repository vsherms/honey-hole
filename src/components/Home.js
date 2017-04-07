import React from 'react';
import { Jumbotron } from 'react-bootstrap';
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

      <div className="background-container2">
        <div className="container">
            <div className="bodyText">
              <div className="home-text">
                <h1 style={{fontSize:'7vw', color:'maroon'}}>Welcome, {this.props.userStore.firstName}! </h1>
                <HomeWheel/>
                <HomeGoals/>
              </div>
            </div>
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
