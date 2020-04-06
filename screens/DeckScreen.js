import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

function DeckScreen(props) {
  const navigation = useNavigation();
  return (
    <View>
      {/* TODO: Deck Title */}
      {/* TODO: Number of cards */}
      {/* TODO: Start Quiz */}
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('AddQuestion')}
      >
        <Text>Deck Screen</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

DeckScreen.propTypes = {};

export default DeckScreen;
