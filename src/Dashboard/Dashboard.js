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
            <section>
            <h1 class="dashboard_title">User Dashboard</h1>
            </section>
            <section> 
                {<ul className='board'>
                <p className='calories'>Total Calories Burned: {this.TotalCalories()}</p>
                <p className='minutes'>Total Minutes Burned: {this.TotalMinutes()}</p>     
                <p className='workouts'>Total Workouts: {this.TotalWorkouts()}</p>
                </ul>}
            </section>
        </section>
    )
    }
}