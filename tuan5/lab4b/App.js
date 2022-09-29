import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainComponent from './components/MainComponent'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainComponent" screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainComponent" component={MainComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}