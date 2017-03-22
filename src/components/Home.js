import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends React.Component{
  render(){
    return (


      <div className="background-container2">
        <div className="container">
          <Jumbotron style={{ textAlign: "center"}}>
            <h1 className="title">Welcome to Life Coach!!!</h1>
          </Jumbotron>
            <h3>Assess your current </h3>
        </div>
      </div>
    );
  }
}

export default Home;
