"use client"

import React from 'react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const Calendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <CalendarComponent
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Calendar;