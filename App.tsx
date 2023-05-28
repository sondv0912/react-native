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
import Profile from './src/scenes/Profile/Profile.container';
import {
  notificationLister,
  requestUserPermission,
} from './src/utils/pushnotification';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  React.useEffect(() => {
    requestUserPermission();
    notificationLister();
  }, []);
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
              <Stack.Screen
                name={'Profile'}
                options={{
                  headerBackImageSource: icBack,
                  headerTitleAlign: 'center',
                  headerTintColor: '#fff',
                  headerStyle: {
                    backgroundColor: '#5336D0',
                  },
                }}
                component={Profile}
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
