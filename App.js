/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ** routers
// import * as routers from './src/routers';

// ** components
import Home from './src/views/Home/index';
import Dashboard from './src/views/Dashboard';
import Multiselector from './src/views/Multiselector';

const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen  name="Home" component={Home} />
       <Stack.Screen  name="Dashboard" component={Dashboard} />
       <Stack.Screen  name="Multiselector" component={Multiselector} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
