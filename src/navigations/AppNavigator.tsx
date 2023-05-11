import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PriceList from '../screens/PriceList';
import News from '../screens/News';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1B77DF',
        tabBarInactiveTintColor: '#737373',
        tabBarIndicatorStyle: [
          {
            borderBottomWidth: 5,
            borderBottomColor: '#1B77DF',
          },
        ],
        tabBarItemStyle: [
          {
            height: 60,
          },
        ],
      }}>
      <Tab.Screen
        name="PriceList"
        component={PriceList}
        options={{
          title: 'Harga Udang',
          tabBarLabel: 'Harga Udang',
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Lato-Bold',
            textTransform: 'capitalize',
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          title: 'Kabar Udang',
          tabBarLabel: 'Kabar Udang',
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Lato-Bold',
            textTransform: 'capitalize',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const [headerHeight, setHeaderHeight] = useState(30);

  useLayoutEffect(() => {
    const dynamicHeaderHeight = window.height * 0.1 + insets.top;
    setHeaderHeight(dynamicHeaderHeight);
  }, [window, insets]);

  const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: '#1B77DF',
      height: insets.top,
    },
    header: {
      backgroundColor: '#1B77DF',
      height: headerHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Lato-Bold',
      textTransform: 'capitalize',
    },
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#1B77DF" />
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shrimp - Budidaya Udang</Text>
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;
