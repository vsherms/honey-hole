import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { observer, inject } from 'mobx-react';
import {Row, Col, Button, Jumbotron, Glyphicon } from 'react-bootstrap';
import Slider from './Slider';
import WheelCanvas from './WheelCanvas';


class Wheel extends React.Component{
  constructor(){
    super();

    this.handleAddWheel = this.handleAddWheel.bind(this);
  }

  handleAddWheel(){
    let ownerId = this.props.userStore.userId;
    this.props.wheelStore.addNewWheel(ownerId);
  }

  render(){
    return (
      <div className="background-container2">
        <div className="container">
            <div>
              <h2 className="jumbotronHeader2">Wheel of Life</h2>
              <h3 className="subheader">Rate yourself on a scale of 1-10.</h3>
            </div>
          <div className="wheel-containerFB">
            <div className="fbbox">

              <div className="wheelDiv">
                <WheelCanvas />
              </div>

            <div className="wheel-sliders">
              <div className="wheelFB">
                <Slider segs={this.props.wheelStore.segs} display={this.props.wheelStore.display}/>

                <br/>
                 <Button
                    style={{width: '280px', marginBottom: '10px'}}
                    onClick={this.handleAddWheel}
                    bsStyle="primary"
                    block>
                     <Glyphicon glyph="plus-sign"/>  Save Your Results!!
                 </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Wheel.propTypes = {
  wheelStore: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject('wheelStore', 'userStore')(observer(Wheel));
