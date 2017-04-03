import React from "react";
import { inject, observer } from 'mobx-react';

class HistoryWheelCanvas extends React.Component{
  constructor(){
    super();
    // this.loadCanvas = this.loadCanvas.bind(this);
  }
  componentDidMount(){
    this.props.wheelStore.loadHistoryCanvas();
  }

  render(){
    return (
      <div className="canvasFloat">
        <canvas id="Canvas1" width="700" height="700">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}
HistoryWheelCanvas.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(HistoryWheelCanvas));
