
export const findType = (types=[], typeId) =>
types.find(type => type.id === typeId)

export const findWorkout = (workouts=[], workoutId) =>
workouts.find(workout => workout.id === workoutId)

export const getWorkoutsForType = (workouts=[], typeId) => (
(!typeId)
  ? workouts
  : workouts.filter(workout => workout.typeId === typeId)
)

export const countWorkoutsForType = (workouts=[], typeId) =>
workouts.filter(workout => workout.typeId === typeId).length
