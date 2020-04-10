import React, { useState } from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';

import Message from '../components/Message';
import { MonoText } from '../components/StyledText';
import { Container } from '../components/StyledLayout';
import { Button } from '../components/StyledControls';
import Colors from '../constants/Colors';
import { useRemoveQuestion } from '../actions/questions';

const StyledQuestionItem = styled.View`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 3px;
  flex: 1;
  flex-direction: row;
`;

function DeckScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const { deck, questions } = useSelector(({ decks, questions }) => ({
    deck: decks[deckId],
    questions: questions[deckId] ? questions[deckId] : {},
  }));

  const questionList = Object.keys(questions).map((key) => questions[key]);
  const [showQuestions, setShowQuestions] = useState(false);
  const removeQuestion = useRemoveQuestion();

  if (!deck) {
    return <Message type='error'>Invalid call: missing deck</Message>;
  }

  return (
    <Container>
      {/* TODO: Create feature to Edit Deck title */}
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 5 }}>
          <MonoText size={25}>{deck.title}</MonoText>
          <MonoText size={20}>{questionList.length}</MonoText>
        </View>
        <MaterialCommunityIcons
          style={{ flex: 1 }}
          size={50}
          name={deck.icon}
        />
      </View>
      <Button
        disabled={questionList.length === 0}
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
            data={questionList}
            renderItem={({ item }) => {
              return (
                <StyledQuestionItem>
                  <MonoText style={{ flex: 5 }}>{item.question}</MonoText>
                  <MaterialCommunityIcons
                    onPress={() => removeQuestion(deck.id, item.id)}
                    name={'trash-can-outline'}
                    size={30}
                    color={'red'}
                  />
                </StyledQuestionItem>
              );
            }}
            keyExtractor={(item) => {
              return `${item.id}`;
            }}
          />
        </View>
      )}
    </Container>
  );
}

export default DeckScreen;
