import React, { useState } from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Message from '../components/Message';
import { MonoText } from '../components/StyledText';
import { Container } from '../components/StyledLayout';
import { Button } from '../components/StyledControls';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';

const StyledQuestionItem = styled.View`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 3px;
  flex: 1;
  flex-direction: row;
`;

function DeckScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const deck = useSelector((state) => state[deckId]);
  const [showQuestions, setShowQuestions] = useState(false);

  if (!deck) {
    return <Message type='error'>Invalid call: missing deck</Message>;
  }

  return (
    <Container>
      <MonoText size={25}>{deck.title}</MonoText>
      <MonoText size={20}>{deck.questions.length}</MonoText>
      <Button
        disabled={deck.questions.length === 0}
        onPress={() => navigation.navigate('Quiz', { id: deck.id })}
      >
        <MonoText color={Colors.light}>Start Quiz</MonoText>
      </Button>
      <Button
        onPress={() => navigation.navigate('AddQuestion', { id: deck.id })}
      >
        <MonoText color={Colors.light}>Add Question</MonoText>
      </Button>
      <Button
        onPress={() => {
          setShowQuestions(!showQuestions);
        }}
      >
        <MonoText color={Colors.light}>
          {showQuestions ? 'Hide Questions' : 'Show Questions'}
        </MonoText>
      </Button>
      {showQuestions && (
        <View style={{ flex: 1 }}>
          <MonoText>Question List</MonoText>
          <FlatList
            data={deck.questions}
            renderItem={({ item }) => {
              return (
                <StyledQuestionItem>
                  <MonoText style={{ flex: 5 }}>{item.question}</MonoText>
                  <MaterialCommunityIcons
                    onPress={() => console.log('delete question')}
                    name={'trash-can-outline'}
                    size={30}
                    style={{ marginBottom: -3 }}
                    color={'red'}
                  />
                </StyledQuestionItem>
              );
            }}
            keyExtractor={() => {
              return `${Math.random()}`;
            }}
          />
        </View>
      )}
    </Container>
  );
}

export default DeckScreen;
