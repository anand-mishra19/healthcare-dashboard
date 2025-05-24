import React from 'react';
import { useAppContext } from '../../../my-app/src/context/AppContext';
import { Heart, Settings as Lungs, Bluetooth as Tooth, Bone } from 'lucide-react';
import HealthIndicator from './HealthIndicator';

const BodyVisualization: React.FC = () => {
  const { bodyParts, setSelectedBodyPart } = useAppContext();

  // Get appropriate icon for each body part
  const getBodyPartIcon = (id: string) => {
    switch (id) {
      case 'heart':
        return <Heart className="text-red-500" />;
      case 'lungs':
        return <Lungs className="text-blue-500" />;
      case 'teeth':
        return <Tooth className="text-white" />;
      case 'bone':
        return <Bone className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center relative">
      <div className="h-80 w-full relative">
        {/* Human body image - this would be a more detailed SVG in a real application */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Human body visualization" 
            className="h-full object-contain opacity-70"
          />
        </div>

        {/* Health indicators positioned on the body */}
        {bodyParts.map((part) => (
          <HealthIndicator 
            key={part.id}
            bodyPart={part}
            icon={getBodyPartIcon(part.id)}
            onClick={() => setSelectedBodyPart(part)}
          />
        ))}
      </div>

      {/* Zoom slider */}
      <div className="w-1/2 mt-4 flex items-center gap-2">
        <div className="h-1 flex-1 bg-gray-200 rounded-full relative">
          <div className="absolute h-4 w-4 bg-white border border-gray-300 rounded-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default BodyVisualization;