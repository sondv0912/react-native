import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import OxaniumText from '../../../../components/OxaniumText';
import {icClose} from '../../../../assets/img';
import {Formik, FieldArray} from 'formik';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
};
const options = [
  {id: 1, value: 'Option 1'},
  {id: 2, value: 'Option 2'},
  {id: 3, value: 'Option 3'},
];
const ModalFilter: React.FC<Props> = ({modalVisible, toggleModal}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={toggleModal}
      style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <OxaniumText style={styles.modalTitle}>Filter</OxaniumText>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={icClose} style={styles.icClose} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.modalContent}>
          <Formik initialValues={{options: [1]}} onSubmit={() => {}}>
            {({values, setFieldValue}) => (
              <FieldArray name="options">
                {({push, remove}) => (
                  <>
                    {options.map(option => (
                      <View key={option.id}>
                        <CheckBox
                          value={values.options.includes(option.id)}
                          onValueChange={checked => {
                            if (checked) {
                              push(option.id);
                            } else {
                              const index = values.options.indexOf(option.id);
                              remove(index);
                            }
                          }}
                        />
                        <OxaniumText>{option.value}</OxaniumText>
                      </View>
                    ))}
                  </>
                )}
              </FieldArray>
            )}
          </Formik>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalFilter;
