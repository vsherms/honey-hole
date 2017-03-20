import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import Home from './components/Home';
import LifeGoals from './components/LifeGoals';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Provider } from 'mobx-react';
import Wheel from './components/Wheel';
import UserStore from './stores/UserStore';
import WheelStore from './stores/WheelStore';
import History from './components/History';

const wheelStore = new WheelStore();
const userStore = new UserStore();




render((
  <Provider wheelStore={wheelStore} userStore={userStore}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/wheel" component={Wheel}/>
        <Route path="/lifegoals" component={LifeGoals}/>
        <Route path="/history" component={History}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/Login" component={Login}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
