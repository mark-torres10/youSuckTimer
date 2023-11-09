import React, { useState, useEffect } from 'react';
import TaskInfo from './TaskInfo';
import TaskProgressBar from './TaskProgressBar';

import axios from 'axios';

import '../styles/TaskRow.css';

export default function TaskRow({ taskName, taskRoute }) {
  
  const [hoursData, setHoursData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/hours/${taskRoute}`)
      .then(response => {
        setHoursData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(`Hours Data: ${hoursData}`);
  }, []);

  const totalHoursToLog = hoursData.totalHoursToLog;
  const totalHoursLogged = hoursData.totalHoursLogged;
  const totalHoursRemaining = totalHoursToLog - totalHoursLogged;
  return (
    <div className="TaskRow">
      <TaskInfo
        taskName={taskName}
        totalHoursToLog={totalHoursToLog}
        totalHoursLogged={totalHoursLogged}
        totalHoursRemaining={totalHoursRemaining}
      />
      <TaskProgressBar 
        totalHoursToLog={totalHoursToLog}
        totalHoursLogged={totalHoursLogged}
      />
    </div>
  )
}
