import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../scenes/Dashboard/Dashboard.container';
import {StackScene} from '../models';
import ThetanBox from '../scenes/ThetanBox/ThetanBox.container';
import {icEvent, icMarket} from '../assets/img';
import Navbar from '../components/Navbar';

const Tab = createBottomTabNavigator();

const TabMarketIcon = () => <Image source={icMarket} />;
const TabEventIcon = () => <Image source={icEvent} />;
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#795CF5',
        tabBarStyle: {backgroundColor: '#0F0933'},
        headerStyle: {
          backgroundColor: '#5336D0',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Market" options={{tabBarIcon: TabMarketIcon}}>
        {() => (
          <>
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name={StackScene.DASHBOARD}
                options={{headerShown: false}}
                component={Navbar}
              />
            </SettingsStack.Navigator>
          </>
        )}
      </Tab.Screen>
      <Tab.Screen name="Event" options={{tabBarIcon: TabEventIcon}}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen
              name="Thetan Box"
              component={ThetanBox}
              options={{headerShown: false}}
            />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default RootNavigator;
