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
    this.loadCanvas = this.loadCanvas.bind(this);
    this.loadHistoryCanvas = this.loadHistoryCanvas.bind(this);
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

  loadCanvas(){
    let theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
      let ctx = theCanvas.getContext("2d");
      if (ctx) {
        let x = 350;
        let y = 350;
        let r = 325;
        let a = 360/this.segs.length;
        let colorArr = ["#ff5500", "#cc6699", "#9933ff", "#3377ff", "#66cc99", "#bbbb77", "#ff9933", "#cc6666"];
        let backgroundColorArr = ["#cc6699", "#f2d9e6", "#e6ccff", "#ccddff", "#d9f2e6", "#eeeedd", "#ffe6cc", "#f2d9d9"];
        let symbolArr = [
          // "Career", "Financial", "Spiritual", "Health", "Intellectual", "Family",
          // "Social", "Environmental"
          '\uf0b1',
          ' \uf155',
          '\uf2dd',
          '\uf21e',
          '\uf02d',
          '\uf0c0',
          '\uf2b5',
          '\uf0ac'

        ];

        let rad = a * (Math.PI / 180);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "#caff70";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        // ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = "black";

        for(let i = 0; i < this.segs.length; i++){
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.arc(x, y, this.segs[i].score * (r / 10), (i * -rad), (i * -rad) - rad, true);
          ctx.fillStyle = colorArr[i];
          ctx.fill();
          // ctx.stroke();
        }
        for(let i = 0; i < this.segs.length; i++){
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo( x + (r * Math.cos(i * -rad)), y + (r * Math.sin(i * -rad)));
          ctx.stroke();
          ctx.fillStyle = "maroon";
          ctx.font='50px FontAwesome';
          ctx.fillText(symbolArr[i], x - 28 + ((r * 0.75) * Math.cos((i * -rad) - (rad/2))), y + 15 + ((r * 0.75) * Math.sin((i * -rad) - (rad/2))));
          // ctx.drawImage(symbolArr[i], x + (r * Math.cos(i * rad)), y + (r * Math.sin(i * rad)));
        }
      }
    }
    return theCanvas;
  }


  loadHistoryCanvas(){
    let theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
      let ctx = theCanvas.getContext("2d");
      if (ctx) {
        let x = 275;
        let y = 275;
        let r = 250;
        let a = 360/this.segs.length;
        let colorArr = ["red", "orange", "yellow", "brown", "blue", "indigo", "violet", "pink"];
        let symbolArr = [
          // "Career", "Financial", "Spiritual", "Health", "Intellectual", "Family",
          // "Social", "Environmental"
          '\uf0b1',
          ' \uf155',
          '\uf2dd',
          '\uf21e',
          '\uf02d',
          '\uf0c0',
          '\uf2b5',
          '\uf0ac'

        ];

        let rad = a * (Math.PI / 180);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "#caff70";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        // ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = "black";

        for(let i = 0; i < this.segs.length; i++){
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.arc(x, y, this.wheels[this.historyIndex].segs[i].score * (r / 10), (i * -rad), (i * -rad) - rad, true);
          ctx.fillStyle = colorArr[i];
          ctx.fill();
          // ctx.stroke();
        }
        for(let i = 0; i < this.segs.length; i++){
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo( x + (r * Math.cos(i * -rad)), y + (r * Math.sin(i * -rad)));
          ctx.stroke();
          ctx.fillStyle = "maroon";
          ctx.font='50px FontAwesome';
          ctx.fillText(symbolArr[i], x - 28 + ((r * 0.75) * Math.cos((i * -rad) - (rad/2))), y + 15 + ((r * 0.75) * Math.sin((i * -rad) - (rad/2))));
          // ctx.drawImage(symbolArr[i], x + (r * Math.cos(i * rad)), y + (r * Math.sin(i * rad)));
        }
      }
    }
    return theCanvas;
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
