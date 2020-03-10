import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton';
import ApiContext from '../ApiContext';
import { countWorkoutsForType } from '../workout-helpers';
//import './WorkoutListNav.css'

export default class WorkoutListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { types=[], workouts=[] } = this.context
    return (
      <div className='WorkoutListNav'>
        <ul className='WorkoutListNav__list'>
          {types.map(type =>
            <li key={type.id}>
              <NavLink
                className='WorkoutListNav__type-link'
                to={`/type/${type.id}`}
              >
                <span className='WorkoutListNav__num-workouts'>
                  {countWorkoutsForType(workouts, type.id)}
                </span>
                {type.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='WorkoutListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/App/add-type'
            type='button'
            className='WorkoutListNav__add-type-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Type
          </CircleButton>
        </div>
      </div>
    )
  }
}
