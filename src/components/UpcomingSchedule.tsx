import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const UpcomingSchedule: React.FC = () => {
  const { appointments } = useAppContext();

  const getUpcomingAppointments = () => {
    // In a real app, we'd filter by current date
    return appointments;
  };

  const upcomingAppointments = getUpcomingAppointments();

  // Group appointments by day
  const groupedAppointments = upcomingAppointments.reduce((acc, appointment) => {
    const dayKey = appointment.day === 28 ? 'Thursday' : 'Saturday';
    if (!acc[dayKey]) {
      acc[dayKey] = [];
    }
    acc[dayKey].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  const LucideIcon = ({ name }: { name: string }) => {
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.FC<React.ComponentProps<typeof Icon>>;
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  const getAppointmentColor = (type: string) => {
    switch (type) {
      case 'checkup':
        return 'bg-blue-100 text-blue-800';
      case 'therapy':
        return 'bg-teal-100 text-teal-800';
      case 'specialist':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium mb-4">The Upcoming Schedule</h3>

      {Object.entries(groupedAppointments).map(([day, dayAppointments]) => (
        <div key={day} className="mb-4">
          <h4 className="text-sm text-gray-500 mb-2">On {day}</h4>
          <div className="grid grid-cols-2 gap-2">
            {dayAppointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className={`${getAppointmentColor(appointment.type)} p-3 rounded-lg`}
              >
                <div className="flex justify-between">
                  <h5 className="font-medium">{appointment.title}</h5>
                  {appointment.icon && <LucideIcon name={appointment.icon} />}
                </div>
                <p className="text-sm mt-1">
                  {appointment.startTime} {appointment.endTime ? `- ${appointment.endTime}` : 'AM'} {appointment.doctorName ? `• ${appointment.doctorName}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;