import React from "react";
import { inject, observer } from 'mobx-react';

class HomeWheel extends React.Component{
  constructor(){
    super();
    // this.loadCanvas = this.loadCanvas.bind(this);
  }
  // componentDidMount(){
  //   this.props.wheelStore.loadWheelsFromServer(this.props.userStore.userId);
  //   // this.props.wheelStore.loadHomeCanvas();
  //   console.log('I ran');
  //   console.log(this.props.wheelStore.wheels.length);
  // }

  render(){

    return (
      <div className="canvasFloat">
        <canvas id="Canvas2" width="500" height="500">Your browser does not support canvas.</canvas>
      </div>
    );
  }
}
HomeWheel.propTypes = {
  wheelStore: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject('wheelStore', 'userStore')(observer(HomeWheel));
