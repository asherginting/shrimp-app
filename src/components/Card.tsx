import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../utils/colors';

interface Cards {
  img: number;
  title: string;
  desc: string;
  date: string;
  onPress?: () => void;
}

const Card = ({img, title, desc, date, onPress}: Cards) => {
  return (
    <View style={styles.viewCard}>
      <Image source={img} style={styles.imgHeader} />
      <View style={styles.viewContent}>
        <Text style={styles.txtContent}>{title}</Text>
        <Text style={styles.txtDesc}>{desc}</Text>
        <View style={styles.viewBottom}>
          <Text style={styles.txtDate}>{date}</Text>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/images/share.png')}
              style={styles.iconShare}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
  viewContent: {
    marginHorizontal: 12,
    marginTop: 9,
  },
  txtContent: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    color: Colors.hardGray,
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
