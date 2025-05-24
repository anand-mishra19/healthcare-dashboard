export interface Appointment {
  id: string;
  title: string;
  doctorName: string;
  doctorTitle: string;
  startTime: string;
  endTime: string;
  day: number;
  month: number;
  year: number;
  type: 'checkup' | 'therapy' | 'specialist' | 'other';
  icon?: string;
}

export interface BodyPart {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  lastChecked: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
}

export interface NavItem {
  name: string;
  icon: string;
  path: string;
  section: 'general' | 'tools';
}