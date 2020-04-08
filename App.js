import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import ErrorBoundary from "./components/ErrorBoundary";
import DeckScreen from "./screens/DeckScreen";
import AddQuestionScreen from "./screens/AddQuestionScreen";
import QuizScreen from "./screens/QuizScreen";
import reducer from "./reducers";
import { setLocalNotification } from "./utils/notifications";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
        setLocalNotification();
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={createStore(reducer, applyMiddleware(logger))}>
        <ErrorBoundary>
          <View style={{ flex: 1 }}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <NavigationContainer ref={containerRef}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="Deck" component={DeckScreen} />
                <Stack.Screen
                  name="AddQuestion"
                  component={AddQuestionScreen}
                />
                <Stack.Screen name="Quiz" component={QuizScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </ErrorBoundary>
      </Provider>
    );
  }
}
