import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to the Workout Tracker App</h1>
        <p>Workout Tracker helps you track your workouts and overall progress. 
            As you continue to log more workouts use the Dashboard feature to 
            see your progress. The dashboard will display the total number of workouts, total minutes worked, and total calories burned. </p>

        <h2>
            <Link to="/App">Try it out for yourself!</Link>{' '}
            <FontAwesomeIcon icon= "running"/>
        </h2>

      </div>
    );
  }
}
 
export default Home;