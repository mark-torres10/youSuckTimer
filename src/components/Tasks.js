import React, { useState, useEffect } from 'react';
import TaskRow from './TaskRow';

import axios from 'axios';

import '../styles/Tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/all-tasks')
      .then(response => {
        setTasks(response.data.tasks);
      })
      .catch(error => {
        console.log(error);
      });
  })


  return (
    <div className="Tasks">
      {tasks.map((task, index) => (
        <TaskRow key={index} taskName={task.task_name} taskRoute={task.route_alias}/>
      ))}
    </div>
  )
}
