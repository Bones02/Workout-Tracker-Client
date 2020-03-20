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
        workouts.forEach((item) => {
            calories = calories + Number(item.calories)
        });
        // Now calories will be the total of all workouts calories added together
        return (
            calories
        )
    }

    TotalMinutes() {
        const { workouts=[] } = this.context
        var minutes = 0;
        workouts.forEach((item) => {
            minutes = minutes + Number(item.minutes)
        });
        // Now calories will be the total of all workouts calories added together

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