import React from 'react';
import { Jumbotron, FormGroup, FormControl, ControlLabel, Button, MenuItem } from 'react-bootstrap';


class LifeGoals extends React.Component{
  constructor(){
    super();
    this.state = {
      value: "",
      lifeGoal: "",
      valueArr: [
        "Career", "Financial", "Spiritual", "Health", "Intellectual", "Family",
        "Social", "Environmental"
      ],

      //   [
      //   {value: 'Career', lifeGoal: ""},
      //   {value: 'Financial', lifeGoal: ""},
      //   {value: 'Spiritual', lifeGoal: ""},
      //   {value: 'Health', lifeGoal: ""},
      //   {value: 'Intellectual', lifeGoal: ""},
      //   {value: 'Family', lifeGoal: ""},
      //   {value: 'Social', lifeGoal: ""},
      //   {value: 'Environmental', lifeGoal: ""}
      // ],
      goalsArr: []
    };
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addNewGoal = this.addNewGoal.bind(this);
  }

  componentDidMount(){
    this.loadGoalsFromServer();
  }

  handleGoalChange(e) {
    // const goals = this.state.goals;
    // goals[0].lifeGoal =  e.target.value;
    this.setState({lifeGoal: e.target.value});
    console.log(this.state.lifeGoal);
  }

  handleSelect(e){
    console.log(e);
    let index= 0;
    return index;
  }

  addNewGoal(goal) {
    let index = this.handleSelect();
    // let goals = [{value: this.state.goals[index].value,
    //     lifeGoal: this.state.goals[index].lifeGoal
    //   }];
    fetch('/goal/goals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: this.state.valueArr[index],
        lifeGoal: this.state.lifeGoal
      })
    })
    .then(result => result.json())
    .then(result => this.state.goalsArr.push(result));
  }

  loadGoalsFromServer() {
    fetch('/goal/goals')
       .then(result => result.json())
       .then(goals => this.setState({goalsArr: goals}))
       .then(goals => console.log(this.state.goalsArr));
  }


  render(){
    return (
      <div className="background-container2">
        <div className="container">

            <h1  className="jumbotronHeader2">Life Goals</h1>

          <form>

          <FormGroup controlId="formControlsSelect">
        <ControlLabel>Life Category</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option onSelect={this.handleSelect} eventKey= {1} value="other">{this.state.valueArr[0]}</option>
          <option value="other">{this.state.valueArr[1]}</option>
          <option value="other">{this.state.valueArr[2]}</option>
          <option value="other">{this.state.valueArr[3]}</option>
          <option value="other">{this.state.valueArr[4]}</option>
          <option value="other">{this.state.valueArr[5]}</option>
          <option value="other">{this.state.valueArr[6]}</option>
          <option value="other">{this.state.valueArr[7]}</option>

        </FormControl>
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Write your goal</ControlLabel>
        <FormControl onChange={this.handleGoalChange} componentClass="textarea" placeholder="explain goal" />
      </FormGroup>


      <div onClick={this.addNewGoal} className="submitForm" type="submit">
        Submit
      </div>
    </form>
        </div>
      </div>
    );
  }
}

export default LifeGoals;
