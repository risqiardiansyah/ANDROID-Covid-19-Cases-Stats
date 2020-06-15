import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

// const data = Array.from({length: 5});

class SettingsScreen extends Component {
   state = {
      modalVisible: false,
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      modalVisible4: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   toggleModal1(visible) {
      this.setState({ modalVisible1: visible });
   }
   toggleModal2(visible) {
    this.setState({ modalVisible2: visible });
  }
  toggleModal3(visible) {
    this.setState({ modalVisible3: visible });
  }
  toggleModal4(visible) {
    this.setState({ modalVisible4: visible });
  }
   render() {
      return (
        <View >
          {/* Head */}
          <View style={{
              height: 60,
              margin: 0,
              backgroundColor: '#0205a1e8',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              borderWidth: 0.5,
              borderColor: 'grey'}}>
            <View style={{flexDirection: 'column', marginLeft: '3%'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Beberapa Pertanyaan Terkait </Text> 
            </View>
          </View>
          {/* End Head */}
          
          <ScrollView>
            {/* 1 */}
            <View style={styles.row}>
              <Image source={require('../images/q.png')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
                <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                  <Text style={{fontSize: 19, fontWeight: 'bold', color: '#3f2949', marginRight: 80}}>
                  Apa Sebenarnya COVID-19 ??
                  </Text>
                </TouchableHighlight>
                </View>
            </View>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>
                    COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 adalah singkatan dari CoronaVirus Disease-2019.
                  </Text>
                  
                  <TouchableHighlight style={styles.button} onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     <Text style = {{color: '#0205a1e8', marginTop: 7}}> Tutup</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            {/* End 1 */}

            {/* 2 */}
            <View style={styles.row}>
              <Image source={require('../images/q.png')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
                <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <TouchableHighlight onPress = {() => {this.toggleModal1(true)}}>
                  <Text style={{fontSize: 19, fontWeight: 'bold', color: '#3f2949', marginRight: 80}}>
                  Siapa saja yang Berisiko Terinfeksi COVID-19 ??
                  </Text>
                </TouchableHighlight>
                </View>
            </View>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible1}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>
                  Pertama, orang yang mungkin terinfeksi Covid- 19 adalah orang yang bertempat atau berpergian ke wilayah yang sudah positif Covid- 19.
                  {'\n'}{'\n'}
                  Kedua, yaitu orang-orang yang dalam 14 hari sebelum memiliki gejala melakukan perjalanan dari negara terjangkit, atau kontak erat dengan anggota keluarga dan rekan kerja yang sudah terinfeksi COVID-19.
                  {'\n'}{'\n'}
                  Ketiga, Petugas kesehatan yang merawat pasien positif terinfeksi COVID-19.
                  {'\n'}{'\n'}
                  Keempat, Mereka yang memiliki siatem imun pada tubuhnya rendah. Diantaranya ada manula, anak- anak, manula yang menderita hipertensi, diabetes dan penyakit gangguan sistem pernapasan.
                  </Text>
                  
                  <TouchableHighlight style={styles.button} onPress = {() => {
                     this.toggleModal1(!this.state.modalVisible1)}}>
                     <Text style = {{color: '#0205a1e8', marginTop: 7}}> Tutup</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            {/* End 2 */}

            {/* 3 */}
            <View style={styles.row}>
              <Image source={require('../images/q.png')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
                <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <TouchableHighlight onPress = {() => {this.toggleModal2(true)}}>
                  <Text style={{fontSize: 19, fontWeight: 'bold', color: '#3f2949', marginRight: 80}}>
                  Apakah COVID-19 dapat melekat pada benda mati ??
                  </Text>
                </TouchableHighlight>
                </View>
            </View>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible2}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>
                  COVID-19 dapat menempel pada benda mati selama beberapa jam atau bisa beberapa hari. COVID-19 mampu bertahan atau menempel pada suatu benda dipengaruhi oleh beberapa faktor seperti suhu, kelembapan, dan jenis permukaan.
                  </Text>
                  
                  <TouchableHighlight style={styles.button} onPress = {() => {
                     this.toggleModal2(!this.state.modalVisible2)}}>
                     <Text style = {{color: '#0205a1e8', marginTop: 7}}> Tutup</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            {/* End 3 */}

            {/* 4 */}
            <View style={styles.row}>
              <Image source={require('../images/q.png')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
                <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <TouchableHighlight onPress = {() => {this.toggleModal3(true)}}>
                  <Text style={{fontSize: 19, fontWeight: 'bold', color: '#3f2949', marginRight: 80}}>
                  Apa Saja Gejala COVID-19 ??
                  </Text>
                </TouchableHighlight>
                </View>
            </View>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible3}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>
                    Gejala COVID-19 yang umum adalah demam, rasa lelah dan batuk kering. Ada juga yang mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit tenggorokan atau diare. Ada juga yang tidak merasakan apa-apa, seperti orang sehat.
                    {'\n'}{'\n'}
                    Jika kamu pernah berdekatan dengan orang yang memilliki gejala COVID-19 atau berpergian ke tempat terjangkiti, laporkan ke puskesmas terdekat dan lakukan monitoring mandiri. Bila dalam 1-14 hari kemudian mengalami gejala, lakukan isolasi diri.
                    {'\n'}{'\n'}
                    Karena orang yang merasa sehat pun bisa saja sedang kena COVID-19, kita semua harus tinggal di rumah.
                    {'\n'}{'\n'}
                    Bekerja, belajar dan beribadah di rumah.
                    {'\n'}{'\n'}
                    Kenapa? Untuk mencegah penyebaran COVID-19 lebih luas.
                    {'\n'}{'\n'}
                    Dari rumah, kamu bisa hubungi 119 untuk bantuan lebih lanjut.
                    {'\n'}{'\n'}
                    Kalau kondisi memburuk, seperti sesak napas, kontak Rumah Sakit rujukan dan segera periksakan diri.
                  </Text>
                  
                  <TouchableHighlight style={styles.button} onPress = {() => {
                     this.toggleModal3(!this.state.modalVisible3)}}>
                     <Text style = {{color: '#0205a1e8', marginTop: 7}}> Tutup</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            {/* End 4 */}

            {/* 5 */}
            <View style={styles.row}>
              <Image source={require('../images/q.png')} style={{width: '15%', height: '50%', flexDirection: 'row', marginLeft: '3%'}} />
                <View style={{flexDirection: 'column', marginLeft: '3%'}}>
                <TouchableHighlight onPress = {() => {this.toggleModal4(true)}}>
                  <Text style={{fontSize: 19, fontWeight: 'bold', color: '#3f2949', marginRight: 80}}>
                  Apa yang dimaksud dengan Rapid Test atau Tes Cepat COVID-19 ??
                  </Text>
                </TouchableHighlight>
                </View>
            </View>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible4}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>
                    Rapid Test atau tes cepat COVID-19 bertujuan untuk mendeteksi kasus secara dini sehingga pemerintah dapat menyusun dan melakukan tindakan yang tepat untuk menghentikan penyebaran virus corona.
                    {'\n'}{'\n'}
                    Tidak semua orang perlu mengikuti Rapid Test atau tes cepat. Hanya mereka yang direkomendasikan oleh petugas kesehatan yang perlu menjalaninya.
                  </Text>
                  
                  <TouchableHighlight style={styles.button} onPress = {() => {
                     this.toggleModal4(!this.state.modalVisible4)}}>
                     <Text style = {{color: '#0205a1e8', marginTop: 7}}> Tutup</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            {/* End 5 */}

          </ScrollView>
        </View>
      )
   }
}
export default SettingsScreen

const styles = StyleSheet.create ({
  container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100
  },
  row: {
    height: 70,
    margin: 0,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  modal: {
    marginTop: '17%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text: {
    color: '#3f2949',
    marginTop: 7,
  },
  button: {
    marginTop: 20,
    alignContent: 'center',
    alignItems: "center",
    borderColor: '#0205a1e8',
    borderWidth: 2,
    width: 80,
    height: 40,
    borderRadius: 25,
    textAlign: 'center',
  },
})