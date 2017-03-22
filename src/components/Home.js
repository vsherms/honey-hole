import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

class Home extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="container">
          <Jumbotron style={{ textAlign: "center"}}>
            <h1 className="title">Welcome to Life Coach!!!</h1>
          </Jumbotron>
            <div className="aboutPage">
              <h3>{this.props.userStore.firstName},</h3>
              <h3> If you are ready to realize your full potential, you have come to the right place.
              Life Coach™ is a tool to help you assess where you are in your life, set acheivable goals
              and track your progress.
               </h3>
                <ul>
                 <li><h3> With the Wheel of Life, rate your current standing.</h3></li>
                 <li><h3> Brainstorm your own life goals.</h3></li>
                 <li><h3> Do not forget to check out your progress over time. </h3></li>
               </ul>
              <h3> Enjoy, </h3>
              <h3> The Life Coach Team. </h3>
            </div>
        </div>
      </div>
    );
  }
}
Home.propTypes={
  userStore: React.PropTypes.object
};

export default inject('userStore')(observer(Home));
