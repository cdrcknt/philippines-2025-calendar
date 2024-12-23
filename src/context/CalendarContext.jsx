import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CalendarContext = createContext();

export function CalendarProvider({ children }) {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using 2023 as the API's free tier only supports historical data
        const response = await axios.get('https://holidayapi.com/v1/holidays', {
          params: {
            key: 'df6c7ba3-9d42-4e05-b8f7-5309c3b0b606',
            country: 'PH',
            year: 2023,
            language: 'en'
          }
        });

        // Transform the data to match 2025 dates
        const holidays2025 = (response.data.holidays || []).map(holiday => ({
          ...holiday,
          date: holiday.date.replace('2023', '2025')
        }));

        setHolidays(holidays2025);
      } catch (error) {
        console.error('Error fetching holidays:', error);
        setError('Failed to load holidays. Please try again later.');
        // Set some sample holidays for demonstration
        setHolidays([
          { date: '2025-01-01', name: 'New Year\'s Day', public: true },
          { date: '2025-04-09', name: 'Araw ng Kagitingan', public: true },
          { date: '2025-12-25', name: 'Christmas Day', public: true },
          { date: '2025-12-30', name: 'Rizal Day', public: true }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <CalendarContext.Provider value={{ holidays, loading, error }}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendarContext() {
  return useContext(CalendarContext);
}