import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Progress } from "./ui/progress";

export default function TaskProgressBar() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/hours')
      .then(response => {
        setProgressValue(response.data.totalHoursRemaining);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[80%] flex-4 ml-8 flex items-center">
      <Progress value={progressValue} />
    </div>
  )
}
