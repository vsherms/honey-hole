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
    let wheelSaved = (
      <div className="wheel-saved">
        <h3 className="wheel-saved-text">Your wheel is saved!!</h3>
      </div>
    );
    let save = (
            <button
              className="wheel-button"
              onClick={this.handleAddWheel}
              bsStyle="primary"
              block>
              <h3 className="wheel-button-text">Save Your Wheel</h3>
            </button>
          );

    return (
        <div className="container">
            <div>
              <h2 className="jumbotronHeader2"><strong>Wheel of Life</strong></h2>
              <h3 className="subheader">Rate yourself on a scale of 1-10.</h3>
            </div>
            <div className="wheel-page">
              <div style={{marginTop: '25px'}}>
                <Slider segs={this.props.wheelStore.segs} display={this.props.wheelStore.display}/>
                <br/>
              </div>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', border:'1px solid black', borderRadius:'15px', background:'#ededed', padding:'15px'}}>
              <WheelCanvas/>
              {this.props.wheelStore.wheelSaved ? wheelSaved : save}
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
