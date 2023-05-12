import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../utils/colors';
import {API_URL} from '@env';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ModalLocation: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allData = [];

      for (let i = 1; i <= 15; i++) {
        const response = await fetch(
          `${API_URL}/api/shrimp_prices?per_page=15&page=${i}&with=region,creator&region_id=`,
        );
        const data = await response.json();
        const cities = data.data.map(item => item.region.name);
        allData.push(...cities);
      }

      setCities(allData);
    };

    fetchData();
  }, []);

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
              <Text style={styles.txtSize}>Kota/Kabupaten</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalText}>Tutup</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{maxHeight: 500}}
              showsVerticalScrollIndicator={false}>
              {cities.map((city, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(`City selected: ${city}`)}>
                  <Text
                    key={`${city}_${index}`}
                    style={{fontSize: 16, marginVertical: 5, marginBottom: 20}}>
                    {city}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
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

export default ModalLocation;
