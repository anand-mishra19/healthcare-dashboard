import { Appointment, BodyPart, NavItem } from '../src/types';

export const navigationItems: NavItem[] = [
  { name: 'Dashboard', icon: 'layout-dashboard', path: '/', section: 'general' },
  { name: 'History', icon: 'history', path: '/history', section: 'general' },
  { name: 'Calendar', icon: 'calendar', path: '/calendar', section: 'general' },
  { name: 'Appointments', icon: 'calendar-clock', path: '/appointments', section: 'general' },
  { name: 'Statistics', icon: 'bar-chart', path: '/statistics', section: 'general' },
  { name: 'Chat', icon: 'message-square', path: '/chat', section: 'tools' },
  { name: 'Support', icon: 'life-buoy', path: '/support', section: 'tools' },
  { name: 'Setting', icon: 'settings', path: '/settings', section: 'tools' },
];

export const bodyPartsData: BodyPart[] = [
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'healthy',
    lastChecked: '24 Oct 2021',
    description: 'Your lungs are in good condition.',
    position: { x: 50, y: 30 },
  },
  {
    id: 'heart',
    name: 'Heart',
    status: 'healthy',
    lastChecked: '20 Oct 2021',
    description: 'Your heart is healthy.',
    position: { x: 45, y: 25 },
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    lastChecked: '16 Oct 2021',
    description: 'Regular dental checkup recommended.',
    position: { x: 50, y: 15 },
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'critical',
    lastChecked: '24 Oct 2021',
    description: 'Bone density concerns. Follow-up required.',
    position: { x: 30, y: 60 },
  },
  {
    id: 'leg',
    name: 'Leg',
    status: 'healthy',
    lastChecked: '18 Oct 2021',
    description: 'Your leg muscles are in good condition.',
    position: { x: 30, y: 75 },
  },
];

export const appointmentsData: Appointment[] = [
  {
    id: '1',
    title: 'Dentist',
    doctorName: 'Dr. Cameron Williamson',
    doctorTitle: 'Dentist',
    startTime: '09:00',
    endTime: '11:00',
    day: 28,
    month: 10,
    year: 2021,
    type: 'specialist',
    icon: 'tooth',
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctorName: 'Dr. Kevin Domes',
    doctorTitle: 'Physiotherapist',
    startTime: '11:00',
    endTime: '12:00',
    day: 28,
    month: 10,
    year: 2021,
    type: 'therapy',
    icon: 'dumbbell',
  },
  {
    id: '3',
    title: 'Health checkup complete',
    doctorName: '',
    doctorTitle: '',
    startTime: '11:00',
    endTime: '',
    day: 28,
    month: 10,
    year: 2021,
    type: 'checkup',
    icon: 'stethoscope',
  },
  {
    id: '4',
    title: 'Ophthalmologist',
    doctorName: '',
    doctorTitle: 'Ophthalmologist',
    startTime: '14:00',
    endTime: '',
    day: 28,
    month: 10,
    year: 2021,
    type: 'specialist',
    icon: 'eye',
  },
  {
    id: '5',
    title: 'Cardiologist',
    doctorName: '',
    doctorTitle: 'Cardiologist',
    startTime: '12:00',
    endTime: '',
    day: 30,
    month: 10,
    year: 2021,
    type: 'specialist',
    icon: 'heart',
  },
  {
    id: '6',
    title: 'Neurologist',
    doctorName: '',
    doctorTitle: 'Neurologist',
    startTime: '16:00',
    endTime: '',
    day: 30,
    month: 10,
    year: 2021,
    type: 'specialist',
    icon: 'brain',
  },
];

export const weeklyActivityData = [
  [10, 20, 15, 25, 30, 20, 15],
  [5, 15, 10, 20, 25, 15, 10],
  [8, 12, 18, 15, 20, 10, 5],
  [12, 18, 15, 10, 8, 5, 10],
];

export const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

export const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];