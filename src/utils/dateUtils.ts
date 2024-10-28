// src/utils/dateUtils.ts
export function generateDaysUntil(date: string): string {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const difference = targetDate.getTime() - currentDate.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return `Days until: ${days}`;
}

export function generateDayOfWeek(date: string): string {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dateObj = new Date(date).getDay();
  return days[dateObj];
}
