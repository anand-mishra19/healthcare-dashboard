import React from 'react';
import { weeklyActivityData, weekDays } from '../data/mockData';

const ActivityChart: React.FC = () => {
  const maxValue = Math.max(...weeklyActivityData.flat());

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Activity</h3>
        <div className="text-xs text-gray-500">3 appointment on this week</div>
      </div>

      <div className="flex h-48 items-end justify-between gap-1">
        {weekDays.map((day, dayIndex) => (
          <div key={day} className="flex-1 flex flex-col items-center justify-end gap-1">
            {weeklyActivityData.map((dataset, dataIndex) => {
              const value = dataset[dayIndex];
              const height = `${(value / maxValue) * 100}%`;
              
              return (
                <div 
                  key={`${day}-${dataIndex}`}
                  style={{ height }}
                  className={`w-full rounded-sm ${
                    dataIndex === 0 ? 'bg-teal-400' : 
                    dataIndex === 1 ? 'bg-blue-500' : 
                    dataIndex === 2 ? 'bg-purple-500' : 
                    'bg-gray-300'
                  }`}
                ></div>
              );
            })}
            <div className="text-xs text-gray-500 mt-2">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;