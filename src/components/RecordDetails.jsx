import React from 'react'

export default function WorkoutDetails({record}) {
  return (
    <div className="workout-details">
      <h4>{record.name}</h4>
      <p><strong>course: </strong>{record.course}</p>
      <p><strong>batch: </strong>{record.batch}</p>
    </div>
  )
}
