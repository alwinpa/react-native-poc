import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {CardStyleInterpolator} from '@react-navigation/stack';
import Home from './components/home';
import Result from './components/result';
import Filter from './components/filter';
import {CardStyleInterpolators} from 'react-navigation-stack';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Result"
          component={Result}
          options={(navigation) => ({
            headerBackTitleVisible: false,
            CardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          })}
          sharedElements={(route, otherRoute, showing) => {
            return ['searchBoxId'];
          }}
        />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
