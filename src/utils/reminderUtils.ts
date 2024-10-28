// src/utils/reminderUtils.ts
import {Alert} from 'react-native';
import {YomTov} from '../types/YomTov';

export function scheduleWeeklyReminder(yomTovs: YomTov[]) {
  const today = new Date();
  const upcomingYomTovs = yomTovs.filter(yomTov => {
    const yomTovDate = new Date(yomTov.date);
    return (
      yomTovDate >= today &&
      yomTovDate <= new Date(today.setDate(today.getDate() + 7))
    );
  });

  if (upcomingYomTovs.length > 0) {
    const reminderMessage = upcomingYomTovs
      .map(yomTov => `${yomTov.title} on ${yomTov.date}`)
      .join('\n');
    Alert.alert('Upcoming Yom Tovs This Week', reminderMessage);
  }
}
