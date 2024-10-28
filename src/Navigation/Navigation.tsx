import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Center from '../screens/Center';
import More from '../screens/More';
import {Image, View} from 'react-native';
type TabParamList = {
  Home: undefined;
  Center: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {color: '#000000', fontSize: 12},
          tabBarStyle: {
            height: 80,
            paddingBottom: 10,
            backgroundColor: '#ffffff',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({focused}) => (
              <Image source={require('../../assets/home.png')} />
            ),
          }}
        />

        <Tab.Screen
          name="Center"
          component={Center}
          options={{
            tabBarItemStyle: {
              marginTop: -20,
              height: 80,
              width: 80,
            },
            title: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  overflow: 'hidden',
                  height: 100,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  elevation: 5,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}>
                <Image source={require('../../assets/center.png')} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="More"
          component={More}
          options={{
            title: 'More',
            tabBarIcon: ({focused}) => (
              <Image source={require('../../assets/more.png')} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
