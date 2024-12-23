import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useCalendarContext } from '../context/CalendarContext';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import DayCell from './calendar/DayCell';
import HolidayList from './calendar/HolidayList';
import WeekdayHeader from './calendar/WeekdayHeader';

function MonthView({ month, onBack }) {
  const { holidays } = useCalendarContext();
  const date = new Date(2025, month);
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const monthHolidays = holidays.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getMonth() === month;
  });

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Back to Year View
        </button>
        <h2 className="text-2xl font-bold text-center flex-grow">
          {format(date, 'MMMM yyyy')}
        </h2>
      </div>

      <WeekdayHeader />

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: monthStart.getDay() }).map((_, index) => (
          <div key={`empty-${index}`} className="h-24 bg-gray-50 rounded-lg" />
        ))}
        
        {days.map(day => {
          const dayHolidays = monthHolidays.filter(
            holiday => new Date(holiday.date).getDate() === day.getDate()
          );
          return <DayCell key={day.toString()} day={day} holidays={dayHolidays} />;
        })}
      </div>

      <HolidayList holidays={monthHolidays} />
    </div>
  );
}

export default MonthView;