import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Colors from '../utils/colors';
import Card from '../components/Card';

const Disease = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <SafeAreaView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Daftar Penyakit</Text>
        </View>
        <View>
          <Card
            img={require('../assets/images/testImage.png')}
            title="Black Spot Disease (Bintik Hitam)"
            desc="Tampak fisik pada udang ialah karapas berwarna kecoklatan dan adanya bercak hitam pada karapa..."
            date="30 April 2020"
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Disease;

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
