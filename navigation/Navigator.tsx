import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  NewsOverview  from '../screens/NewsOverview';
import {  Text } from 'react-native';
import Saved from '../screens/Saved';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen
                  options={{ headerShown: false }}
                  name="HomeScreen"
                  component={HomeScreen} />
              <Stack.Screen
                  name="NewsOverview"
                  component={NewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}