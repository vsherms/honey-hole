import React from 'react';
import {Col} from 'react-bootstrap';
import DisplayLifeGoals from './DisplayLifeGoals';
import { inject, observer } from 'mobx-react';

class CompleteColumn extends React.Component{
  render(){
    let completeGoals = this.props.goalStore.goalsArr.filter(goal => goal.status == 'complete');
    let displayCompleteColumnGoals = completeGoals.map((goal, index) =>
        ( <div key={index} style={{border:'1px solid black', width:'100%', background:'yellow', textAlign: 'center', marginTop: '1vh', marginBottom: '1vh'}}>
            <h4>{goal.value}</h4>
              <p>{goal.lifeGoal}</p>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <button onClick={this.props.goalStore.makeToday.bind(null, goal)} bsStyle="primary"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button onClick={this.props.goalStore.makeTrash.bind(null, goal)} bsStyle="primary"><i className="fa fa-times" aria-hidden="true"></i></button>
              </div>
          </div>)
      );
    if(this.props.goalStore.goalsArr.filter(goal => goal.status == 'complete').length > 0){
      return(
          <Col md={3} style={{
            border: '1px solid black'
          }}>
            {displayCompleteColumnGoals}
          </Col>
      );
    } else {
      return(
        <Col md={3} style={{
          border: '1px solid black'}}>
          <h4>Complete goals will display below</h4>
        </Col>
      );
    }
  }
}

CompleteColumn.propTypes = {
  goalStore: React.PropTypes.object
};

export default inject('goalStore')(observer(CompleteColumn));
