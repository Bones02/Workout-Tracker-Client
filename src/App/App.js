import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import WorkoutListNav from '../WorkoutListNav/WorkoutListNav';
import WorkoutPageNav from '../WorkoutPageNav/WorkoutPageNav';
import WorkoutListMain from '../WorkoutListMain/WorkoutListMain';
import WorkoutPageMain from '../WorkoutPageMain/WorkoutPageMain';
import Workout from '../Workout/Workout';
import ApiContext from '../ApiContext';
import config from '../config';
import AddWorkout from '../AddWorkout/AddWorkout';
import AddType from '../AddType/AddType';
import './App.css';

class App extends Component {
  state = {
      workouts: [],
      types: []
  };


  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/App/workout`),
        fetch(`${config.API_ENDPOINT}/App/type`)
    ])
    .then(([workoutsRes, typesRes]) => {
        if (!workoutsRes.ok)
            return workoutsRes.json().then(e => Promise.reject(e));
        if (!typesRes.ok)
            return typesRes.json().then(e => Promise.reject(e));

        return Promise.all([workoutsRes.json(), typesRes.json()]);
    })
    .then(([workouts, types]) => {
        this.setState({workouts, types});
    })
    .catch(error => {
        console.error({error});
    });
    }

  handleDeleteWorkout = workoutId => {
      this.setState({
          workouts: this.state.workouts.filter(workout => workout.id !== workoutId)
      });
  };

  addWorkout = workout => {
    console.log(workout)  
    this.setState({
          workouts: [...this.state.workouts, workout]
      })
  }

  addFolder = type => {
    this.setState({
        types: [...this.state.types, type]
    })
}

  renderNavRoutes() {
    return (
        <>
            {['/App', '/App/type/:typeId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    component={WorkoutListNav}
                />
            ))}
            <Route path="/App/workout/:workoutId" component={WorkoutPageNav}  />
                <Route path="/App/add-type" render={(props) => 
                    <AddType types={this.state.types} {...props} />} />
                <Route path="/App/add-workout" render={(props) => 
                    <AddWorkout types={this.state.types} {...props}/> }  />
        </>
    );
  }

  renderMainRoutes() {
      return (
          <>
              {['/App', '/App/type/:typeId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      component={WorkoutListMain}
                  />
              ))}
              <Route path="/App/workout/:workoutId" component={WorkoutPageMain} />
          </>
      );
  }

  render() {
      const value = {
          workouts: this.state.workouts,
          types: this.state.types,
          deleteWorkout: this.handleDeleteWorkout,
          addWorkout: this.addWorkout,
          addType: this.addType
      };
      return (
          <ApiContext.Provider value={value}>
              <div className="App">
                  <nav className="App__nav">{this.renderNavRoutes()}</nav>
                  <header className="App__header">
                      <h1>
                          <Link to="/App">Workout Tracker</Link>{' '}
                          <FontAwesomeIcon icon="check-double" />
                      </h1>
                  </header>
                  <main className="App__main">{this.renderMainRoutes()}</main>
              </div>
          </ApiContext.Provider>
      );
  }
}


export default App;