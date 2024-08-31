import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './src/Login';
import Home from './src/Home';
import Search from './src/Search';
import GPS from './src/GPS';
import Store from './src/Store';

const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Oculta a barra de navegação
    NavigationBar.setVisibilityAsync('hidden');

    // Opcional: Retorna a visibilidade da barra de navegação ao desmontar o componente
    return () => {
      NavigationBar.setVisibilityAsync('visible');
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'gold',
            headerShown: false,
            tabBarInactiveTintColor: '#CCCCCC',
            tabBarStyle: {
              backgroundColor: '#1D1D1B',
              borderRadius: 20,
              height: 70,
              position: 'absolute',
              paddingTop: 5,
              paddingBottom: 10,
              bottom: 15,
              left: 10,
              right: 10,
              elevation: 5,
              borderTopColor: 'transparent',
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search-outline" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="GPS"
            component={GPS}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="location-outline" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Store"
            component={Store}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="storefront-outline" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      ) : (
        <Login navigation={{ navigate: () => setIsLoggedIn(true) }} />
      )}
    </NavigationContainer>
  );
}