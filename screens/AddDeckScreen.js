import React, {useState} from 'react';
import { MonoText } from '../components/StyledText';
import { useNavigation } from '@react-navigation/native';
import {Button, Input} from '../components/StyledControls';
import {Container} from '../components/StyledLayout'
import colors from '../constants/Colors'

export default function AddDeckScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState('')

  const add = () => {
    //TODO: add deck
    navigation.goBack()
    navigation.navigate('Deck')
  }

  return (
    <Container>
      <MonoText style={{paddingBottom: 10}}>Please name the new deck you wish to create.</MonoText>
      <Input value={value} onChangeText={setValue}></Input>
      <Button onPress={add}>
        <MonoText color={colors.light}>CREATE</MonoText>
      </Button>
    </Container>
  );
}
