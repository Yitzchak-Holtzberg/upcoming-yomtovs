import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import YomTovCard from './YomTovCard';
import {YomTov} from '../types/YomTov';

interface YomTovListProps {
  yomTovs: YomTov[];
}

const YomTovList: React.FC<YomTovListProps> = ({yomTovs}) => (
  <SafeAreaView style={{flex: 1}}>
    <FlatList
      data={yomTovs}
      renderItem={({item}) => <YomTovCard yomTov={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
);

export default YomTovList;
