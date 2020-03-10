import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home/Home'
import App from '../App/App'
import Contact from '../Contact/Contact'
import 'typeface-roboto'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Workout Tracker</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/App">Workout Tracker</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/App" component={App}/>
                <Route path="/contact" component={Contact}/>
                <p>
                    Welcome to the Workout Tracker!
                </p>
                
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
