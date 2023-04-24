import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';

const styles = StyleSheet.create({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flexDirection: 'row',
    gap: normalize(16),
  },
  content: {
    flexDirection: 'row',
    gap: normalize(8),
  },
  input: {
    width: normalize(64),
    height: normalize(32),
    borderRadius: normalize(6),
    color: 'white',
    backgroundColor: '#000',
    padding: 0,
    fontSize: normalize(14),
    textAlign: 'center',
  },
  totalPage: {
    color: 'white',
    fontSize: normalize(14),
  },
  btn: {
    width: normalize(32),
    height: normalize(32),
    borderRadius: normalize(6),
    backgroundColor: '#5336D0',
  },
  icArrow: {
    width: normalize(12.8),
    height: normalize(6.4),
  },
  icArrowRight: {
    transform: [{rotate: '180deg'}],
  },
});

export default styles;
