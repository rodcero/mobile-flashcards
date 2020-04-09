import React, { useState } from 'react';

import { Input, Button } from '../components/StyledControls';
import { MonoText } from '../components/StyledText';
import { Container } from '../components/StyledLayout';
import colors from '../constants/Colors';
import { useAddQuestion } from '../actions/questions';
import Message from '../components/Message';

function AddQuestion({ navigation, route }) {
  const deckId = route?.params?.id;

  if (!deckId) {
    return (
      <Message type='error'>Invalid call: deckId is not specified</Message>
    );
  }

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addQuestion = useAddQuestion();

  const add = () => {
    const id = `${Math.random().toString(36)}-${Math.random().toString(36)}`;
    addQuestion(deckId, { id, question, answer }).then(() => {
      setQuestion('');
      setAnswer('');
      navigation.goBack();
    });
  };

  return (
    <Container>
      <MonoText>Question:</MonoText>
      <Input value={question} onChangeText={setQuestion}></Input>
      <MonoText>Answer:</MonoText>
      <Input value={answer} onChangeText={setAnswer}></Input>
      <Button disabled={question === '' || answer === ''} onPress={add}>
        <MonoText color={colors.light}>ADD</MonoText>
      </Button>
    </Container>
  );
}

export default AddQuestion;
