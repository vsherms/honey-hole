import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Jumbotron } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
const dateFormat = require('dateformat');

class History extends React.Component{
  constructor() {
    super();
    this.changeHistoryIndex = this.changeHistoryIndex.bind(this);
  }


  changeHistoryIndex(e){
    this.props.wheelStore.historyIndex = e.target.value;
    console.log(this.props.wheelStore.wheels);
  }

  render(){
    let wheelTable = (
        <div className="wheel-container">
          <div className="history">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="2">
                    {dateFormat(this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].date,
                       "dddd, mmmm dS, yyyy, h:MM TT")}
                  </th>
                </tr>
                <tr>
                  <th>Life Categories</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value1}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score1}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value2}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score2}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value3}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score3}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value4}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score4}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value5}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score5}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value6}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score6}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value7}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score7}</td>
                </tr>
                <tr>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].value8}</td>
                  <td>{this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].score8}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

  );
    return (
      <div className="background-container2">
        <div className="container">
          <Jumbotron style={{ textAlign: "center"}}>
            <h1>Your History</h1>
          </Jumbotron>
          {wheelTable}

          <div>
            <h2>Your History</h2>
            <ReactBootstrapSlider
              value={this.props.wheelStore.historyIndex}
              change={this.changeHistoryIndex}
              step={this.props.wheelStore.step}
              max={this.props.wheelStore.wheels.length-1}
              min={this.props.wheelStore.min}
              ticks = {[this.props.wheelStore.min, this.props.wheelStore.min+1, this.props.wheelStore.wheels.length-1]}
              ticks_labels = {[dateFormat(this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].date,
                "mm/dd/yy"),
                dateFormat(this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].date,
                  "mm/dd/yy"),
                  dateFormat(this.props.wheelStore.wheels[this.props.wheelStore.historyIndex].date,
                    "mm/dd/yy")]}

              // reversed
              orientation="horizontal"/>
        </div>

        </div>
      </div>
    );
  }
}

History.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(History));
