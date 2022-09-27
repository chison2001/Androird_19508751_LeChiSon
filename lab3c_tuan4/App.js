import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './screen/Main'
import ChooseColor from './screen/ChooseColor'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ChooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
