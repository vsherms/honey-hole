import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class EntryPage extends React.Component {

  render() {
    return(
      <div className="background-container" >
        <div style={{width: "100vw", position: "absolute",display:'flex', justifyContent:'space-around', background:"#3251FF"}}>
          <h1 className="lifecoach">Life Coach</h1>
          <Login/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>

            <div className="left-container">
                <div className="bodyText">
                  <div className="home-text" style={{marginLeft:'auto', marginRight:'auto', marginTop:"35vh", color: "rgba(255,255,255, 0.8)"}}>
                    <h2> Are you ready to realize your full potential?</h2>
                    <h1>Welcome to <span  style={{color: "#3251FF"}} className="branded">Life Coach™</span></h1>
                    <br/>
                     <div style= {{display: "flex", justifyContent: "space-around"}}>
                      <i className="fa fa-pie-chart fa-4x icon1" aria-hidden="true"></i>
                      <i className="fa fa-heart fa-4x icon2" aria-hidden="true"></i>
                      <i className="fa fa-database fa-4x icon3" aria-hidden="true"></i>
                     </div>
                     <h2>The <strong style={{color: "#FF3251"}}>Wheel of Life</strong> helps you rate your current standing.
                    </h2>
                    <h2> Organize your list of <strong style={{color: "#32B7FF"}}> goals</strong>.
                    </h2>
                    <h2>
                      <strong style={{color: "#E032FF"}}>Track your progress</strong> over time.
                    </h2>
                  </div>

            </div>
          </div>
          <div className="right-container" style={{height: "100vh"}}>
            <SignUp/>
          </div>
        </div>
      </div>
    );
  }
}
