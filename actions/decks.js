import { AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";

export const ADD_DECK = "ADD_DECK";

const _addDeck = (deck) => ({
  type: ADD_DECK,
  deck,
});

export function useAddDeck() {
  const dispatch = useDispatch();
  return (deck) => {
    // dispatch(showLoading());
    return AsyncStorage.setItem(deck.id, JSON.stringify(deck)).then(() => {
      dispatch(_addDeck(deck));
      // dispatch(hideLoading());
    });
  };
}
