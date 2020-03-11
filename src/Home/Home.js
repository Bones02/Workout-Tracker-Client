import React, { Component } from "react";
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Workout Tracker App</h1>
        <p>Workout Tracker helps you track your workouts and overall progress. 
            As you continue to log more workout use the Dashboard featurer to 
            see your progress.</p>

        <h2>
            <Link to="/App">Try it out for yourself!</Link>{' '}
            <FontAwesomeIcon icon= "check-double"/>
        </h2>
      </div>
    );
  }
}
 
export default Home;