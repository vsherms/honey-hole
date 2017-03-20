import React from 'react';
const Slider = require("bootstrap-slider");

let date = new Date();

class Wheel extends React.Component{
  constructor(){
    super();
    this.state = {
    date: date,
    min: 0,
    max: 10,
    step: 1,
    value1: 'Career',
    score1: 0,
    value2: 'Financial',
    score2: 0,
    value3: 'Spiritual',
    score3: 0,
    value4: 'Health',
    score4: 0,
    value5: 'Intellectual',
    score5: 0,
    value6: 'Family',
    score6: 0,
    value7: 'Social',
    score7: 0,
    value8: 'Environmental',
    score8: 0
    };
  }


  changeValue(e){
    console.log(e);

    }

  render(){
    return (
      <div>
        <div>
          <h1>{this.state.value1}</h1>
          <input id="ex1" data-slider-id="ex1Slider"
          type="text" data-slider-min="0" data-slider-max="10"
          data-slider-step="1" data-slider-value="5"/>
        </div>
      </div>
    );
  }
}


export default Wheel;
