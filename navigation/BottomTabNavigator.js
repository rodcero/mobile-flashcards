import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddDeckScreen from '../screens/AddDeckScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Get Started',
          headerTitle: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='home' />
          ),
        }}
      />
      <BottomTab.Screen
        name='AddDeck'
        component={AddDeckScreen}
        options={{
          title: 'Create Deck',
          headerTitle: 'Create Deck',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='cards' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'AddDeck':
      return 'Create Deck';
  }
}
