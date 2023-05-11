/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ReduxProvider} from './src/components/ReduxProvider';
// import ConfirmDialog from './src/components/ConfirmDialog';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/routers/RootNavigator';
import HeroDetail from './src/scenes/HeroDetail/HeroDetail.container';
import {icBack} from './src/assets/img';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
        <ReduxProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name={'Home'}
                options={{headerShown: false}}
                component={RootNavigator}
              />
              <Stack.Screen
                name={'Hero Detail'}
                options={{
                  headerTitle: '',
                  headerBackImageSource: icBack,
                  headerStyle: {
                    backgroundColor: '#0F0933',
                  },
                }}
                component={HeroDetail}
              />
            </Stack.Navigator>
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
