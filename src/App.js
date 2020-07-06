import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';

function HomeScreen() {
  return (<Movies />);
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
    <Tab.Navigator initialRouteName="Filmes"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        labelStyle: {
          fontSize: 18,
        },
        style: {
          backgroundColor: 'black',
        },
      }}
    >
      <Tab.Screen name="Filmes" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screens" >
          <Stack.Screen name="Screens" component={Tabs}
            options={({ route }) => ({
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#2F95D6',
              },
              headerTitleStyle: {
                fontSize: 18,
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
              // headerTitle: getHeaderTitle(route)
            })}
          />
          <Stack.Screen name="MovieDetail" component={<MovieDetails />}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

function getHeaderTitle(route) {
  const { index } = route.state;
  if (index == 0) {
    return "Filmes";
  } else if (index == 1) {
    return "Series";
  }
}