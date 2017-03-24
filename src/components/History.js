import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Jumbotron } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
const dateFormat = require('dateformat');

class History extends React.Component{
  constructor() {
    super();
    this.changeHistoryIndex = this.changeHistoryIndex.bind(this);
    this.setTicksArr = this.setTicksArr.bind(this);
  }

  changeHistoryIndex(e){
    this.props.wheelStore.historyIndex = e.target.value - 1;
  }

  setTicksArr(){
    let ticksArr = [];
    for (let i=1; i <= this.props.wheelStore.wheels.length; i++) {
      ticksArr.push(i);
    }
    return ticksArr;
  }

  render(){

    if(this.props.wheelStore.wheels.length > 0){
      let wheelArray = this.props.wheelStore.wheels;
      let index = this.props.wheelStore.historyIndex;
      let newArr = this.props.wheelStore.wheelDates.map(function(date){return date;});
      let ticksArr = this.setTicksArr();
      let tableArr = [];
      for(let i = 0; i < this.props.wheelStore.wheels.length; i++) {
        tableArr.push(
          <tr>
            <td>{wheelArray[index].segs[i].value}</td>
            <td>{wheelArray[index].segs[i].score}</td>
          </tr>
        );
      }

      let wheelTable = (
          <div className="wheel-container">
            <div className="history">
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th colSpan="2">
                      {dateFormat(wheelArray[index].date,
                         "dddd, mmmm dS, yyyy, h:MM TT")}
                    </th>
                  </tr>
                  <tr>
                    <th>Life Categories</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {tableArr}
                </tbody>
              </Table>
            </div>
          </div>
    );

      return (
      <div className="background-container2">
        <div className="container">

            <h1 className="jumbotronHeader2">Your History</h1>

          {wheelTable}
          <div>
            <h2 className="bodyText">Your History</h2>
            <ReactBootstrapSlider className= "slider"
              value={index + 1}
              change={this.changeHistoryIndex}
              step={this.props.wheelStore.step}
              max={wheelArray.length}
              min={this.props.wheelStore.min}
              ticks = {ticksArr}
              orientation="horizontal"/>
          </div>
        </div>
      </div>
    );
    }
    else {
      return (
        <div className="background-container2">
          <div className="container">
              <h1 className="jumbotronHeader2">Your History</h1>
            <div>you have not filled out a wheel! </div>
          </div>
        </div>
      );
    }
  }
}

History.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(History));
