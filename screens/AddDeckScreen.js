import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { MonoText } from '../components/StyledText';
import { Button, Input } from '../components/StyledControls';
import { Container } from '../components/StyledLayout';
import colors from '../constants/Colors';
import { useAddDeck } from '../actions/decks';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import glyphMap from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

const StyledIcons = styled.View`
  width: 60px;
  height: 60px;
  margin: 4px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
`;

const StyledGrid = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  flex-wrap: wrap;
`;

export default function AddDeckScreen({ navigation }) {
  const DEFAULT_ICON = 'cards-outline';
  const [title, setTitle] = useState('');
  const [iconSet, setIconSet] = useState([]);
  const [icon, setIcon] = useState(DEFAULT_ICON);

  const addDeck = useAddDeck();

  useEffect(() => {
    const glyphList = Object.keys(glyphMap);
    const iconSet = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * Math.floor(glyphList.length))
    ).map((randomInt) => glyphList[randomInt]);
    setIconSet(iconSet);
  }, []);

  async function add() {
    const id = `${Math.random().toString(36)}-${Math.random().toString(36)}`;
    addDeck(id, title, icon).then(() => {
      setTitle('');
      setIcon(DEFAULT_ICON);
      navigation.goBack();
      navigation.navigate('Deck', { id });
    });
  }

  return (
    <Container>
      <MonoText style={{ paddingBottom: 10 }}>
        1.Please name the new deck you wish to create.
      </MonoText>
      <Input value={title} onChangeText={setTitle}></Input>
      <MonoText style={{ paddingTop: 10 }}>2.Please select an icon</MonoText>
      <View style={{ padding: 10 }}>
        <StyledIcons>
          <MaterialCommunityIcons size={40} name={icon} />
        </StyledIcons>
        <MonoText>Selected Icon</MonoText>
      </View>
      <ScrollView>
        <StyledGrid>
          {iconSet.map((key) => (
            <StyledIcons key={key}>
              <TouchableOpacity onPress={() => setIcon(key)}>
                <MaterialCommunityIcons size={40} name={key} />
              </TouchableOpacity>
            </StyledIcons>
          ))}
        </StyledGrid>
      </ScrollView>
      <View style={{ height: 20 }}></View>
      <Button disabled={title === ''} onPress={add}>
        <MonoText color={colors.light}>CREATE DECK</MonoText>
      </Button>
    </Container>
  );
}
