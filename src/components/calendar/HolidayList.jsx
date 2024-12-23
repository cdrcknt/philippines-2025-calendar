import React from 'react';
import { format } from 'date-fns';

function HolidayList({ holidays }) {
  if (holidays.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Holidays this month</h3>
      <div className="space-y-2">
        {holidays.map(holiday => (
          <div
            key={holiday.name}
            className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
          >
            <div className="font-semibold">{holiday.name}</div>
            <div className="text-sm text-gray-600">
              {format(new Date(holiday.date), 'MMMM d, yyyy')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HolidayList;