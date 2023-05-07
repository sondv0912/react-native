/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ThetanBox from './src/scenes/ThetanBox/ThetanBox.container';
import Navbar from './src/components/Navbar';
import Dashboard from './src/scenes/Dashboard/Dashboard.container';
import Header from './src/components/Header';
import {ReduxProvider} from './src/components/ReduxProvider';
// import ConfirmDialog from './src/components/ConfirmDialog';
import BuyTab from './src/scenes/BuyTab/BuyTab.container';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator;
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
        <ReduxProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name="First">
                {() => (
                  <SettingsStack.Navigator>
                    <SettingsStack.Screen
                      name="Dashboard"
                      component={Dashboard}
                    />
                  </SettingsStack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen name="Second">
                {() => (
                  <HomeStack.Navigator>
                    <HomeStack.Screen name="Thetan box" component={ThetanBox} />
                  </HomeStack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
            <Header />
            <Navbar />
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
