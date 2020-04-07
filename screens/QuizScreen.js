import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { MonoText } from "../components/StyledText";
import { Container } from "../components/StyledLayout";
import { Button } from "../components/StyledControls";
import colors from "../constants/Colors";

function QuizScreen(props) {
  const [answered, setAnswered] = useState(false);

  {/* TODO: when last question is answered display score */}
      {/* TODO: score screen gives option to 'restart quiz' over or go back to the deckScreen 'Back to Deck' */}

  return (
    <Container>
      <MonoText size={20} style={{marginBottom:20}}>1/30 Questions</MonoText>
      {answered ? (
        <View>
          <MonoText>Answered</MonoText>
          <Button>
            <MonoText color={colors.light}>CORRECT</MonoText>
          </Button>
          <Button>
            <MonoText color={colors.light}>INCORRECT</MonoText>
          </Button>
        </View>
      ) : (
        <View>
          <MonoText>What are props used for?</MonoText>
          <Button onPress={() => setAnswered(true)}>
            <MonoText color={colors.light}>SHOW ANSWER</MonoText>
          </Button>
        </View>
      )}
      
    </Container>
  );
}

QuizScreen.propTypes = {};

export default QuizScreen;
