import React from 'react';
import TaskRow from './TaskRow';

import '../styles/Tasks.css';

export default function Tasks() {
  return (
    <div className="Tasks">
        <TaskRow />
        <TaskRow />
    </div>
  )
}
