import React from 'react'

export default React.createContext({
  workouts: [],
  types: [],
  addWorkout: () => {},
  addType: () => {},
  deleteWorkout: () => {},
})