import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import App from './App'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faCoffee, faRunning)

it('renders without crashing', () => {
  const value = {
    workouts: this.state.workouts,
    types: this.state.types,
    deleteWorkout: this.handleDeleteWorkout,
    addWorkout: this.addWorkout,
    addType: this.addType
  };
  return (
    <ApiContext.Provider value={value}>
        <div className="App">
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
            <header className="App__header">
                <h1>
                    <Link to="/App">Workout Tracker</Link>{' '}
                    <FontAwesomeIcon icon="running" />
                </h1>
            </header>
            <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
    </ApiContext.Provider>
  );
})

