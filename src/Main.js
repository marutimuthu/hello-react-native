import * as React from 'react'
import 'react-native-gesture-handler'
import { PaperProvider, Provider, Portal, FAB } from 'react-native-paper'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from './components/DrawerContent'
import BottomNavigation from './components/BottomNavigation'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
  ProfileScreen,
  AuthLoadingScreen,
  NotificationsScreen,
  AddDeviceScreen
} from './screens'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function Main() {
  return (
    <Portal>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
          <Stack.Screen name="AddDeviceScreen" component={AddDeviceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Portal>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => <DrawerContent {...props}/>}
    >
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Add Device" component={AddDeviceScreen} />
    </Drawer.Navigator>
  )
}
