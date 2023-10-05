import React from 'react'

import '../styles/Timer.css'

const totalHoursNeeded = 100;
const totalHours = 20;

export default function Timer() {
  return (
    <div className="Timer">
        <h1>Total Hours To Log: <span>{totalHoursNeeded}</span></h1>
        <h1>Total Hours Logged: <span>{totalHours}</span></h1>
        <h1>Total Hours Remaining: <span>{totalHoursNeeded - totalHours}</span></h1>
    </div>
  )
}
