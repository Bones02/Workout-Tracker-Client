import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findWorkout, findType } from '../workout-helpers'
//import './WorkoutPageNav.css'

export default class WorkoutPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { workouts, types, } = this.context
    const { workoutId } = this.props.match.params
    const workout = findWorkout(workouts, workoutId) || {}
    const type = findType(types, workout.typeId)
    return (
      <div className='WorkoutPageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='WorkoutPageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {type && (
          <h3 className='WorkoutPageNav__type-name'>
            {type.name}
          </h3>
        )}
      </div>
    )
  }
}
