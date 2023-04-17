import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5336D0',
    paddingVertical: normalize(14),
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(18),
    lineHeight: normalize(24),
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
