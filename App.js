// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import 'react-native-gesture-handler';

import React, { Component, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import DuniaScreen from './pages/DuniaScreen';
import ChatScreen from './pages/ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false,
          headerStyle: { backgroundColor: '#0205a1e8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: '#0205a1e8' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Setting Page' }}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: '#0205a1e8' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Dunia" component={ChatScreen} options={{ title: 'Chat Page' }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}

function DuniaStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dunia"
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: '#0205a1e8' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Dunia" component={DuniaScreen} options={{ title: 'Dunia Page' }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#0205a1e8',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}  />
        <Tab.Screen
          name="DuniaStack"
          component={DuniaStack}
          options={{
            tabBarLabel: 'Dunia',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="earth" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{
            tabBarLabel: 'Konsultasi',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="whatsapp" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Pertanyaan',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="help-circle" color={color} size={size} />
            ),
          }} />
        
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;