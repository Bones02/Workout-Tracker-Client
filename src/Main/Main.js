import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning
} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home/Home'
import App from '../App/App'
import Contact from '../Contact/Contact'
import 'typeface-roboto'
import './Main.css'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning)

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
                    <div className="footer">
                        <p>Created by Alyssa Bonesteel</p>
                        <p>Copyright © 2020</p>
                        <p>All Rights Reserved!</p>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
