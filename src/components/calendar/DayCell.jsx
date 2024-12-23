import React from 'react';
import { format } from 'date-fns';

function DayCell({ day, holidays }) {
  return (
    <div
      className={`h-24 p-2 rounded-lg border ${
        holidays.length > 0
          ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="font-semibold">{format(day, 'd')}</div>
      {holidays.map(holiday => (
        <div
          key={holiday.name}
          className="text-xs text-purple-600 mt-1 truncate"
          title={holiday.name}
        >
          {holiday.name}
        </div>
      ))}
    </div>
  );
}

export default DayCell;