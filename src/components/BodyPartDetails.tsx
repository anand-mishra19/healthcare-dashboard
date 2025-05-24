import React from 'react';
import { BodyPart } from '../types';

interface BodyPartDetailsProps {
  bodyPart: BodyPart;
}

const BodyPartDetails: React.FC<BodyPartDetailsProps> = ({ bodyPart }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-teal-500';
      case 'warning':
        return 'bg-amber-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'w-5/6';
      case 'warning':
        return 'w-1/2';
      case 'critical':
        return 'w-1/4';
      default:
        return 'w-0';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{bodyPart.name}</h3>
        <span className="text-xs text-gray-500">Date: {bodyPart.lastChecked}</span>
      </div>

      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getStatusColor(bodyPart.status)} ${getProgressWidth(bodyPart.status)}`}
        ></div>
      </div>
    </div>
  );
};

export default BodyPartDetails;