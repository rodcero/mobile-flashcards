import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { MonoText } from "../components/StyledText";
import { Button, Input } from "../components/StyledControls";
import { Container } from "../components/StyledLayout";
import { v4 } from "uuid";
import colors from "../constants/Colors";
import { useAddDeck } from "../actions/decks";

export default function AddDeckScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState("");

  const addDeck = useAddDeck();

  function add() {
    addDeck({ id: v4(), title: value, questions: [] }).then(() => setValue(""));
    navigation.goBack();
    navigation.navigate("Deck");
  }

  return (
    <Container>
      <MonoText style={{ paddingBottom: 10 }}>
        Please name the new deck you wish to create.
      </MonoText>
      <Input value={value} onChangeText={setValue}></Input>
      <Button onPress={add}>
        <MonoText color={colors.light}>CREATE</MonoText>
      </Button>
    </Container>
  );
}
