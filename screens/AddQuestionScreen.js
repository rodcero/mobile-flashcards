import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Input, Button } from "../components/StyledControls";
import { MonoText } from "../components/StyledText";
import {Container}from '../components/StyledLayout'
import colors from "../constants/Colors"

function AddQuestion(props) {
  const navigation = useNavigation();
  //TODO: form question & answer
  //TODO: sumit button, routes back and adds question
  const add = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <MonoText>Question:</MonoText>
      <Input></Input>
      <MonoText>Answer:</MonoText>
      <Input></Input>
      <Button onPress={add}>
        <MonoText color={colors.light}>ADD</MonoText>
      </Button>
    </Container>
  );
}

AddQuestion.propTypes = {};

export default AddQuestion;
