import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../utils/colors';

const PriceList = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.viewTerbaru}>
        <Text style={styles.txtHarga}>Harga terbaru</Text>
      </View>
      <View style={styles.viewCard}>
        <Text>TES</Text>
      </View>

      <View style={styles.viewBottom}>
        <TouchableOpacity style={styles.btnSize}>
          <View style={styles.viewBiomas}>
            <Image
              source={require('../assets/images/biomass.png')}
              style={styles.iconLoc}
            />
            <View style={styles.viewColumn}>
              <Text style={styles.txtLoc}>Size</Text>
              <Text style={styles.txtLoc}>100</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLoc}>
          <View style={styles.viewLoc}>
            <Image
              source={require('../assets/images/place.png')}
              style={styles.iconLoc}
            />
            <Text style={styles.txtLoc}>Indonesia</Text>
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
