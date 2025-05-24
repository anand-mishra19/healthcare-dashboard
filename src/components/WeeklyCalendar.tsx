import React from 'react';
import { useAppContext } from '../context/AppContext';
import { weekDays, timeSlots } from '../data/mockData';

const WeeklyCalendar: React.FC = () => {
  const { currentWeek, appointments } = useAppContext();

  // Generate dates for the current week
  const getDatesForCurrentWeek = () => {
    const dates = [];
    const firstDayOfWeek = new Date(currentWeek);
    
    // Adjust to Monday (assuming Monday is the first day of the week)
    const day = currentWeek.getDay();
    const diff = currentWeek.getDate() - day + (day === 0 ? -6 : 1);
    firstDayOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const weekDates = getDatesForCurrentWeek();

  // Check if an appointment exists for a specific day and time
  const getAppointmentForSlot = (date: Date, timeSlot: string) => {
    return appointments.find(app => 
      app.day === date.getDate() && 
      app.month === date.getMonth() + 1 && 
      app.year === date.getFullYear() && 
      app.startTime === timeSlot
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="grid grid-cols-8 gap-1 mb-2">
        <div className=""></div>
        {weekDays.map((day, index) => (
          <div key={day} className="text-center font-medium text-sm">
            <div className="text-gray-600">{day}</div>
            <div className="mt-1 text-lg font-semibold">{weekDates[index].getDate()}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-8 gap-1">
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            <div className="text-xs text-gray-500 pr-2 text-right py-2">{time}</div>
            {weekDates.map((date, dateIndex) => {
              const appointment = getAppointmentForSlot(date, time);
              return (
                <div 
                  key={`${date}-${time}`} 
                  className={`border-t border-gray-100 py-2 px-1 text-xs 
                    ${appointment ? 'bg-blue-50 rounded-md' : ''}`}
                >
                  {appointment && (
                    <div className={`text-center font-medium ${
                      appointment.type === 'therapy' ? 'text-teal-600' : 
                      appointment.type === 'specialist' ? 'text-blue-600' : 
                      'text-gray-600'
                    }`}>
                      {appointment.startTime}
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;