import React from 'react';
import { TouchableWithoutFeedback, View, Animated, Text } from 'react-native';
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { useRemoveDeck } from '../actions/decks';

const StyledDeckListItem = styled.View`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  margin: 10px 10px 0 10px;
  box-shadow: 5px 5px 2px #eee;
  flex-direction: row;
`;

export default function DeckListItem({ deck, navigation, questionCount }) {
  const removeDeck = useRemoveDeck();

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
    });

    return (
      <Animated.View
        trans={trans}
        style={[
          {
            transform: [{ translateX: trans }],
          },
          {
            width: 100,
            backgroundColor: 'red',
            boderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            removeDeck(deck.id);
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons
              name={'trash-can-outline'}
              size={30}
              style={{ marginBottom: -3 }}
              color={'white'}
            />
            <MonoText color={Colors.light}>Delete</MonoText>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Deck', { id: deck.id })}
      >
        <StyledDeckListItem>
          <MaterialCommunityIcons
            style={{ marginLeft: 10, marginRight: 25 }}
            size={50}
            name={deck.icon}
          />
          <View>
            <MonoText size={24}>{deck.title}</MonoText>
            <MonoText>Cards: {questionCount}</MonoText>
          </View>
        </StyledDeckListItem>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
}
