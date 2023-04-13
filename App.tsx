/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ThetanBox from './src/scenes/ThetanBox/ThetanBox.container';
import Navbar from './src/components/Navbar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navbar />
      <ThetanBox />
    </SafeAreaView>
  );
}

export default App;
