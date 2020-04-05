import * as React from 'react';
import { View } from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View>
      <MonoText>screens/HomeScreen.js</MonoText>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'How to get Started',
};
