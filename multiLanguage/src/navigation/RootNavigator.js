import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import About from '../screens/About';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ tabBarLabel: t('navigate:home') }}
        />
        <Tab.Screen name="About" component={About}
        options={{tabBarLabel: t('navigate:about')}}
        />
        <Tab.Screen
          name='Setting'
          component={Setting}
          options={{ tabBarLabel: t('navigate:settings') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
