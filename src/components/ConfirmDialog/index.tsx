import {Modal, Text, Pressable, View, DeviceEventEmitter} from 'react-native';
import React from 'react';
import styles from './styles';

const ConfirmDialog: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    const event = DeviceEventEmitter.addListener('showImage', location => {
      console.log('New location:', location);
      setModalVisible(true);
      setMessage(location.data);
    });
    return () => event.remove();
  }, []);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDialog;
