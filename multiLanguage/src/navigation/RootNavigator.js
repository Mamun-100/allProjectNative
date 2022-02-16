import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import Home from '../screens/Home'
import Setting from '../screens/Setting'
import Ionicons from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ tabBarLabel: t('navigate:home') }}
        />
        <Tab.Screen
          name='Setting'
          component={Setting}
          options={{ tabBarLabel: t('navigate:settings') }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default RootNavigator

const styles = StyleSheet.create({})