// src/App.tsx
import React, {useEffect, useState} from 'react';
import {Appbar, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import YomTovList from './components/YomTovList';
import {scheduleWeeklyReminder} from './utils/reminderUtils';
import {YomTov} from './types/YomTov';

function App() {
  const [yomTovs, setYomTovs] = useState<YomTov[]>([]);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = date.getDate().toString().padStart(2, '0');
    const startDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const endDate = `${currentYear + 1}-${currentMonth}-01`;

    (async () => {
      try {
        const response = await fetch(
          `https://www.hebcal.com/hebcal?start=${startDate}&end=${endDate}&v=1&cfg=json&maj=on&min=on&mod=off&nx=on&month=x&ss=on&mf=on&c=off&s=off&D=off&d=off&o=off&F=off&myomi=off&leyning=off`,
        );
        const data = await response.json();
        setYomTovs(data.items);
        scheduleWeeklyReminder(data.items); // Call the reminder function
      } catch (error) {
        console.error('Error getting holidays: ' + error);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="Yom Tov Reminders" />
        </Appbar.Header>
        <YomTovList yomTovs={yomTovs} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
