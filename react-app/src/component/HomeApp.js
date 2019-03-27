import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom"
import TaskApp from './todolist/TaskApp.js'
import CounterApp from './counter/CounterApp.js'
import '../style/memorylane.css'

class HomeApp extends Component {
  render() {
    return (
      <div> 
       <BrowserRouter>
       <div className="homeouterdiv">
          <span className="spanstyle" ><Link to="/">Home</Link></span>
          <span className="spanstyle" ><Link to="/todolist">TodoList</Link></span>
          <span className="spanstyle"><Link to="/counterapp">CounterApp</Link></span>
        </div>
        <div className="routerdiv">
            <Route path="/todolist" component={TaskApp}/>
            <Route path="/counterapp" component={CounterApp}/>
         </div>
         
       </BrowserRouter>
    
    
      </div>
    );
  }
}

export default HomeApp;