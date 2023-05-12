import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/colors';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ModalSize: React.FC<ModalProps> = ({modalVisible, setModalVisible}) => {
  const onPress = value => {
    console.log(`Pressed: ${value}`);
  };

  const values = [];
  for (let i = 10; i <= 200; i += 10) {
    values.push(
      <TouchableOpacity key={i} onPress={() => onPress(i)}>
        <Text style={{marginBottom: 3, color: 'black'}}>{i}</Text>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: Colors.softGray,
              }}>
              <Text style={styles.txtSize}>Size</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalText}>Tutup</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, flexDirection: 'column'}}>
              {values}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 560,
    width: 370,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtSize: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: Colors.black,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: Colors.blue,
    marginBottom: 10,
  },
});

export default ModalSize;
