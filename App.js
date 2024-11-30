
import React from 'react'
import Intro from './src/Screens/Intro'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Tasks from './src/Screens/Tasks';
import TaskCard from './src/components/TaskCard';
import Modal from './src/components/Modal';
const Stack= createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Tasks'>
        <Stack.Screen  name='Intro'  component={Intro} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Tasks' component={Tasks} />
        <Stack.Screen name='TaskCard' component={TaskCard} />
        <Stack.Screen name='Modal' component={Modal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App