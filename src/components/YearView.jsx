import React from 'react';
import { format } from 'date-fns';
import { useCalendarContext } from '../context/CalendarContext';

function YearView({ onMonthSelect }) {
  const { holidays } = useCalendarContext();
  const months = Array.from({ length: 12 }, (_, i) => new Date(2025, i));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {months.map((month, index) => {
        const monthHolidays = holidays.filter(
          holiday => new Date(holiday.date).getMonth() === index
        );

        return (
          <div
            key={month.toString()}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => onMonthSelect(index)}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4">
              <h3 className="text-xl font-bold text-white text-center">
                {format(month, 'MMMM')}
              </h3>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600">
                {monthHolidays.length} holiday{monthHolidays.length !== 1 ? 's' : ''}
              </div>
              <div className="mt-2 space-y-1">
                {monthHolidays.slice(0, 2).map(holiday => (
                  <div
                    key={holiday.name}
                    className="text-xs text-purple-600 truncate"
                    title={holiday.name}
                  >
                    {holiday.name}
                  </div>
                ))}
                {monthHolidays.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{monthHolidays.length - 2} more
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default YearView;