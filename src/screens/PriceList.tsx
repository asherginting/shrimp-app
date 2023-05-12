import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Colors from '../utils/colors';
import ModalSize from '../components/ModalSize';
import ModalLocation from '../components/ModalLocation';
import moment from 'moment';

const PriceList = () => {
  const [modalSize, setModalSize] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://app.jala.tech/api/shrimp_prices?per_page=15&page=${i}&with=region,creator&region_id=',
    )
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        console.log(data.data, 'DATA');
        const shrimpPrices = data.data;
        const avatars = shrimpPrices.map(
          price => 'https://app.jala.tech/storage/' + price.creator.avatar,
        );
        setData(shrimpPrices);
        console.log(avatars, 'AVATARS');
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = ({item, index}) => (
    <View style={styles.viewCard}>
      <View style={styles.viewItem}>
        <Image source={{uri: item.avatars}} style={styles.img} />
        <View style={styles.viewTitle}>
          <Text style={styles.txtSupplier}>Supplier</Text>
          <Text style={styles.txtTitle}>{item.supplier_name}</Text>
        </View>
        <View style={styles.viewVerif}>
          <Text style={styles.txtVerif}>
            {item.is_verified ? 'Terverifikasi' : ''}
          </Text>
        </View>
      </View>
      <View style={styles.viewList}>
        <Text style={styles.txtDate}>
          {moment(item.date).format('DD MMMM YYYY')}
        </Text>
        <Text style={styles.txtKab}>{item.region.district}</Text>
        <Text style={styles.txtCity}>{item.region.name}</Text>
        <Text style={styles.txtSize}>{item.size}</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.txtPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.btnDetail}>
          <Text style={styles.txtDetail}>LIHAT DETAIL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.viewTerbaru}>
        <Text style={styles.txtHarga}>Harga terbaru</Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <ModalSize modalVisible={modalSize} setModalVisible={setModalSize} />
      <ModalLocation
        modalVisible={modalLocation}
        setModalVisible={setModalLocation}
      />

      <View style={styles.viewBottom}>
        <TouchableOpacity
          style={styles.btnSize}
          onPress={() => setModalSize(true)}>
          <View style={styles.viewBiomas}>
            <Image
              source={require('../assets/images/biomass.png')}
              style={styles.iconLoc}
            />
            <View style={styles.viewColumn}>
              <Text style={styles.txtLoc}>Size</Text>
              <Text style={styles.txtLoc}>.......</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLoc}
          onPress={() => setModalLocation(true)}>
          <View style={styles.viewLoc}>
            <Image
              source={require('../assets/images/place.png')}
              style={styles.iconLoc}
            />
            <Text style={styles.txtLoc}>......</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PriceList;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewTerbaru: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  txtHarga: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: Colors.blue,
  },
  viewCard: {
    marginHorizontal: 20,
    borderWidth: 1,
    height: 200,
    borderColor: Colors.softGray,
    borderRadius: 5,
    marginTop: 8,
  },
  viewItem: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  viewTitle: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  txtSupplier: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: Colors.lightBlue,
    marginTop: 4,
  },
  txtTitle: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: Colors.hardGray,
    marginTop: 4,
  },
  viewVerif: {
    backgroundColor: '#fff8e7',
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 40,
  },
  txtVerif: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: Colors.black,
  },
  viewList: {
    marginHorizontal: 12,
  },
  txtDate: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: Colors.lightBlue,
    marginTop: 4,
  },
  txtKab: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: Colors.hardGray,
    marginTop: 4,
  },
  txtCity: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: Colors.hardGray,
    marginTop: 4,
  },
  txtSize: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: Colors.lightBlue,
    marginTop: 4,
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: Colors.hardGray,
  },
  btnDetail: {
    backgroundColor: Colors.blue,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txtDetail: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: Colors.white,
  },

  viewBottom: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnSize: {
    backgroundColor: Colors.darkBlue,
    height: 60,
    width: 180,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBiomas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewColumn: {
    flexDirection: 'column',
  },
  btnLoc: {
    backgroundColor: Colors.blue,
    height: 60,
    width: 180,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLoc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLoc: {
    width: 24,
    height: 35,
  },
  txtLoc: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: Colors.white,
    marginLeft: 10,
  },
});
