import React from "react";
import { inject, observer } from 'mobx-react';
import dateFormat from 'dateformat';
import {Col} from 'react-bootstrap';

class HomeWheel extends React.Component{
  constructor(){
    super();
    // this.loadCanvas = this.loadCanvas.bind(this);
  }

  render(){
    let homeWheel = '';
    if(this.props.wheelStore.wheels.length > 0){
      homeWheel = (
        <div style={{float:'left'}}>
          <div>
            <h5 className="subheader">
              {dateFormat(this.props.wheelStore.wheels[this.props.wheelStore.wheels.length - 1].date,
                 "dddd, mmmm dS, yyyy, h:MM TT")}
            </h5>
          </div>
          <canvas id="Canvas2" width="400" height="400">Your browser does not support canvas.</canvas>
        </div>
    );}

    let newUser = (
      <div style={{float:'left', marginTop:'20px'}}>
        <h4>Visit the Wheel Of Life page</h4>
        <h4>to begin the self-evaluation process</h4>
        <h4>Your last submitted wheel will appear here</h4>
      </div>
    );

    return (
      <Col md={4} style={{background:'white', width:'400px', height:'480px', padding:'0px'}}>
        <div className="home-wheel">
          <h4>YOUR LATEST WHEEL</h4>
        </div>
        {this.props.wheelStore.wheels.length > 0 ? homeWheel : newUser}
      </Col>
    );
  }
}
HomeWheel.propTypes = {
  wheelStore: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject('wheelStore', 'userStore')(observer(HomeWheel));
