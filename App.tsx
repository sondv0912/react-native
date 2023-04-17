/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import ThetanBox from './src/scenes/ThetanBox/ThetanBox.container';
import Navbar from './src/components/Navbar';
import Dashboard from './src/scenes/Dashboard/Dashboard.container';
import Header from './src/components/Header';
import {ReduxProvider} from './src/components/ReduxProvider';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <ReduxProvider>
        <Header />
        <Navbar />
        {/* <ThetanBox /> */}
        <Dashboard />
      </ReduxProvider>
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
