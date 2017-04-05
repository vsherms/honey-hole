import React from "react";
import { inject, observer } from 'mobx-react';

class WheelCanvas extends React.Component{
  constructor(){
    super();
    // this.loadCanvas = this.loadCanvas.bind(this);
  }
  componentDidMount(){
    this.props.wheelStore.loadCanvas();
    this.props.wheelStore.wheelSaved = false;
  }

  render(){
    let wheelSaved = (
      <div>
        <h3>Your wheel is saved!</h3>
      </div>
    );
    return (
      <div className="canvasFloat">
        <canvas id="Canvas1" width="675" height="675">Your browser does not support canvas.</canvas>
        {this.props.wheelStore.wheelSaved ? wheelSaved : ""}
      </div>
    );
  }
}
WheelCanvas.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(WheelCanvas));
