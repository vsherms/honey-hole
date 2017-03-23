import React from 'react';
import {extendObservable} from 'mobx';
import { Button, Glyphicon } from 'react-bootstrap';
const dateFormat = require('dateformat');




export default class WheelStore {
  constructor(){
    extendObservable(this, {
      date: "",
      segs: [
        {value: 'Career', score: 0},
        {value: 'Financial', score: 0},
        {value: 'Spiritual', score: 0},
        {value: 'Health', score: 0},
        {value: 'Intellectual', score: 0},
        {value: 'Family', score: 0},
        {value: 'Social', score: 0},
        {value: 'Environmental', score: 0}
      ],
      wheels: [],
      wheelDates: [],
      min: 1,
      step: 1,
      historyIndex: 0
    });
    // this.handleDelete = this.handleDelete.bind(this);
    this.loadWheelsFromServer = this.loadWheelsFromServer.bind(this);
    this.setDate = this.setDate.bind(this);
    this.addNewWheel = this.addNewWheel.bind(this);
  }
  setDate(){
    let date = new Date;
    this.date = date;
    return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT");
  }
  addNewWheel(wheel) {
    let segs = [];
    for(let i = 0; i < this.segs.length; i++){
      segs.push({
        value: this.segs[i].value,
        score: this.segs[i].score
      });
    }
    fetch('/wheel/wheels', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.date,
        segs: segs
      })
    })
    .then(result => result.json())
    .then(result => this.wheels.push(result))
    .then(result => this.wheelDates.push(dateFormat(wheel.date,
      "mm/dd/yy")));
  }


  loadWheelsFromServer() {
    fetch('/wheel/wheels')
       .then(result => result.json())
       .then(wheels => this.wheels = wheels)
       .then(wheels => wheels.forEach(wheel => this.wheelDates.push(dateFormat(wheel.date,
         "mm/dd/yy"))))
       .then(wheels => console.log(this.wheelDates));
  }
}




//   handleDelete(imgId) {
//     let newList = this.images.filter(img => img._id !== imgId);
//     let allnewList = this.allImages.filter(img => img._id !== imgId);
//     this.images = newList;
//     this.allImages = allnewList;
//     fetch('/gifs/' + imgId, {
//       method: 'DELETE'
//     });
//   }
