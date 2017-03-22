import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Jumbotron } from 'react-bootstrap';
const dateFormat = require('dateformat');

class History extends React.Component{

  render(){
    let eachWheel = this.props.wheelStore.wheels.map(wheel =>
      <div className="container">
        <div key={wheel._id} className="wheel-container">
          <div className="history">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="2">
                    {dateFormat(wheel.date, "dddd, mmmm dS, yyyy, h:MM TT")}
                  </th>
                </tr>
                <tr>
                  <th>Life Categories</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{wheel.value1}</td>
                  <td>{wheel.score1}</td>
                </tr>
                <tr>
                  <td>{wheel.value2}</td>
                  <td>{wheel.score2}</td>
                </tr>
                <tr>
                  <td>{wheel.value3}</td>
                  <td>{wheel.score3}</td>
                </tr>
                <tr>
                  <td>{wheel.value4}</td>
                  <td>{wheel.score4}</td>
                </tr>
                <tr>
                  <td>{wheel.value5}</td>
                  <td>{wheel.score5}</td>
                </tr>
                <tr>
                  <td>{wheel.value6}</td>
                  <td>{wheel.score6}</td>
                </tr>
                <tr>
                  <td>{wheel.value7}</td>
                  <td>{wheel.score7}</td>
                </tr>
                <tr>
                  <td>{wheel.value8}</td>
                  <td>{wheel.score8}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
  );
    return (
      <div className="container">
        <Jumbotron style={{ textAlign: "center"}}>
          <h1>Your History</h1>
        </Jumbotron>
        {eachWheel}
      </div>
    );
  }
}

History.propTypes = {
  wheelStore: React.PropTypes.object
};

export default inject('wheelStore')(observer(History));
