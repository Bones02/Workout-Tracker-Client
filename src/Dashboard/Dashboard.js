import React from 'react'
import ApiContext from '../ApiContext'
import Workout from '../Workout/Workout'
import { getWorkoutsForType} from '../workout-helpers'

export default class Dashboard extends React.Component {
    static defaultProps = {
      match: {
        params: {}
      }
    }
    static contextType = ApiContext
    
    TotalCalories() {
        const { workouts=[] } = this.context
        const calories = workouts.calories.join(', ')
        console.log(calories)
    }

//     const minutes ={workouts.minutes}
//     const total = {workouts}

//    renderTotalCalories = props => {    
//     const total = props.calories.reduce(
//           (prevValue, currentValue) => prevValue + currentValue.workouts.calories,
//           0
//         );
//     };

//     const TotalMinutes = props => {
//         const total = props.minutes.reduce(
//           (prevValue, currentValue) => prevValue + currentValue.workouts.minutes,
//           0
//         );
//     };
// // need number of workouts in state
//     const TotalWorkouts = props => {
//         const total = props.total.reduce(
//           (prevValue, currentValue) => prevValue + currentValue.workouts,
//           0
//         );
//     };
    

    render() {
        //const { type } = this.props.match.params
        //const { workouts=[] } = this.context
        console.log('This is the dashboard')
        

        return (
        //One formula passed for each param.
        
        <section className='Dashboard'>
            <p>
                This is where the Dashboard will display.
            </p>
            {/* <ul>
               <p>Total Calories Burned: {this.TotalCalories}</p>;
               <p>Total Calories Burned: {this.TotalMinutes}</p>;      
               <p>Total Calories Burned: {this.TotalWorkouts}</p>;
            </ul> */}
        </section>
        

        )
    }
}