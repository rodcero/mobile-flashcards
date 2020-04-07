import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { Input, Button } from "../components/StyledControls";
import { MonoText } from "../components/StyledText";
import {Container}from '../components/StyledLayout'
import colors from "../constants/Colors"

function AddQuestion(props) {
  //TODO: form question & answer
  //TODO: sumit button, routes back and adds question
  return (
    <Container>
      <MonoText>Question:</MonoText>
      <Input></Input>
      <MonoText>Answer:</MonoText>
      <Input></Input>
      <Button>
        <MonoText color={colors.light}>ADD</MonoText>
      </Button>
    </Container>
  );
}

AddQuestion.propTypes = {};

export default AddQuestion;
