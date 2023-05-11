import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../utils/colors';
import moment from 'moment';

interface Cards {
  img: any;
  title: string;
  desc: string;
  date: string;
  onPressShare?: () => void;
  onPressDetail?: () => void;
}

const Card = ({img, title, desc, date, onPressShare, onPressDetail}: Cards) => {
  return (
    <TouchableOpacity onPress={onPressDetail}>
      <View style={styles.viewCard}>
        <Image source={img} style={styles.imgHeader} />
        <View style={styles.viewContent}>
          <Text style={styles.txtContent}>{title}</Text>
          <Text style={styles.txtDesc} numberOfLines={2}>
            {desc}
          </Text>
          <View style={styles.viewBottom}>
            <Text style={styles.txtDate}>
              {moment(date).format('DD MMMM YYYY')}
            </Text>
            <TouchableOpacity onPress={onPressShare}>
              <Image
                source={require('../assets/images/share.png')}
                style={styles.iconShare}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  viewCard: {
    borderWidth: 1,
    height: 300,
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
