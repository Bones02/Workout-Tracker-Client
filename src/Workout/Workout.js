import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
//import './Workout.css'

export default class Workout extends React.Component {
  static defaultProps ={
    onDeleteWorkout: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const workoutId = this.props.id
      console.log(this.props)

    fetch(`${config.API_ENDPOINT}/App/workout/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })

      .then(() => {
        this.context.deleteWorkout(workoutId)
        // allow parent to perform extra behaviour
        this.props.onDeleteWorkout()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    console.log(this.props)
    return (
      <div className='Workout'>
        <h2 className='Workout__title'>
          <Link to={`/App/workout/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Workout__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Workout__dates'>
          <div className='Workout__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
