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
  contentFilter: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    display: 'flex',
    gap: normalize(20),
    borderBottomColor: 'rgba(50, 34, 114, 1)',
    borderBottomWidth: normalize(3),
  },
  headingContentFilter: {
    color: 'white',
    lineHeight: normalize(24),
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  itemCheckBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(8),
  },
  titleCheckbox: {
    color: 'white',
    lineHeight: normalize(22),
    fontSize: normalize(14),
    fontWeight: '400',
  },
  btn: {
    width: '100%',
    paddingVertical: normalize(8),
    borderColor: 'rgba(50, 34, 114, 1)',
    borderWidth: normalize(3),
    borderRadius: normalize(6),
  },
  titleNoSelect: {
    color: 'white',
    lineHeight: normalize(22),
    fontSize: normalize(14),
    fontWeight: '400',
  },
  titleBtn: {
    color: 'white',
    lineHeight: normalize(24),
    fontSize: normalize(14),
    fontWeight: '600',
  },
  subModalContent: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(24),
  },
  itemImageCheck: {
    position: 'relative',
    width: normalize(85),
    height: normalize(85),
  },
  imageCheck: {
    width: normalize(85),
    height: normalize(85),
  },
  info: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    backgroundColor: 'rgba(39, 29, 97, 1)',
    left: 0,
    right: 0,
    paddingVertical: normalize(6),
  },
  nameImageCheck: {
    color: 'white',
    fontSize: normalize(11),
    lineHeight: normalize(14),
    fontWeight: 'bold',
  },
  btnCheckboxImage: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  contentReview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  listImageReview: {
    display: 'flex',
    flexDirection: 'row',
    gap: normalize(6),
  },
  imageReview: {
    width: normalize(32),
    height: normalize(32),
  },
});

export default styles;
