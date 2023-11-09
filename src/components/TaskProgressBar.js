import React from 'react';
import { Progress } from "./ui/progress";

import '../styles/TaskProgressBar.css'

export default function TaskProgressBar() {
  return (
    <Progress value={60} className="w-[60%]"/>
  )
}
