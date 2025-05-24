import React from 'react';
import { useAppContext } from '../../../my-app/src/context/AppContext';
import Header from '../components/Header';
import BodyVisualization from '../components/BodyVisualization';
import BodyPartDetails from '../components/BodyPartDetails';
import WeeklyCalendar from '../components/WeeklyCalendar';
import ActivityChart from '../components/ActivityChart';
import UpcomingSchedule from '../components/UpcomingSchedule';

const Dashboard: React.FC = () => {
  const { bodyParts, selectedBodyPart } = useAppContext();

  return (
    <div>
      <Header />
      
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-5">
          <BodyVisualization />
          
          <div className="mt-6">
            {selectedBodyPart ? (
              <BodyPartDetails bodyPart={selectedBodyPart} />
            ) : (
              bodyParts.map((Part) => (
                <BodyPartDetails key={part.id} bodyPart={part} />
              ))
            )}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="col-span-7">
          <WeeklyCalendar />
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <ActivityChart />
            </div>
            <div className="col-span-7">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;