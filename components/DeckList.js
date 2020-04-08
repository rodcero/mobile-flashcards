import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Message from './Message';
import DeckListItem from './DeckListItem';

const DeckList = () => {
  const navigation = useNavigation();
  const decks = useSelector((state) => state);
  const deckList = Object.keys(decks).map((key) => decks[key]);
  if (deckList.length < 1)
    return (
      <Message title='Welcome!'>
        Please try creating a new deck by tapping the create deck option.
      </Message>
    );

  return (
    <FlatList
      data={deckList}
      renderItem={({ item }) => (
        <DeckListItem deck={item} navigation={navigation} />
      )}
      keyExtractor={(item) => `${item.id}`}
    ></FlatList>
  );
};

export default DeckList;
