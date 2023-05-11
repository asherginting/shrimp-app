import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../utils/colors';
import Card from '../components/Card';

const News = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <SafeAreaView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Kabar terbaru</Text>
        </View>
        <View>
          <Card
            img={require('../assets/images/testImage.png')}
            title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
            desc="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun..."
            date="30 April 2020"
          />
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
});
