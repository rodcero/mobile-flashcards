import React, {useState} from 'react';
import { MonoText } from '../components/StyledText';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddDeckScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState("Deck Name Here")

  const add = () => {
    //TODO: add deck
    navigation.goBack()
    navigation.navigate('Deck')
  }

  return (
    <View>
      <MonoText>Please name the new deck you wish to create.</MonoText>
      <TextInput style={{height:40,borderWidth: 1}} value={value} onChangeText={setValue}></TextInput>
      <TouchableOpacity onPress={add}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

AddDeckScreen.navigationOptions = {
  headerTitle: 'Add Deck',
};
