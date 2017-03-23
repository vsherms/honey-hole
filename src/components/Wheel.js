import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { observer, inject } from 'mobx-react';
import {Row, Col, Button, Jumbotron } from 'react-bootstrap';


class Wheel extends React.Component{
  constructor(){
    super();
    this.state = {
      min: 0,
      max: 10,
      step: 1
    };
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
    this.props.wheelStore.score1 = e.target.value;
  }
  changeScore2(e){
    this.props.wheelStore.score2 = e.target.value;
  }
  changeScore3(e){
    this.props.wheelStore.score3 = e.target.value;
  }
  changeScore4(e){
    this.props.wheelStore.score4 = e.target.value;
  }
  changeScore5(e){
    this.props.wheelStore.score5 = e.target.value;
  }
  changeScore6(e){
    this.props.wheelStore.score6 = e.target.value;
  }
  changeScore7(e){
    this.props.wheelStore.score7 = e.target.value;
  }
  changeScore8(e){
    this.props.wheelStore.score8 = e.target.value;
  }

  render(){
    return (
      <div className="background-container2">
        <div className="container">
          <Jumbotron className="jumbotronHeader">
            <h1>How are you today?</h1>
            <h2>Rate yourself on a scale of 1-10.</h2>
          </Jumbotron>
            <div className="bodyText">
              <div>
                <h3>{this.props.wheelStore.setDate()}</h3>
              </div>
              <Row>
                <Col md={6}>
                  <div>
                    <h2>{this.props.wheelStore.value1}</h2>
                    <ReactBootstrapSlider
                      value={this.props.wheelStore.score1}
                      change={this.changeScore1}
                      step={this.state.step}
                      max={this.state.max}
                      min={this.state.min}
                      orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score1}</h2>
                </div>
              </Col>
            </Row>
              <Row>
                <Col md={6}>
                  <div>
                    <h2>{this.props.wheelStore.value2}</h2>
                    <ReactBootstrapSlider
                      value={this.props.wheelStore.score2}
                      change={this.changeScore2}
                      step={this.state.step}
                      max={this.state.max}
                      min={this.state.min}
                      orientation="horizontal"/>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <h2>{this.props.wheelStore.score2}</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div>
                    <h2>{this.props.wheelStore.value3}</h2>
                    <ReactBootstrapSlider
                    value={this.props.wheelStore.score3}
                    change={this.changeScore3}
                    step={this.state.step}
                    max={this.state.max}
                    min={this.state.min}
                    orientation="horizontal"/>
                  </div>
                </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score3}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.value4}</h2>
                  <ReactBootstrapSlider
                    value={this.props.wheelStore.score4}
                    change={this.changeScore4}
                    step={this.state.step}
                    max={this.state.max}
                    min={this.state.min}
                    orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score4}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.value5}</h2>
                  <ReactBootstrapSlider
                  value={this.props.wheelStore.score5}
                  change={this.changeScore5}
                  step={this.state.step}
                  max={this.state.max}
                  min={this.state.min}
                  orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score5}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.value6}</h2>
                  <ReactBootstrapSlider
                  value={this.props.wheelStore.score6}
                  change={this.changeScore6}
                  step={this.state.step}
                  max={this.state.max}
                  min={this.state.min}
                  orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score6}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.value7}</h2>
                  <ReactBootstrapSlider
                  value={this.props.wheelStore.score7}
                  change={this.changeScore7}
                  step={this.state.step}
                  max={this.state.max}
                  min={this.state.min}
                  orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score7}</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.value8}</h2>
                  <ReactBootstrapSlider
                  value={this.props.wheelStore.score8}
                  change={this.changeScore8}
                  step={this.state.step}
                  max={this.state.max}
                  min={this.state.min}
                  orientation="horizontal"/>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h2>{this.props.wheelStore.score8}</h2>
                </div>
              </Col>
            </Row>
            <br></br>
            <Button style={{width: '280px', marginBottom: '10px'}}
            onClick={this.props.wheelStore.addNewWheel} bsStyle="success"
            Glyphicon glyph="plus-sign" block>Save Your Results!!</Button>
        </div>
      </div>
  </div>
    );
  }
}

Wheel.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(Wheel));
