/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import ThetanBox from './src/scenes/ThetanBox/ThetanBox.container';
import Navbar from './src/components/Navbar';
import Dashboard from './src/scenes/Dashboard/Dashboard.container';
import Header from './src/components/Header';
import {ReduxProvider} from './src/components/ReduxProvider';
// import ConfirmDialog from './src/components/ConfirmDialog';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {icEvent, icMarket} from './src/assets/img';
import store from './src/redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const TabMarketIcon = () => <Image source={icMarket} />;
const TabEventIcon = () => <Image source={icEvent} />;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Provider store={store}>
        <ReduxProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#795CF5',
                tabBarStyle: {backgroundColor: '#0F0933'},
              }}>
              <Tab.Screen name="Market" options={{tabBarIcon: TabMarketIcon}}>
                {() => (
                  <>
                    <Navbar />
                    <SettingsStack.Navigator>
                      <SettingsStack.Screen
                        name="Dashboard"
                        options={{headerShown: false}}
                        component={Dashboard}
                      />
                      <SettingsStack.Screen
                        name="Thetanbox"
                        options={{headerShown: false}}
                        component={Dashboard}
                      />
                    </SettingsStack.Navigator>
                  </>
                )}
              </Tab.Screen>
              <Tab.Screen name="Event" options={{tabBarIcon: TabEventIcon}}>
                {() => (
                  <HomeStack.Navigator>
                    <HomeStack.Screen
                      name="Thetan box"
                      component={ThetanBox}
                      options={{headerShown: false}}
                    />
                  </HomeStack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
            {/* <ConfirmDialog /> */}
            {/* <ThetanBox /> */}
            {/* <Dashboard isLoading={false} /> */}
            {/* <BuyTab /> */}
          </NavigationContainer>
        </ReduxProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#0F0933',
    flex: 1,
  },
});

export default App;
