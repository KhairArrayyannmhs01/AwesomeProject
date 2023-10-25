import {Text, TouchableOpacity, View, ScrollView, TextInput, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import React from 'react';

const Home = () => {
  const onKlikTombol = () => {
    Alert.alert('Pinjam dulu seratus')
  }
  return (
    <View>
      <View style={{ borderWidth: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      height: 60,
      alignItems: 'center',
      backgroundColor: 'red',
      marginHorizontal: 16,
      marginTop: 16,
      padding: 16,
      borderRadius: 40
      }}>
    <Image resizeMode='contain' style={{height: 40, width: 150}}
    source={require('../assets/Images/logomhs.png')}/>
    <View style={{height:40, width:40, borderRadius: 20, backgroundColor: 'white'}}>

    </View>
    </View>
      <Text style={{marginTop: 12, fontSize: 12, marginHorizontal: 16, color: '#000000'}}>
        Selamat Datang di
      </Text>
      <Text style={{marginTop: 4, fontSize: 32, marginHorizontal: 16, color: '#000000'}}>
        Kantin Multistudi
      </Text>

      <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <Image resizeMode='contain' 
          style={{height: 140, width: 158, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/nasigoreng.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi goreng</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.15000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <Image resizeMode='contain' 
          style={{height: 140, width: 140, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/nasikuning.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi kuning</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.10000</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <Image resizeMode='contain' 
          style={{height: 140, width: 158, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/tehmanis.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Teh obeng</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.5000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <Image resizeMode='contain' 
          style={{height: 140, width: 140, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/tehtarik.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Teh tarik</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.10000</Text>
          </View>
          </View>
      
    </View>

    

  );
};

export default Home;
