import React from "react";
import PropTypes from "prop-types";
import { MonoText } from "../components/StyledText";
import { Container } from "../components/StyledLayout";
import { Button } from "../components/StyledControls";
import colors from "../constants/Colors";
import { useSelector } from "react-redux";

function DeckScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const deck = useSelector((state) => {
    return state[deckId];
  });

  if (!deck) {
    return null;
  }

  return (
    <Container>
      <MonoText size={25}>{deck.title}</MonoText>
      <MonoText size={20}>{deck.questions.length}</MonoText>
      <Button onPress={() => navigation.navigate("Quiz")}>
        <MonoText color={colors.light}>Start Quiz</MonoText>
      </Button>
      <Button
        onPress={() => navigation.navigate("AddQuestion", { id: deck.id })}
      >
        <MonoText color={colors.light}>Add Question</MonoText>
      </Button>
    </Container>
  );
}

DeckScreen.propTypes = {};

export default DeckScreen;
