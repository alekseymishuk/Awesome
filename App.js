import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/home';
import Login from './Screen/login';

const Tab = createBottomTabNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
});

export default App;
