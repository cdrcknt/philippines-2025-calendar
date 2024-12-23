import React, { useState } from 'react';
import MonthView from './MonthView';
import YearView from './YearView';
import LoadingState from './LoadingState';
import { useCalendarContext } from '../context/CalendarContext';

export default function Calendar() {
  const [view, setView] = useState('year');
  const [selectedMonth, setSelectedMonth] = useState(0);
  const { loading, error } = useCalendarContext();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setView('year')}
          className={`px-4 py-2 rounded-lg ${
            view === 'year'
              ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
              : 'bg-white text-gray-700'
          } shadow-md transition-all duration-300`}
        >
          Year View
        </button>
        <button
          onClick={() => setView('month')}
          className={`px-4 py-2 rounded-lg ${
            view === 'month'
              ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
              : 'bg-white text-gray-700'
          } shadow-md transition-all duration-300`}
        >
          Month View
        </button>
      </div>

      {view === 'year' ? (
        <YearView onMonthSelect={(month) => {
          setSelectedMonth(month);
          setView('month');
        }} />
      ) : (
        <MonthView month={selectedMonth} onBack={() => setView('year')} />
      )}
    </div>
  );
}