import React from 'react';

function WeekdayHeader() {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="grid grid-cols-7 gap-2 mb-4">
      {weekdays.map(day => (
        <div key={day} className="text-center font-semibold text-gray-600">
          {day}
        </div>
      ))}
    </div>
  );
}

export default WeekdayHeader;