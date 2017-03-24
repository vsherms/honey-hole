import React from 'react';
import { Jumbotron, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class LifeGoals extends React.Component{
  constructor(){
    super();
    this.state = {
      goals: [
        {value: 'Career', lifeGoal: ""},
        {value: 'Financial', lifeGoal: ""},
        {value: 'Spiritual', lifeGoal: ""},
        {value: 'Health', lifeGoal: ""},
        {value: 'Intellectual', lifeGoal: ""},
        {value: 'Family', lifeGoal: ""},
        {value: 'Social', lifeGoal: ""},
        {value: 'Environmental', lifeGoal: ""}
      ]
    };
  }

  render(){
    return (
      <div className="background-container2">
        <div className="container">
          <Jumbotron className="jumbotronHeader">
            <h1>Life Goals</h1>
          </Jumbotron>
          <form>

          <FormGroup controlId="formControlsSelect">
        <ControlLabel>Life Category</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">{this.state.goals[0].value}</option>
          <option value="other">{this.state.goals[1].value}</option>

        </FormControl>
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Write your goal</ControlLabel>
        <FormControl componentClass="textarea" placeholder="explain goal" />
      </FormGroup>


      <div className="submitForm" type="submit">
        Submit
      </div>
    </form>
        </div>
      </div>
    );
  }
}

export default LifeGoals;
