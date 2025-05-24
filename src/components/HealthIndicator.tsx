import React from 'react';
import { BodyPart } from '../types';

interface HealthIndicatorProps {
  bodyPart: BodyPart;
  icon: React.ReactNode;
  onClick: () => void;
}

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ bodyPart, icon, onClick }) => {
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

  // Calculate styles based on position (x and y are percentages)
  const positionStyles = {
    left: `${bodyPart.position.x}%`,
    top: `${bodyPart.position.y}%`,
  };

  return (
    <button
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
        getStatusColor(bodyPart.status)
      } text-white rounded-lg px-3 py-1 text-xs font-medium flex items-center gap-1 shadow-md hover:shadow-lg transition-shadow`}
      style={positionStyles}
      onClick={onClick}
    >
      {icon}
      <span>{bodyPart.name}</span>
    </button>
  );
};

export default HealthIndicator;