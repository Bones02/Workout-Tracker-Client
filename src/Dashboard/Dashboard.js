import React from 'react'
import ApiContext from '../ApiContext'
import './Dashboard.css'

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
        return (
        
        <section className='dashboard'>
            <h1 className='dashboard_title'>
               User Dashboard 
            </h1>
            {<ul className='board'>
               <p className='calories'>Total Calories Burned: {this.TotalCalories()}</p>
               <p className='minutes'>Total Minutes Burned: {this.TotalMinutes()}</p>     
               <p className='workouts'>Total Workouts: {this.TotalWorkouts()}</p>
            </ul>}
        </section>
        )
    }
}