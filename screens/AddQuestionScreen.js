import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input, Button } from "../components/StyledControls";
import { MonoText } from "../components/StyledText";
import { Container } from "../components/StyledLayout";
import colors from "../constants/Colors";
import { useAddDeck } from "../actions/decks";
import { useSelector } from "react-redux";

function AddQuestion({ navigation, route }) {
  const deckId = route?.params?.id;
  console.log("add", navigation, route);
  const deck = useSelector((state) => {
    return state[deckId];
  });

  if (!deck) {
    return null;
  }

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addDeck = useAddDeck();

  const add = () => {
    addDeck({
      ...deck,
      questions: [...deck.questions, { question, answer }],
    }).then(() => {
      setQuestion("");
      setAnswer("");
    });
    navigation.goBack();
  };

  return (
    <Container>
      <MonoText>Question:</MonoText>
      <Input value={question} onChangeText={setQuestion}></Input>
      <MonoText>Answer:</MonoText>
      <Input value={answer} onChangeText={setAnswer}></Input>
      <Button onPress={add}>
        <MonoText color={colors.light}>ADD</MonoText>
      </Button>
    </Container>
  );
}

AddQuestion.propTypes = {};

export default AddQuestion;
