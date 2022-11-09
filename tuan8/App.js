import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
import Cau1 from './screens/Cau1';
import Cau2 from './screens/Cau2';
import Cau3 from './screens/Cau3';
const Tab = createBottomTabNavigator();
export default function App() {r
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Câu 1" component={Cau1} />
      <Tab.Screen name="Câu 2" component={Cau2} />
      <Tab.Screen name="Câu 3" component={Cau3} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
