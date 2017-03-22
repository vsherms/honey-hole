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
    let wheelArray = this.props.wheelStore.wheels;
    let index = this.props.wheelStore.historyIndex;
    let newArr = this.props.wheelStore.wheelDates.map(function(date){return date});
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
                <tr>
                  <td>{wheelArray[index].value1}</td>
                  <td>{wheelArray[index].score1}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value2}</td>
                  <td>{wheelArray[index].score2}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value3}</td>
                  <td>{wheelArray[index].score3}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value4}</td>
                  <td>{wheelArray[index].score4}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value5}</td>
                  <td>{wheelArray[index].score5}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value6}</td>
                  <td>{wheelArray[index].score6}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value7}</td>
                  <td>{wheelArray[index].score7}</td>
                </tr>
                <tr>
                  <td>{wheelArray[index].value8}</td>
                  <td>{wheelArray[index].score8}</td>
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
              value={index}
              change={this.changeHistoryIndex}
              step={this.props.wheelStore.step}
              max={wheelArray.length-1}
              min={this.props.wheelStore.min}
              ticks = {[this.props.wheelStore.min, this.props.wheelStore.min+1, this.props.wheelStore.min+2, wheelArray.length-1]}
              ticks_labels = {newArr}

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
