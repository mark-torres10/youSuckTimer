import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TaskInfo() {

  const [hoursData, setHoursData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/hours')
      .then(response => {
        setHoursData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div class="p-4 border border-gray-300 rounded shadow-md flex-2 items-center space-y-2">
        <div class="text-lg font-semibold">Research Work</div>
        <ul class="w-[100%] list-none ml-4 mt-2">
            <li>Total hours to commit: <span class="font-semibold">{hoursData.totalHours}</span></li>
            <li>Total hours logged: <span class="font-semibold">{hoursData.totalHoursLogged}</span></li>
            <li>Total hours remaining: <span class="font-semibold">{hoursData.totalHoursRemaining}</span></li>
        </ul>
    </div>
  )
}
