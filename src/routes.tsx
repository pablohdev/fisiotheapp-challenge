import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './pages/Main';
import Exercise from './pages/Exercise';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Exercise" component={Exercise} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
