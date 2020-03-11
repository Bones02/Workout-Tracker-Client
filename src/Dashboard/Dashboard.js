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
        var calories = 0;
        console.log("calories is currently is to " + calories);
        workouts.forEach((item) => {
            calories = calories + Number(item.calories)
          console.log("calories is currently is to " + calories);
        });
        // Now calories will be the total of all workouts calories added together
        console.log("Loop complete, total calories: " + calories)

        return (
            calories
        )
    }

    TotalMinutes() {
        const { workouts=[] } = this.context
        var minutes = 0;
        console.log("minutes is currently is to " + minutes);
        workouts.forEach((item) => {
            minutes = minutes + Number(item.minutes)
          console.log("calories is currently is to " + minutes);
        });
        // Now calories will be the total of all workouts calories added together
        console.log("Loop complete, total calories: " + minutes)

        return (
            minutes
        )
    }

    TotalWorkouts() {
        return this.context.workouts.length;
      }
    
    render() {
        console.log('This is the dashboard')
        return (
        
        <section className='Dashboard'>
            <h1>
               User Dashboard 
            </h1>
            {<ul>
               <p>Total Calories Burned: {this.TotalCalories()}</p>
               <p>Total Minutes Burned: {this.TotalMinutes()}</p>     
               <p>Total Workouts: {this.TotalWorkouts()}</p>
            </ul>}
        </section>
        

        )
    }
}