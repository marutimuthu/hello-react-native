import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeIcon, ProfileIcon, NotificationsIcon } from '../assets/icons'
import { theme } from '../core/theme'

const Tab = createBottomTabNavigator()

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
  ProfileScreen,
  AuthLoadingScreen,
  NotificationsScreen,
  AddDeviceScreen,
} from '../screens'

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
            position: 'absolute',
            bottom: 25,
            left: 50,
            right: 50,
            elevation: 10,
            borderRadius: 15,
            height: 60,
            paddingTop: 20,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={theme.colors.secondary} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <NotificationsIcon fill={theme.colors.primary} />
          ),
          tabBarShowLabel: false,
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={theme.colors.primary} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}
