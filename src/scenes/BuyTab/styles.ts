import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: normalize(3),
    marginBottom: normalize(12),
    paddingHorizontal: normalize(20),
    gap: normalize(10),
  },
  tab: {
    position: 'relative',
    paddingVertical: normalize(12),
    width: normalize(159),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(10),
  },
  space: {
    height: normalize(20),
    width: normalize(3),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: normalize(15),
  },
  tabTitle: {
    lineHeight: normalize(24),
    fontWeight: '600',
    fontSize: normalize(14),
    color: 'white',
  },
  borderActive: {
    position: 'absolute',
    height: normalize(4),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#795CF5',
  },
  groupBtn: {
    position: 'absolute',
    backgroundColor: '#5336D0',
    bottom: normalize(10),
    borderRadius: normalize(6),
    left: '50%',
    transform: [{translateX: normalize(-50)}],
  },
  btn: {
    width: normalize(100),
    height: normalize(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
