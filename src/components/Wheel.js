import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { observer, inject } from 'mobx-react';

let date = new Date();

class Wheel extends React.Component{
  constructor(){
    super();
    this.state = {
    date: date,
    min: 0,
    max: 10,
    step: 1,
    currentValue: "",
    value1: 'Career',
    value2: 'Financial',
    value3: 'Spiritual',
    value4: 'Health',
    value5: 'Intellectual',
    value6: 'Family',
    value7: 'Social',
    value8: 'Environmental'
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
    console.log(this.props.wheelStore.score1);
    }

  changeScore2(e){
    this.props.wheelStore.score2 = e.target.value;
    console.log(this.props.wheelStore.score2);
    }

  changeScore3(e){
    this.props.wheelStore.score3 = e.target.value;
    console.log(this.props.wheelStore.score3);
    }

  changeScore4(e){
    this.props.wheelStore.score4 = e.target.value;
    console.log(this.props.wheelStore.score4);
    }
  changeScore5(e){
    this.props.wheelStore.score5 = e.target.value;
    console.log(this.props.wheelStore.score5);
    }
  changeScore6(e){
    this.props.wheelStore.score6 = e.target.value;
    console.log(this.props.wheelStore.score6);
    }
  changeScore7(e){
    this.props.wheelStore.score7 = e.target.value;
    console.log(this.props.wheelStore.score7);
    }
  changeScore8(e){
    this.props.wheelStore.score8 = e.target.value;
    console.log(this.props.wheelStore.score8);
    }

  render(){
    return (
      <div className="container">
        <div>
          <h1>{this.state.value1}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore1}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value2}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore2}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value3}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore3}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value4}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore4}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value5}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore5}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value6}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore6}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value7}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore7}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
        <div>
          <h1>{this.state.value8}</h1>
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeScore8}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="horizontal"/>
        </div>
      </div>
    );
  }
}

Wheel.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(Wheel));
