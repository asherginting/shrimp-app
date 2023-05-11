import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Linking,
  Share,
} from 'react-native';
import Colors from '../utils/colors';
import Card from '../components/Card';

interface Datas {
  id: string;
  image: string;
  full_name: string;
  meta_description: string;
  created_at: string;
}

const Disease = () => {
  const [data, setData] = useState<Datas[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://app.jala.tech/api/diseases?per_page=15&page=1',
      {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzNGQ5Nzg0ZjZhNzRjNmFlZjI1ODRlNjI5YmRiNDk5ZDIzNTNiNjQ1ZGMzM2QxNWM1MzJlMWRmZGNkNTFjNDFhZDA3MTY2Y2M0MjcwZGFjIn0.eyJhdWQiOiIxIiwianRpIjoiYzM0ZDk3ODRmNmE3NGM2YWVmMjU4NGU2MjliZGI0OTlkMjM1M2I2NDVkYzMzZDE1YzUzMmUxZGZkY2Q1MWM0MWFkMDcxNjZjYzQyNzBkYWMiLCJpYXQiOjE2NzA0NzE1NTcsIm5iZiI6MTY3MDQ3MTU1NywiZXhwIjoxNzAyMDA3NTU3LCJzdWIiOiI3NyIsInNjb3BlcyI6W119.de53bq9RIwzpyfWGRK4LPLwdnkQXLZm19Q7o6mx9pBrsGYaOhjuw55F0qBbO6e5WVCrz3VOeAgb8zcVc4JYFpLmzFihFamT3Uf7EuDpXx7xpleYVb1n14zX9XrNg2Bum8irjxXqADgJDDnjb4Yvjh_EZYMfwRBk5gJjIZ7r7KiW3rz3kVbthaoRy6aayPP2rz_PXDeGAkF-SV4nwfZXRUT1_YWuTPRfy9KN8RsK1msqQre1qlKJE1IDFPi8DXrHP8oLuN0XHa9babTFPcCg9xO88YKq4a46IqVMsl-qEyqAukA5dxcC73cFuFo8IOjt2m0toIz1wdZdShz-3IAgOpqwi-7WTJjFRwrdazBMgrHTl0sNiI4U6ONoVaPGlmUxVYmdRbQ2QZckXFAN6o6mwAwB_zxQsEg_CJYgZbCxAcNj9yXYaqtHNchj_1HlcvbE7LXBffLKmJ9jrXFg-3STGypwt35wkZiyS8JkoHLhTg_C2Efad4_wMWuPhSCirrqfq6HszD5dCRDG69cl1IMY-kkShzagQEz2KybFVhoCbC1oImYgqTsp_w81W9-v5gb23Z38AY9GdCEKOPMpIEg1DMaYQaTe8x6_1nRxf_XjsSBRQN935Qr2AKIGir9uox0hx-1Ji7wH2TwEyclYuf_0uMVCEOBpi2aImo5neMmWBggs',
        },
      },
    );
    const json = await response.json();
    setData(json.data);
  };

  const openWebView = id => {
    Linking.openURL(`https://app.jala.tech/web_view/diseases/${id}`);
  };

  const shareLink = id => {
    const link = `https://app.jala.tech/diseases/${id}`;
    Share.share({message: link});
  };

  return (
    <SafeAreaView style={styles.bg}>
      <SafeAreaView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Daftar Penyakit</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card
              img={{uri: `https://app.jala.tech/storage/${item.image}`}}
              title={item.full_name}
              desc={item.meta_description}
              date={item.created_at}
              onPressDetail={() => openWebView(item.id)}
              onPressShare={() => shareLink(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.container}
        />
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
  container: {
    marginBottom: 50,
  },
});
