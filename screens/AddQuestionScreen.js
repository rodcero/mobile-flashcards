import React, { useState } from "react";

import { Input, Button } from "../components/StyledControls";
import { MonoText } from "../components/StyledText";
import { Container } from "../components/StyledLayout";
import colors from "../constants/Colors";
import { useAddQuestion } from "../actions/decks";

function AddQuestion({ navigation, route }) {
  const deckId = route?.params?.id;

  if (!deckId) {
    return null;
  }

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addQuestion = useAddQuestion();

  const add = () => {
    addQuestion(deckId, { question, answer }).then(() => {
      setQuestion("");
      setAnswer("");
      navigation.goBack();
    });
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

export default AddQuestion;
