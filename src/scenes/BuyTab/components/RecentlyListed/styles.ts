import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils/utils';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(15),
    justifyContent: 'center',
    marginBottom: normalize(16),
  },
});

export default styles;
