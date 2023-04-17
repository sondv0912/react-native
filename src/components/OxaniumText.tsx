import * as React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

const oxaniumFont = {
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Light',
  '200': 'Light',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Regular',
  '600': 'Regular',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'ExtraBold',
};

const disableStyles: StyleProp<TextStyle> = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

type TextProps = Text['props'];

const OxaniumText: React.FC<TextProps> = props => {
  const {fontWeight = '400'} = StyleSheet.flatten(props.style || {});

  const fontFamily = `Oxanium-${oxaniumFont[fontWeight]}`;

  return <Text {...props} style={[props.style, {fontFamily}, disableStyles]} />;
};

export default OxaniumText;
