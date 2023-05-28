import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {normalize} from '../utils/utils';
import {StackScene} from '../models';
import {SceneMap, TabView} from 'react-native-tab-view';
import Dashboard from '../scenes/Dashboard/Dashboard.container';
import ThetanBox from '../scenes/ThetanBox/ThetanBox.container';

const dataFake: {title: StackScene; hot: boolean}[] = [
  {
    title: StackScene.DASHBOARD,
    hot: false,
  },
  {
    title: StackScene.THETANBOX,
    hot: true,
  },
  {
    title: StackScene.BUY,
    hot: false,
  },
  {
    title: StackScene.Rent,
    hot: false,
  },
];

const renderScene = SceneMap({
  Dashboard: Dashboard,
  ThetanBox: ThetanBox,
});

const Navbar = () => {
  // const [itemActive, setItemAction] = React.useState<string>(dataFake[0].title);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Dashboard', title: 'Dashboard'},
    {key: 'ThetanBox', title: 'ThetanBox'},
  ]);
  return (
    // <View style={styles.container}>
    //   <TabView
    //     navigationState={{index, routes}}
    //     renderScene={renderScene}
    //     onIndexChange={setIndex}
    //   />
    //   {/* {dataFake.map(item => (
    //     <TouchableOpacity
    //       onPress={() => {
    //         setItemAction(item.title);
    //       }}
    //       key={item.title}>
    //       <View
    //         style={[styles.item, itemActive === item.title && styles.active]}>
    //         {item.hot && <View style={styles.hot} />}
    //         <Text style={styles.text}>{item.title}</Text>
    //       </View>
    //     </TouchableOpacity>
    //   ))} */}
    // </View>
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
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
