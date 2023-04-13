import React from 'react';
import {View} from 'react-native';
type Props = {
  colorBg: string;
};
const Glow: React.FC<Props> = ({colorBg}) => {
  return <View style={{backgroundColor: colorBg, opacity: 0.7}} />;
};
export default Glow;
