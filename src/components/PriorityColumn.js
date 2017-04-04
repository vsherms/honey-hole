import React from 'react';
import {Col} from 'react-bootstrap';
import DisplayLifeGoals from './DisplayLifeGoals';
import { inject, observer } from 'mobx-react';

class PriorityColumn extends React.Component{
  render(){
    let priorityGoals = this.props.goalStore.goalsArr.filter(goal => goal.status == 'priority');
    let displayPriorityColumnGoals = priorityGoals.map((goal, index) =>
        ( <div key={index} style={{border:'1px solid black', width:'100%', padding:"15px", borderRadius: "15px", background:"rgba(255,255,255,0.6)", textAlign: 'center', marginTop: '1vh', marginBottom: '1vh'}}>
            <h4 style={{color: `${this.props.goalStore.cardColor(goal)}`}}>{goal.value}</h4>
              <p>{goal.lifeGoal}</p>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <button onClick={this.props.goalStore.makeBacklog.bind(null, goal)} bsStyle="primary"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button onClick={this.props.goalStore.makeToday.bind(null, goal)} bsStyle="primary"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
          </div>)
      );
    return(
        <Col md={3}>
          {displayPriorityColumnGoals}
        </Col>
    );
  }
}

PriorityColumn.propTypes = {
  goalStore: React.PropTypes.object
};

export default inject('goalStore')(observer(PriorityColumn));
