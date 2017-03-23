import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { observer, inject } from 'mobx-react';
import {Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Slider from './Slider';


class Wheel extends React.Component{
  constructor(){
    super();

    this.changeScore1 = this.changeScore1.bind(this);
    this.changeScore2 = this.changeScore2.bind(this);
    this.changeScore3 = this.changeScore3.bind(this);
    this.changeScore4 = this.changeScore4.bind(this);
    this.changeScore5 = this.changeScore5.bind(this);
    this.changeScore6 = this.changeScore6.bind(this);
    this.changeScore7 = this.changeScore7.bind(this);
    this.changeScore8 = this.changeScore8.bind(this);
  }

  changeScore1(e){
    this.props.wheelStore.segs[0].score = e.target.value;
    console.log(this.props.wheelStore.segs[0].score);
  }
  changeScore2(e){
    this.props.wheelStore.segs[1].score = e.target.value;
  }
  changeScore3(e){
    this.props.wheelStore.segs[2].score = e.target.value;
  }
  changeScore4(e){
    this.props.wheelStore.segs[3].score = e.target.value;
  }
  changeScore5(e){
    this.props.wheelStore.segs[4].score = e.target.value;
  }
  changeScore6(e){
    this.props.wheelStore.segs[5].score = e.target.value;
  }
  changeScore7(e){
    this.props.wheelStore.segs[6].score = e.target.value;
  }
  changeScore8(e){
    this.props.wheelStore.segs[7].score = e.target.value;
  }

  render(){
    return (
      <div className="background-container2">
        <div className="container">
          <Jumbotron style={{ textAlign: "center"}}>
            <h1>How are you today?</h1>
            <h2>Rate yourself on a scale of 1-10.</h2>
          </Jumbotron>
          <div>
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
