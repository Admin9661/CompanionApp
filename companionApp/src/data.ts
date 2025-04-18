export interface EventType {
  id: number;
    name: string;
    description: string;
  date: string;
  isAttended: boolean;
  isFeatured: boolean;
}

export const mockEvents: EventType[] = [
  {
    id: 1,
    name: 'Tech Talk: AI & ML',
    description: 'Join us to explore real-world applications of AI and Machine Learning by industry experts.',
    date: '2025-04-25T10:00:00',
    isAttended: false,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Placement Drive: TCS',
    description: 'Participate in the TCS campus recruitment drive. Don’t forget your resume!',
    date: '2025-04-28T09:00:00',
    isAttended: false,
    isFeatured: false,
  },
  {
    id: 3,
    name: 'Coding Bootcamp',
    description: 'A hands-on session to sharpen your coding skills. Open to all departments.',
    date: '2025-04-20T12:00:00',
    isAttended: false,
    isFeatured: false,
    },
];

export type TPOUpdateType = {
  id: number;
  message: string;
  isRead?: boolean;
};



export type ReminderType = {
  id: number;
  text: string;
};
