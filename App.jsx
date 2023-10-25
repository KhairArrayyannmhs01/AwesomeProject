import {Text, TouchableOpacity, View, ScrollView, TextInput, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import React from 'react';

const App = () => {
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
      source={require('./src/assets/Images/logomhs.png')}/>
        <View style={{height:40, width:40, borderRadius: 20, backgroundColor: 'yellow'}}>

        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red'
          }}></View>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi goreng</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.15000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red'
          }}></View>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi kuning</Text>
          <Text style={{marginTop: 4, fontSize: 14, marginHorizontal: 16, color: 'red'}}>Rp.10000</Text>
          </View>
          </View>
      
    </View>

    

  )
}

export default App
