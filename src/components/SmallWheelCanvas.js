import React from "react";
import { inject, observer } from 'mobx-react';

class SmallWheelCanvas extends React.Component{
  constructor(){
    super();
    // this.loadCanvas = this.loadCanvas.bind(this);
  }
  componentDidMount(){
    this.props.wheelStore.loadSmallCanvas();
  }

  render(){
    return (
      <div className="canvasFloat">
        <canvas id="Canvas1" width="500" height="500">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}
SmallWheelCanvas.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(SmallWheelCanvas));
