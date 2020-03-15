import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Workout from '../Workout/Workout'
import Dashboard from '../Dashboard/Dashboard'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getWorkoutsForType} from '../workout-helpers'
//import './WorkoutListMain.css'

export default class WorkoutListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

    handleDeleteNote = () => {
    this.props.history.push('/')
  };
  

  render() {
    const { workouts=[] } = this.context
    const typeId = this.props.match.params.typeId
    const workoutsForType = getWorkoutsForType(workouts, typeId)
    return (
      <section className='WorkoutListMain'>
          <Dashboard/>
        <ul>
          {workoutsForType.map(workout =>
            <li key={workout.id}>
              <Workout
                id={workout.id}
                name={workout.name}
                modified={workout.modified}
              />
            </li>
          )}
        </ul>
        <div className='WorkoutListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/App/add-workout'
            type='button'
            className='WorkoutListMain__workout-button'>
            <FontAwesomeIcon icon='plus' />
            <br />
            Workout
          </CircleButton>
        </div>
      </section>
    )
  }
}
