// src/components/YomTovCard.tsx
import React from 'react';
import {Card, Paragraph, Text, Title} from 'react-native-paper';
import {Linking} from 'react-native';
import {generateDayOfWeek, generateDaysUntil} from '../utils/dateUtils';
import {YomTov} from '../types/YomTov';

interface YomTovCardProps {
  yomTov: YomTov;
}

const YomTovCard: React.FC<YomTovCardProps> = ({yomTov}) => (
  <Card style={{margin: 10}}>
    <Card.Content>
      <Title>{yomTov.title}</Title>
      <Text>
        {yomTov.date} - {generateDayOfWeek(yomTov.date)}
      </Text>
      <Text>{generateDaysUntil(yomTov.date)}</Text>
      <Text>{yomTov.hebrew}</Text>
      <Text>{yomTov.category}</Text>
      <Paragraph>{yomTov.memo}</Paragraph>
      <Text
        onPress={() => Linking.openURL(yomTov.link)}
        style={{color: 'teal'}}>
        Learn more
      </Text>
      <Text>{yomTov.location}</Text>
    </Card.Content>
  </Card>
);

export default YomTovCard;
