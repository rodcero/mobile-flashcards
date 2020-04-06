import * as React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MonoText } from '../components/StyledText';
import DeckList from '../components/DeckList';
import {Container} from '../components/StyledLayout'

export default function HomeScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DeckList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'How to get Started',
};
