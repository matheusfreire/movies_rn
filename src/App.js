import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#e91e63'}} >
      <Tab.Screen name="Filmes" component={HomeScreen} />
      <Tab.Screen name="Series" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screens" >
            <Stack.Screen name="Screens" component={Tabs}
              options={({ route }) => ({ title: getHeaderTitle(route)})}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

function getHeaderTitle(route){
  const {index} = route.state;
  if(index == 0){
    return  "Filmes";
  } else if(index == 1){
    return  "Series";
  }
}