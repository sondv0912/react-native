import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils/utils';

const styles = StyleSheet.create({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: normalize(6),
    borderTopRightRadius: normalize(6),
    maxHeight: '80%',
  },
  modalHeader: {
    paddingVertical: 10,
    backgroundColor: '#271D61',
    height: normalize(56),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
  },
  modalTitle: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: 'white',
  },
  icClose: {
    width: normalize(14),
    height: normalize(14),
  },
  modalContent: {
    backgroundColor: '#1B1444',
  },
});

export default styles;
