import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { observer, inject } from 'mobx-react';
import {Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Slider from './Slider';


class Wheel extends React.Component{
  
  render(){
    return (
      <div className="background-container2">
        <div className="container">
          <Jumbotron className="jumbotronHeader">
            <h1>How are you today?</h1>
            <h2>Rate yourself on a scale of 1-10.</h2>
          </Jumbotron>
          <div className= "bodyText">
            <h3>{this.props.wheelStore.setDate()}</h3>
          </div>
          <div><Slider segs={this.props.wheelStore.segs}/></div>
        <br></br>
        <Button style={{width: '280px', marginBottom: '10px'}}
        onClick={this.props.wheelStore.addNewWheel} bsStyle="success"
        Glyphicon glyph="plus-sign" block>Save Your Results!!</Button>
      </div>
  </div>
    );
  }
}

Wheel.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(Wheel));
