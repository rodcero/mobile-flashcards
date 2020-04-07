import React from "react";
import { FlatList, Text, View, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

import { MonoText } from "./StyledText";

const StyledDeckListItem = styled.View`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  margin: 10px 10px 0 10px;
  box-shadow: 5px 5px 2px #eee;
`;

const DeckListItem = ({ deck, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Deck", { id: deck.id })}
    >
      <StyledDeckListItem>
        <MonoText size={24}>{deck.title}</MonoText>
        <MonoText>Cards: {deck.questions.length}</MonoText>
      </StyledDeckListItem>
    </TouchableWithoutFeedback>
  );
};

const DeckList = (props) => {
  const navigation = useNavigation();
  const decks = useSelector((state) => state);

  return (
    <FlatList
      data={Object.keys(decks).map((key) => decks[key])}
      renderItem={({ item }) => (
        <DeckListItem deck={item} navigation={navigation} />
      )}
      keyExtractor={(item) => `${item.id}`}
    ></FlatList>
  );
};

DeckList.propTypes = {};

export default DeckList;
