import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/colors';

const News = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <SafeAreaView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Kabar terbaru</Text>
        </View>
        <View style={styles.viewCard}>
          <Image
            source={require('../assets/images/testImage.png')}
            style={styles.imgHeader}
          />
          <View style={styles.viewContent}>
            <Text style={styles.txtContent}>
              Baruno: Alat Kualitas Air Pintar Handal dan Praktis
            </Text>
            <Text style={styles.txtDesc}>
              Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu
              ketiga, memasuki tahun...
            </Text>
            <View style={styles.viewBottom}>
              <Text style={styles.txtDate}>30 April 2020</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/share.png')}
                  style={styles.iconShare}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewTitle: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  txtTitle: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: Colors.blue,
  },
  viewCard: {
    borderWidth: 1,
    height: 350,
    marginHorizontal: 20,
    marginTop: 15,
    borderColor: Colors.softGray,
    borderRadius: 5,
  },
  imgHeader: {
    height: '50%',
    width: '100%',
  },
  txtContent: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    color: Colors.hardGray,
  },
  viewContent: {
    marginHorizontal: 12,
    marginTop: 9,
  },
  txtDesc: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: Colors.gray,
    marginTop: 4,
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  txtDate: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: Colors.gray,
  },
  iconShare: {
    height: 24,
    width: 24,
    tintColor: Colors.black,
  },
});
