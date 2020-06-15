import React, {Component, useState, useEffect} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Separator() {
  return <View style={styles.separator}></View>
}



export default class DuniaScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      data: [],
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    fetch('https://api.kawalcorona.com/indonesia/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.log(error))
  }
  
  _renderScrollViewContent() {
    // const data = Array.from({length: 30});
    const win = Dimensions.get('window');
    const ratio = win.width/500;
    const {data} = this.state;
    
    return (
      <View style={styles.scrollViewContent}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Kasus Covid-19 di Dunia</Text>
        </View>
        {/* Kasus Di Dunia */}
        <View style={{flexDirection: 'row'}}>
          <View style={styles.box}>
            <Text style={{color:'green', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>1.000</Text>
            <Text style={{color:'green', fontSize: 15, fontWeight: 'bold'}}>Telah Sembuh</Text>
          </View>
          <View style={styles.box}>
            <Text style={{color:'yellow', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>1.000</Text>
            <Text style={{color:'yellow', fontSize: 15, fontWeight: 'bold'}}>Terkonfirmasi</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={styles.box}>
            <Text style={{color:'#17a2b8', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>1.000</Text>
            <Text style={{color:'#17a2b8', fontSize: 15, fontWeight: 'bold'}}>Kasus Baru</Text>
          </View>
          <View style={styles.box}>
            <Text style={{color:'maroon', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>1.000</Text>
            <Text style={{color:'maroon', fontSize: 15, fontWeight: 'bold'}}>Kasus Meninggal</Text>
          </View>
        </View>
        {/* END Kasus di Dunia */}
        
        <Separator />

        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', alignItems: 'center', color: 'black'}}>Kasus Covid-19 di {"\n"}Indonesia</Text>
        </View>
        {/* Kasus Di Indonesia */}
        {data.map(kasus => 
        <View style={{flexDirection: 'row'}}>
          <View style={styles.box}>
            <Text style={{color:'green', fontSize: 30, fontWeight: 'bold', marginTop: 20}}> {kasus.sembuh} </Text>
            <Text style={{color:'green', fontSize: 15, fontWeight: 'bold'}}>Telah Sembuh</Text>
          </View>
          <View style={styles.box}>
            <Text style={{color:'yellow', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>{kasus.dirawat}</Text>
            <Text style={{color:'yellow', fontSize: 15, fontWeight: 'bold'}}>Dirawat</Text>
          </View>
        </View>
        )}

        {data.map(kasus => 
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={styles.box}>
            <Text style={{color:'#17a2b8', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>{kasus.positif}</Text>
            <Text style={{color:'#17a2b8', fontSize: 15, fontWeight: 'bold'}}>Kasus Positif</Text>
          </View>
          <View style={styles.box}>
            <Text style={{color:'maroon', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>{kasus.meninggal}</Text>
            <Text style={{color:'maroon', fontSize: 15, fontWeight: 'bold'}}>Kasus Meninggal</Text>
          </View>
        </View>
        )}
        {/* END Kasus di Indonesia */}

        <View style={{alignItems: 'center', marginTop: 60, backgroundColor: 'white'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', alignItems: 'center', margin: '5%', color: 'black'}}>Tips Menjaga Kesehatan{'\n'}</Text>
        </View>

        {/* Tips */}
        <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
          <Image source={require('../images/medic-2.png')} style={{resizeMode: 'contain', width: win.width, height: 500 * ratio}} />
          <Text style={{fontSize: 30, fontWeight: 'bold', alignItems: 'center', color:'#010483'}}>Tak Perlu Panik, Mari Cegah Penularan COVID-19</Text>
          <Separator />
          
          <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Tetap Dirumah</Text>
          <Text style={{fontSize: 20, fontWeight: 'normal', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Dengan Kamu Tetap Dirumah, Kamu Membantu Untuk Tidak Menularkan Virus atau Terkena Virus Ini {'\n'}</Text>

          <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Jaga Jarak(Social Distancing)</Text>
          <Text style={{fontSize: 20, fontWeight: 'normal', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Jaga Jarak Minimal 1 Meter Dari Orang Lain. {'\n'} </Text>

          <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Cuci Tangan</Text>
          <Text style={{fontSize: 20, fontWeight: 'normal', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Cuci Tangan Dengan Sabun atau Hand Sanitiser {'\n'} </Text>

          <Text style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Tutup Mulut dan Hidung</Text>
          <Text style={{fontSize: 20, fontWeight: 'normal', alignItems: 'center', fontFamily: 'sans-serif', marginRight: '5%', marginLeft: '5%', color: 'black'}}>Tutup Mulut dan Hidung Dengan Kain atau Kenakan Masker Bila Batuk atau Bersin, Untuk Mencegah Penularan. {'\n'} </Text>
        
        </View>
        {/* End Tips */}

      </View>
      // <View style={styles.scrollViewContent}>
      //   {data.map((_, i) =>
      //     <View key={i} style={styles.row}>
      //       <Text>{i}</Text>
      //     </View>
      //   )}
      // </View>
    );
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [370, 60],
      extrapolate: 'clamp',
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 160 / 2, 160],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 160],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.fill}>
        <ScrollView style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}], {useNativeDriver: false}
          )} >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <View style={styles.bar}>
            <Animated.Text style={styles.title}>Data COVID-19 Di Dunia</Animated.Text>
          </View>
          <Animated.Image
            style={[
              styles.backgroundImage,
              {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
            ]}
            source={require('../images/medic.png')}
          />
          {/* <Button style={styles.headerButton} title="Tips Menjaga Diri" ></Button> */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={styles.headerButton}>
                <MaterialCommunityIcons name="shield-account" size={20}/> Tips Menjaga Diri
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 7}}
          onPress={() => this.props.navigation.navigate('ChatStack')}>
              <Text style={styles.headerButton}>
              <MaterialCommunityIcons name="whatsapp" size={20}/> Chat Dengan Dokter
              </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // new
  box: {
    width: '40%', height: '100%', backgroundColor: 'white', margin: '5%', alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomRightRadius: 25
  },
  // old
  fill: {
    flex: 1,
  },
  row: {
    height: 90,
    margin: 16,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0205a1e8',
    overflow: 'hidden',
    borderBottomRightRadius: 50,
  },
  bar: {
    marginTop: 15,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: 380,
  },
  backgroundImage: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 200,
    resizeMode: 'center',
  },
  headerButton: {
    backgroundColor: '#1acc8d',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    // fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  20,
    // marginTop: '70%'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 50
  },
});