import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

class DisplayLifeGoals extends React.Component{

  render(){
    let goals = this.props.goalStore.goalsArr.map((goal, index) =>
        ( <div style={{border:'1px solid black', width:'100%', textAlign: 'center', marginTop: '1vh', marginBottom: '1vh'}}>
            <h4>{goal.value}</h4>
              <p>{goal.lifeGoal}</p>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
              <button  bsStyle="primary"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
              <button  bsStyle="primary"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
          </div>)
      );

    if(this.props.goalStore.goalsArr.length > 0){
      return(
        <div>
            {goals}
        </div>
      );
    } else {
      return(
        <div>
        <h4>Goals will display below</h4>
        </div>
      );
    }
  }
}

DisplayLifeGoals.propTypes = {
  goalsArr: React.PropTypes.array,
  goalStore: React.PropTypes.object
};

export default inject('goalStore')(observer(DisplayLifeGoals));
