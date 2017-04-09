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
      <div>
        <h3>Your wheel is saved!!</h3>
      </div>
    );
    let save = <h3><Glyphicon glyph="plus-sign"/>  Save Your Wheel</h3>;
    return (
        <div className="container">
            <div>
              <h2 className="jumbotronHeader2"><strong>Wheel of Life</strong></h2>
              <h3 className="subheader">Rate yourself on a scale of 1-10.</h3>
            </div>
            <div className="wheel-page">

              <div>
                <Slider segs={this.props.wheelStore.segs} display={this.props.wheelStore.display}/>
                <br/>
              </div>
              <div style={{textAlign:'center'}}>
              <WheelCanvas/>
                <button
                  style={{padding:"15px", borderRadius: "15px", background:"#FF7A32", border:'1px solid black', width:'50%', height:'100px'}}
                  onClick={this.handleAddWheel}
                  bsStyle="primary"
                  block>
                  {this.props.wheelStore.wheelSaved ? wheelSaved : save}
                </button>

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
