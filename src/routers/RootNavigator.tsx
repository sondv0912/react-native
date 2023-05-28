import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThetanBox from '../scenes/ThetanBox/ThetanBox.container';
import {icEvent, icMarket, icMenu} from '../assets/img';
import Navbar from '../components/Navbar';
import Menu from '../scenes/Menu/Menu.container';

const Tab = createBottomTabNavigator();

const TabMarketIcon = () => <Image source={icMarket} />;
const TabEventIcon = () => <Image source={icEvent} />;
const TabMenuIcon = () => <Image source={icMenu} />;
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
                name={'Home'}
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
      <Tab.Screen name="Menu" options={{tabBarIcon: TabMenuIcon}}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen
              name="Menu Screen"
              component={Menu}
              options={{headerShown: false}}
            />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default RootNavigator;
