import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DuniaScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  
  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    const HEADER_MAX_HEIGHT = 200;
    const HEADER_MIN_HEIGHT = 60;
    // const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
    return (
      <View style={styles.scrollViewContent}>
        <View style={styles.row}>
          <View style={{flexDirection: 'column', marginLeft: '3%'}}>
            <Text>Keterangan :</Text>
            <Text style={{color: 'blue'}}>
              <MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> Kasus Baru
            </Text>
            <Text style={{color: 'orange'}}>
              <MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> Kasus Terkonfirmasi
            </Text>
          </View>

          <View style={{flexDirection: 'column', marginLeft: '3%'}}>
            <Text></Text>
            <Text style={{color: 'green'}}>
              <MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> Kasus Sembuh
            </Text>
            <Text style={{color: 'red'}}>
              <MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> Kasus Meninggal
            </Text>
          </View>
          
        </View>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Image source={require('../images/indonesia.gif')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
              <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>Indonesia</Text>
                <Text style={{color: 'blue'}}><MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> 1000</Text>
                <Text style={{color: 'orange'}}><MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> 1000</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}> </Text>
                <Text style={{color: 'green'}}><MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> 1000</Text>
                <Text style={{color: 'red'}}><MaterialCommunityIcons name="checkbox-blank-circle" size={12}/> 1000</Text>
              </View>
          </View>
        )}
      </View>
    );
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [200, 60],
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
          <Text style={styles.title}>Data COVID-19 Di Dunia</Text>
        </View>
        
        <Animated.Image
          style={[
            styles.backgroundImage,
            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
          ]}
          source={require('../images/bg.jpg')}
        />
        <Text style={{marginTop: 120, fontSize: 20, marginLeft: '25%', color: 'white'}}>Data COVID-19 Di Dunia</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0205a1e8',
    overflow: 'hidden',
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
    marginTop: 200,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 200,
    resizeMode: 'cover',
  },
});