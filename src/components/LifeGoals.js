import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class LifeGoals extends React.Component{
  render(){
    return (
      <div className="container">
        <Jumbotron style={{ textAlign: "center"}}>
          <h1>Life Goals</h1>
        </Jumbotron>
        <ul>
          <li>
            <h3><strong>Career:</strong></h3><h4>Have a great job using my gifts and skills and prior education, to serve my community and make some additional income for my family.</h4>
          </li>
          <li>
            <h3><strong>Financial:</strong></h3><h4>Make some extra money to be able to travel to visit my children, see new places, pursue hobbies, and save for retirement.</h4>
          </li>
          <li>
            <h3><strong>Spiritual:</strong></h3><h4>Be an active member of my church community. Use my musical skills to serve as well.</h4>
          </li>
          <li>
            <h3><strong>Health:</strong></h3><h4>Get fit, to my ideal weight, and live a healthy & active life.</h4>
          </li>
          <li>
            <h3><strong>Intellectual:</strong></h3><h4>Read 10 interesting books each year. Take time to attend fitness conventions & classes.</h4>
          </li>
          <li>
            <h3><strong>Family:</strong></h3><h4>Be close to my family, children, and grandchildren. See them as often as possible.</h4>
          </li>
          <li>
            <h3><strong>Social:</strong></h3><h4>Continue to keep up with old friends, neighbors, and host parties and get togethers. Practice radical hospitality.</h4>
          </li>
          <li>
            <h3><strong>Environmental:</strong></h3><h4>Live in a beautiful and well decorated home.</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default LifeGoals;
