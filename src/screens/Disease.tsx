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
import {API_URL, API_TOKEN} from '@env';

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
    const response = await fetch(`${API_URL}/api/diseases?per_page=15&page=1`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    const json = await response.json();
    setData(json.data);
  };

  const openWebView = id => {
    Linking.openURL(`${API_URL}/web_view/diseases/${id}`);
  };

  const shareLink = id => {
    const link = `${API_URL}/diseases/${id}`;
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
              img={{uri: `${API_URL}/storage/${item.image}`}}
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
