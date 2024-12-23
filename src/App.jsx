import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Footer from './components/Footer';
import { CalendarProvider } from './context/CalendarContext';

export default function App() {
  return (
    <CalendarProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Calendar />
        </main>
        <Footer />
      </div>
    </CalendarProvider>
  );
}