import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';
import { Container } from '../components/StyledLayout';
import { Button } from '../components/StyledControls';
import colors from '../constants/Colors';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/notifications';
import Message from '../components/Message';

function QuizScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const { deck, questions } = useSelector(({ decks, questions }) => ({
    deck: decks[deckId],
    questions: questions[deckId],
  }));
  const questionList = Object.keys(questions).map((keys) => questions[keys]);

  if (!deck) {
    return <Message type='error'>Invalid call: missing deck.</Message>;
  }

  const [answered, setAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slide] = useState(new Animated.Value(0));

  const startFadeAnim = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  const startSlideAnim = () => {
    Animated.sequence([
      Animated.timing(slide, {
        toValue: 10,
        duration: 200,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 1,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  };

  React.useEffect(() => {
    fadeAnim.setValue(1);
  }, []);

  const onComplete = (correct) => {
    if (correct) setScore(score + 1);
    setQuestionIndex(questionIndex + 1);
    setAnswered(false);
  };

  const restart = () => {
    setAnswered(false);
    setQuestionIndex(0);
    setScore(0);
  };

  if (questionList.length === questionIndex) {
    clearLocalNotification().then(setLocalNotification);
    fadeAnim.setValue(0);
    startFadeAnim();
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={{ alignItems: 'center' }}>
            <MonoText size={25}>Deck: {deck.title}</MonoText>
            <MaterialCommunityIcons style={{}} size={50} name={deck.icon} />
          </View>
          <MonoText size={30} style={{ padding: 30 }}>
            Score: {score}/{questionList.length}(
            {Math.floor((score / questionList.length) * 100)}%)
          </MonoText>
          <Button onPress={restart}>
            <MonoText color={colors.light}>Restart</MonoText>
          </Button>
          <Button onPress={() => navigation.goBack()}>
            <MonoText color={colors.light}>Go Back</MonoText>
          </Button>
        </Animated.View>
      </Container>
    );
  }

  return (
    <Container>
      <Animated.View
        style={{
          transform: [
            {
              translateX: slide.interpolate({
                inputRange: [0, 10],
                outputRange: [0, 400],
              }),
            },
          ],
        }}
      >
        <MonoText size={20} style={{ marginBottom: 20 }}>
          {`${questionIndex + 1}/${questionList.length}`} Questions
        </MonoText>
        <Animated.View style={{ opacity: fadeAnim }}>
          {answered ? (
            <View>
              <MonoText size={20} style={{ paddingTop: 30, color: '#999' }}>
                ANSWER:
              </MonoText>
              <MonoText size={25} style={{ paddingTop: 20, paddingBottom: 30 }}>
                {questionList[questionIndex].answer}
              </MonoText>

              <Button
                onPress={() => {
                  onComplete(true);
                  startSlideAnim();
                }}
              >
                <MonoText color={colors.light}>CORRECT</MonoText>
              </Button>
              <Button
                onPress={() => {
                  onComplete(false);
                  startSlideAnim();
                }}
              >
                <MonoText color={colors.light}>INCORRECT</MonoText>
              </Button>
            </View>
          ) : (
            <View>
              <MonoText size={20} style={{ paddingTop: 30, color: '#999' }}>
                QUESTION:
              </MonoText>
              <MonoText size={25} style={{ paddingTop: 20, paddingBottom: 30 }}>
                {questionList[questionIndex].question}
              </MonoText>
              <Button
                onPress={() => {
                  setAnswered(true);
                  startFadeAnim();
                }}
              >
                <MonoText color={colors.light}>SHOW ANSWER</MonoText>
              </Button>
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Container>
  );
}

export default QuizScreen;
