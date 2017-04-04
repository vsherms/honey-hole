import React from 'react';
import {Col} from 'react-bootstrap';
import DisplayLifeGoals from './DisplayLifeGoals';
import { inject, observer } from 'mobx-react';

class BacklogColumn extends React.Component{
  constructor(){
    super();
  }



  render(){
    let backlogGoals = this.props.goalStore.goalsArr.filter(goal => goal.status == 'backlog');
    let displayBacklogGoals = backlogGoals.map((goal, index) =>
        ( <div key={index} style={{border:'1px solid black', width:'100%', textAlign: 'center', marginTop: '1vh', marginBottom: '1vh'}}>
            <h4>{goal.value}</h4>
              <p>{goal.lifeGoal}</p>
              <div style={{display:'flex', justifyContent: 'flex-end'}}>
                <button onClick={this.props.goalStore.makePriority.bind(null, goal)} bsStyle="primary"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
          </div>)
      );
    return(
      <Col md={3} style={{

        border: '1px solid black'
      }}>
        {displayBacklogGoals}
      </Col>
    );
  }
}

BacklogColumn.propTypes = {
  goalStore: React.PropTypes.object
};

export default inject('goalStore')(observer(BacklogColumn));
