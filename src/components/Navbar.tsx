import React from 'react';
import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../utils/utils';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StaskScene} from '../models';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const dataFake: {title: StaskScene; hot: boolean}[] = [
  {
    title: StaskScene.DASHBOARD,
    hot: false,
  },
  {
    title: StaskScene.THETANBOX,
    hot: true,
  },
  {
    title: StaskScene.BUY,
    hot: false,
  },
  {
    title: StaskScene.Rent,
    hot: false,
  },
];

const Navbar = () => {
  const [itemActive, setItemAction] = React.useState<string>(dataFake[0].title);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      {dataFake.map(item => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item.title);
            DeviceEventEmitter.emit('showImage', {data: `click ${item.title}`});
            setItemAction(item.title);
          }}
          key={item.title}>
          <View
            style={[styles.item, itemActive === item.title && styles.active]}>
            {item.hot && <View style={styles.hot} />}
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#271D61',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(8),
    gap: normalize(8),
  },
  item: {
    paddingHorizontal: normalize(18),
    height: normalize(32),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: normalize(4),
  },
  active: {
    backgroundColor: '#5336D0',
  },
  hot: {
    position: 'absolute',
    width: normalize(6),
    height: normalize(6),
    borderRadius: normalize(6),
    backgroundColor: '#10FF00',
    top: normalize(8),
    right: normalize(12),
  },
  text: {
    fontSize: normalize(16),
    color: 'white',
  },
});

export default Navbar;
