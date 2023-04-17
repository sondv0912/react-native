import React from 'react';
import {View} from 'react-native';
import OxaniumText from '../OxaniumText';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <OxaniumText style={styles.heading}>Market</OxaniumText>
    </View>
  );
};

export default Header;
