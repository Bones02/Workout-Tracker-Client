import React, { Component } from "react";
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div class="home">
        <h1>Welcome to the Workout Tracker App</h1>
        <p>Workout Tracker helps you track your workouts and overall progress. 
            As you continue to log more workouts use the Dashboard feature to 
            see your progress. The dashboard will display the total number of workouts, total minutes worked, and total calories burned. </p>

        <h2>
            <Link to="/App">Try it out for yourself!</Link>{' '}
            <FontAwesomeIcon icon= "check-double"/>
        </h2>

        <h3>
            User Dashboard provides updated overall stats
        </h3>
        <img>
        </img>
      </div>
    );
  }
}
 
export default Home;