import React from "react";

import Message from "../components/Message";
import { MonoText } from "../components/StyledText";
import { Container } from "../components/StyledLayout";
import { Button } from "../components/StyledControls";
import colors from "../constants/Colors";
import { useSelector } from "react-redux";

function DeckScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const deck = useSelector((state) => state[deckId]);

  if (!deck) {
    return <Message type="error">Invalid call: missing deck</Message>;
  }

  return (
    <Container>
      <MonoText size={25}>{deck.title}</MonoText>
      <MonoText size={20}>{deck.questions.length}</MonoText>
      <Button
        disabled={deck.questions.length === 0}
        onPress={() => navigation.navigate("Quiz", { id: deck.id })}
      >
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

export default DeckScreen;
