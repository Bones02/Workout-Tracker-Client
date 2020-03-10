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
      workouts: [
        {name: 'Run',
        description: 'Regular Path',
        calories: '300',
        minutes: '25',
        typeId: '0',
        id: '1'
        },
        {name: 'HITT',
        description: 'Ambitious Workout',
        calories: '500',
        minutes: '56',
        typeId: '1',
        id: '2',
        } 
      ],
      types: [
        {name: 'Run',
        id: '0'},
        {name: 'HIIT',
        id: '1'},
        {name: 'Yoga',
        id: '2'}
      ]
  };


//   componentDidMount() {
//     Promise.all([
//         fetch(`${config.API_ENDPOINT}/workout`),
//     ])
//         .then(([workoutsRes]) => {
//             if (!workoutsRes.ok)
//                 return workoutsRes.json().then(e => Promise.reject(e));

//             return Promise.all([workoutsRes.json()]);
//         })
//         .then(([workouts]) => {
//             this.setState({workouts});
//         })
//         .catch(error => {
//             console.error({error});
//         });
//     }

  handleDeleteWorkout = workoutId => {
      this.setState({
          workouts: this.state.workouts.filter(workout => workout.id !== workoutId)
      });
  };

  handleAddWorkout = workout => {
    console.log(workout)  
    this.setState({
          workouts: [...this.state.workouts, workout]
      })
  }

  renderNavRoutes() {
    const { match } = this.props
    return (
        <>
            {['${match.url}', '${match.url}/type/:typeId'].map(path => (
                <Route
                    exact
                    key={match.path}
                    path={match.path}
                    component={WorkoutListNav}
                />
            ))}
            <Route path="${match.path}/workout/:workoutId" component={WorkoutPageNav}  />
                <Route path="/App/add-type" render={(props) => {
                    return (<AddType types={this.state.types} routeProps={props} />)}} />
                <Route path="/App/add-workout" render={(props) => { 
                    return ( <AddWorkout types={this.state.types} routeProps={props}/> )}}  />
        </>
    );
  }

  renderMainRoutes() {
    const { match } = this.props
      return (
          <>
              {['${match.path}', '${match.url}/type/:typeId'].map(path => (
                  <Route
                      exact
                      key={match.path}
                      path={match.path}
                      component={WorkoutListMain}
                  />
              ))}
              <Route path="${match.path}/workout/:workoutId" component={WorkoutPageMain} />
          </>
      );
  }

  render() {
      const value = {
          workouts: this.state.workouts,
          types: this.state.types,
          deleteWorkout: this.handleDeleteWorkout,
          addWorkout: this.handleAddWorkout
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