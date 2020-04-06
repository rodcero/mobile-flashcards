import * as React from 'react';
import { View } from 'react-native';

import { MonoText } from '../components/StyledText';
import DeckList from '../components/DeckList';

export default function HomeScreen() {
  return (
    <View>
      <MonoText>screens/HomeScreen.js</MonoText>
      <DeckList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'How to get Started',
};
