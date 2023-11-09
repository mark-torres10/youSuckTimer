import React from 'react';
import { Progress } from "./ui/progress";

export default function TaskProgressBar({ totalHoursToLog, totalHoursLogged }) {

  const progressValue = Math.floor((totalHoursLogged / totalHoursToLog) * 100);

  return (
    <div className="w-[80%] flex-4 ml-8 flex items-center">
      <Progress value={progressValue} />
    </div>
  )
}
