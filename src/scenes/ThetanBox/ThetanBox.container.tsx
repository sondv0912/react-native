import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import GiftBox from './components/GiftBox';
import OxaniumText from '../../components/OxaniumText';
import {normalize} from '../../utils/utils';
import ListBox from './components/ListBox';

const ThetanBox: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <OxaniumText style={styles.title}>
          Thetan box contains various heroes with certain drop rates.{'\n'}The
          higher quality of the Thetan box is, the higher the drop rate for the
          high-quality Heroes is.
        </OxaniumText>
        <GiftBox />
        <ListBox />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0933',
    paddingVertical: normalize(12),
    flex: 1,
  },
  title: {
    color: '#CFCED6',
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(20),
    paddingHorizontal: normalize(20),
    marginBottom: normalize(16),
  },
});

export default ThetanBox;
