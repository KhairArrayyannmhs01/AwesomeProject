import {Text, TouchableOpacity, View, ScrollView, TextInput, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#CB6B6B'}}>
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
        <Image resizeMode='contain' 
              style={{height: 30, width: 30, margin: 10, borderRadius: 12}}
              source={require('../assets/Images/menu.png')}/>

        </View>
        <Text style={{marginTop: 12, fontSize: 12, marginHorizontal: 16, color: '#000000'}}>
        Selamat Datang di
        </Text>
        <Text style={{marginTop: 4, fontSize: 32, marginHorizontal: 16, fontWeight: 'bold', color: '#000000'}}>
        Kantin Multistudi
        </Text>
        <Text style={{marginTop: 12, fontSize: 20, marginHorizontal: 16, marginBottom: -20, fontWeight: 'bold', color: '#000000'}}>
        Menu Makanan
        </Text>
        <View 
        style={{
          flexDirection: 'row'
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}
          style={{
            padding: 12,
            flex:1,
            marginTop:16
            }}>
              <Image resizeMode='contain' 
              style={{height: 180, width: 180, marginHorizontal: 16, borderRadius: 12}}
              source={require('../assets/Images/nasigorengpin.jpg')}/>
              <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi goreng</Text>
              <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, fontWeight:'bold', color: 'red'}}>Rp.15000</Text>
          </TouchableOpacity>
              <View style={{
                padding: 12,
                flex:1,
                marginTop:16
                }}>
                  <Image resizeMode='contain' 
                  style={{height: 180, width: 180, marginHorizontal: 16, borderRadius: 12}}
                  source={require('../assets/Images/nasikuningpin.jpg')}/>
                  <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi kuning</Text>
                  <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, fontWeight: 'bold', color: 'red'}}>Rp.10000</Text>
                  </View>
                  </View>
                
                <Text style={{marginTop: 12, fontSize: 20, marginHorizontal: 16, marginBottom: -20, fontWeight: 'bold', color: '#000000'}}>
                  Menu Minuman
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{
                      padding: 12,
                      flex:1,
                      marginTop:16
                      }}>
          <Image resizeMode='contain' 
          style={{height: 200, width: 180, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/tehobeng.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Teh obeng</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, fontWeight: 'bold', color: 'red'}}>Rp.5000</Text>
          </View>
          <View style={{
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <Image resizeMode='contain' 
          style={{height: 200, width: 180, marginHorizontal: 16, borderRadius: 12}}
          source={require('../assets/Images/tehtarikpin.jpg')}/>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Teh tarik</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, fontWeight: 'bold', color: 'red'}}>Rp.10000</Text>
          </View>
          </View>
      
    </View>

    

  );
};

export default Home;
