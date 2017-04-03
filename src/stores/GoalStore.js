import {extendObservable} from 'mobx';
import {browserHistory} from 'react-router';
import React from 'react';

export default class GoalStore {
  constructor(){
    extendObservable(this, {
      lifeGoal: "",
      valuesArr: [
        "Career", "Financial", "Spiritual", "Health", "Intellectual", "Family",
        "Social", "Environmental"
      ],
      goalsArr: [],
      backlogArr: [],
      priorityArr: [],
      optionIndex:'',
      columnLabels: ["Backlog", "Priority", "Today", "Complete"]
    });
  }

  loadGoalsFromServer(ownerId) {

    fetch('/goal/goals/' + ownerId)
       .then(result => result.json())
       .then(goals => this.goalsArr = goals)
       .then(goals => console.log(this.goalsArr))
       .then(goals => this.backlogArr.push(this.goalsArr.forEach(function(goal){
         if(goal.status == "backlog"){
           return goal;
         }})))
        .then(goals => console.log(this.backlogArr));
  }

  changeStatus(goalId, index){
    fetch('/goal/goals' + goalId, {
      method: 'PUT',
      body: JSON.stringify({
        status: this.colmnLabels[index]
      })
    });
  }
}
