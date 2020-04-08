import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import { MonoText } from '../components/StyledText';
import { Container } from '../components/StyledLayout';
import { Button } from '../components/StyledControls';
import colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/notifications';
import Message from '../components/Message';

function QuizScreen({ navigation, route }) {
  const deckId = route?.params?.id;

  const deck = useSelector((state) => {
    return state[deckId];
  });

  if (!deck) {
    return <Message type='error'>Invalid call: missing deck.</Message>;
  }

  const total = deck.questions.length;
  const [answered, setAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slide] = useState(new Animated.Value(0));

  const startFadeAnim = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
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

  if (total === questionIndex) {
    clearLocalNotification().then(setLocalNotification);
    fadeAnim.setValue(0);
    startFadeAnim();
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <MonoText>
            Score: {score}/{total}
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
          {`${questionIndex + 1}/${total}`} Questions
        </MonoText>
        <Animated.View style={{ opacity: fadeAnim }}>
          {answered ? (
            <View>
              <MonoText>{deck.questions[questionIndex].answer}</MonoText>
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
              <MonoText>{deck.questions[questionIndex].question}</MonoText>
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

QuizScreen.propTypes = {};

export default QuizScreen;
