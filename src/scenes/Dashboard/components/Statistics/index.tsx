import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import OxaniumText from '../../../../components/OxaniumText';
import {
  icItemsTraded,
  icTotalListed,
  icTransactionVolume,
} from '../../../../assets/img';
import styles from './styles';
import {configTag} from './contanst';

const Statistics: React.FC = () => {
  const [idActive, setIdActive] = React.useState<number>(configTag[0].id ?? 0);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {configTag.map(item => (
          <TouchableOpacity key={item.id} onPress={() => setIdActive(item.id)}>
            <OxaniumText style={styles.tab}>{item.title}</OxaniumText>
            {idActive === item.id && <View style={styles.borderActive} />}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Image source={icTotalListed} style={styles.icon} />
          <View>
            <OxaniumText style={styles.title}>Total Listed</OxaniumText>
            <OxaniumText style={styles.value}>123</OxaniumText>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={icTransactionVolume} style={styles.icon} />
          <View>
            <OxaniumText style={styles.title}>
              Transaction Volume (THC)
            </OxaniumText>
            <OxaniumText style={styles.value}>123</OxaniumText>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={icItemsTraded} style={styles.icon} />
          <View>
            <OxaniumText style={styles.title}>Items Traded</OxaniumText>
            <OxaniumText style={styles.value}>123</OxaniumText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Statistics;
