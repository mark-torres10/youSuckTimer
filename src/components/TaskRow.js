import React from 'react';
import TaskInfo from './TaskInfo';
import TaskProgressBar from './TaskProgressBar';

import '../styles/TaskRow.css';

export default function TaskRow() {
  return (
    <div className="TaskRow">
      <TaskInfo />
      <TaskProgressBar />
    </div>
  )
}
