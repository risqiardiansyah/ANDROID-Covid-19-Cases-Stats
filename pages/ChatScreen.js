// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = ({ route, navigation }) => {
  const date = new Date();
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('https://server.kodearsip.com/get/'+date.getDay()+'/'+date.getHours())
      // +date.getDay()+'/'+date.getHours()
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.log(error))
      }, []);
    if(data == ''){
      var kosong = <View style={styles.row}>
                    <View style={{flexDirection: 'column', marginLeft: '15%'}}>
                      <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
                        Shift Dokter Kosong Sekarang {'\n'}
                      </Text>
                      <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/6281133399000')}>
                        <Text style={{color: 'forestgreen'}}><MaterialCommunityIcons name="whatsapp" size={15}/> Chat bot</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
    }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
          height: 60,
          margin: 0,
          backgroundColor: 'forestgreen',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          borderWidth: 0.5,
          borderColor: 'grey'}}>
        <View style={{flexDirection: 'column', marginLeft: '3%'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Chat Dengan Dokter Via Whatsapp </Text> 
        </View>
      </View>

        {kosong}

      {data.map(item => 
        <View key={item.id} style={styles.row}>
          <Image source={require('../images/dok.jpg')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%', borderRadius: 80, resizeMode: 'contain'}} />
            <View style={{flexDirection: 'column', marginLeft: '3%'}}>
              <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
                {item.nama_dokter.substring(0, 20)}..
              </Text>
              <Text style={{color: 'forestgreen'}}><MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> Aktif Hari Ini Pukul {item.mulai}:00</Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: '3%'}}>
              <TouchableOpacity style={styles.headerButton} onPress={() => Linking.openURL('https://wa.me/'+item.nomor_dokter)}>
                <Text style={{color: 'forestgreen'}}><MaterialCommunityIcons name="whatsapp" size={15}/> Chat</Text>
              </TouchableOpacity>
            </View>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {
    height: 100,
    margin: 0,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  headerButton: {
    color: 'white',
    width: 75,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'forestgreen',
    textAlign: 'center',
    padding: 10,
    justifyContent: 'flex-end'
  },
});
export default ChatScreen;