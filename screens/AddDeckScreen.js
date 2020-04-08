import React, { useState } from "react";
import { MonoText } from "../components/StyledText";
import { Button, Input } from "../components/StyledControls";
import { Container } from "../components/StyledLayout";
import colors from "../constants/Colors";
import { useAddDeck } from "../actions/decks";

export default function AddDeckScreen({ navigation }) {
  const [title, setTitle] = useState("");

  const addDeck = useAddDeck();

  async function add() {
    const id = `${Math.random().toString(36)}-${Math.random().toString(36)}`;
    addDeck(id, title).then(() => {
      setTitle("");
      navigation.goBack();
      navigation.navigate("Deck", { id });
    });
  }

  return (
    <Container>
      <MonoText style={{ paddingBottom: 10 }}>
        Please name the new deck you wish to create.
      </MonoText>
      <Input value={title} onChangeText={setTitle}></Input>
      <Button onPress={add}>
        <MonoText color={colors.light}>CREATE DECK</MonoText>
      </Button>
    </Container>
  );
}
