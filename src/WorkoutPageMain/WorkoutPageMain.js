import React from 'react';
import Workout from '../Workout/Workout';
import ApiContext from '../ApiContext';
import { findWorkout } from '../workout-helpers';
//import './WorkoutPageMain.css';

export default class WorkoutPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteWorkout = () => {
    this.props.history.push('/App')
  };

  render() {
    const { workouts=[] } = this.context
    const workoutId = parseInt(this.props.match.params.workoutId);
    const workout = findWorkout(workouts, workoutId) || { content: '' }
    return (
      <section className='WorkoutPageMain'>
        <Workout
          id={workout.id}
          name={workout.name}
          modified={workout.modified}
          onDeleteWorkout={this.handleDeleteWorkout}
        />
        <div className='WorkoutPageMain__content'>
          {workout.description.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}