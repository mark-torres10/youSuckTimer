import React from 'react';

export default function TaskInfo({ taskName, totalHoursToLog, totalHoursLogged, totalHoursRemaining }) {
  return (
    <div class="p-4 border border-gray-300 rounded shadow-md flex-2 items-center space-y-2">
        <div class="text-lg font-semibold">{ taskName }</div>
        <ul class="w-[100%] list-none ml-4 mt-2">
            <li>Total hours to commit: <span class="font-semibold">{totalHoursToLog}</span></li>
            <li>Total hours logged: <span class="font-semibold">{totalHoursLogged}</span></li>
            <li>Total hours remaining: <span class="font-semibold">{totalHoursRemaining}</span></li>
        </ul>
    </div>
  )
}
