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
import {API_URL} from '@env';

const PriceList = () => {
  const [modalSize, setModalSize] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);
  const [data, setData] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allData = [];

      for (let i = 1; i <= 15; i++) {
        const response = await fetch(
          `${API_URL}/api/shrimp_prices?per_page=15&page=${i}&with=region,creator&region_id=`,
        );
        const data = await response.json();
        allData.push(...data.data);
      }

      const urls = allData.map(
        price => `${API_URL}/storage/` + price.creator.avatar,
      );
      setAvatars(urls);
      setData(allData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({item, index}) => (
    <View style={styles.viewCard}>
      <View style={styles.viewItem}>
        <Image source={{uri: avatars[index]}} style={styles.img} />
        <View style={styles.viewTitle}>
          <Text style={styles.txtSupplier}>Supplier</Text>
          <Text style={styles.txtTitle}>{item.creator.name}</Text>
        </View>
        <View style={styles.viewVerif}>
          {item.creator.buyer ? (
            <>
              <View style={styles.verif}>
                <Image
                  source={require('../assets/images/star.png')}
                  style={styles.iconVerif}
                />
                <Text style={styles.txtVerif}>Terverifikasi</Text>
              </View>
            </>
          ) : (
            <View style={styles.notverif}>
              <Text style={styles.txtVerif}>Blm Terverifikasi</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.viewList}>
        <Text style={styles.txtDate}>
          {moment(item.date).format('DD MMMM YYYY')}
        </Text>
        <Text style={styles.txtKab}>{item.region.province_name}</Text>
        <Text style={styles.txtCity}>{item.region.name}</Text>
        <Text style={styles.txtSize}>Size 100</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.txtPrice}>
          IDR {item.size_100.toLocaleString('id-ID')}
        </Text>
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
        {isLoading ? (
          <Text style={{textAlign: 'center'}}>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
  },
  verif: {
    flexDirection: 'row',
    backgroundColor: Colors.orangLight,
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  notverif: {
    backgroundColor: Colors.softGray,
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  iconVerif: {
    height: 20,
    width: 20,
  },
  txtVerif: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: Colors.black,
    marginLeft: 5,
  },
  txtNotVerif: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: Colors.black,
    marginLeft: 5,
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
