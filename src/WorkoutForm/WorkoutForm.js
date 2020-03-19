import React from 'react'
import './WorkoutForm.css'

export default function WorkoutForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Workout-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}