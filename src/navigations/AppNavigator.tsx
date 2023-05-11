import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import PriceList from '../screens/PriceList';
import News from '../screens/News';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    topBar: {
      paddingTop: insets.top,
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.topBar,
        tabBarActiveTintColor: '#1B77DF',
        tabBarInactiveTintColor: '#737373',
      }}>
      <Tab.Screen
        name="PriceList"
        component={PriceList}
        options={{
          title: 'Harga Udang',
          tabBarLabel: 'Harga Udang',
          tabBarLabelStyle: {fontSize: 16, textTransform: 'capitalize'},
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          title: 'Kabar Udang',
          tabBarLabel: 'Kabar Udang',
          tabBarLabelStyle: {fontSize: 16, textTransform: 'capitalize'},
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
