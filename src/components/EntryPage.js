import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class EntryPage extends React.Component {

  render() {
    return(
      <div >
        <div style={{width: "100vw", position: "relative", display:'flex', flexWrap:'wrap', justifyContent:'space-around', background:"#3251FF"}}>
          <span><h1 className="lifecoach">Life&nbsp;Coach</h1></span>
          <Login/>
        </div>

        <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', justifyContent:'space-around', marginTop:'7vh'}}>
                <div className="bodyText">
                  <div className="home-text">
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

            <SignUp/>

        </div>
      </div>
    );
  }
}
