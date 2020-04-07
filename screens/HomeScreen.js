import * as React from 'react';
import { View } from 'react-native';
import DeckList from '../components/DeckList';

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
