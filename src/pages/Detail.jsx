import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const detail = () => {
  return (
    <View>
        <Image style={{
            height: 280, 
            width: 328, 
            marginHorizontal: 50, 
            alignContent: 'center',
            marginTop: 30,
            borderRadius: 12}}
        source={require('../assets/Images/nasigoreng.jpg')}/>
    <View>
      <Text style={{
        fontWeight:'bold',
        fontSize:16,
        marginHorizontal:45,
        color:'black'
      }}> Nasi goreng                              Rp.15000
      </Text>
      <Text style={{
        fontSize:12,
        marginHorizontal:45,
        color:'#A4A4A4'
      }}>
      Terbuat dari beras pilihan terbaik yang diolah
      menjadi nasi, Kemudian ditumis atau 
      digoreng hingga mateng.
      </Text>
      <View style={{
        borderWidth:1,
        borderColor: 'rgb(192,192,192)',
        marginTop:10
      }}>
      </View>

      <View>
        <TextInput style= {{
            height: 50,
            borderWidth:1,
            width:350,
            borderRadius:40,
            marginTop:20,
            alignItem:'center',
            marginHorizontal:40
        }} placeholder='Menu tambahan'>
        </TextInput>
      </View>

      <TouchableOpacity>
        <View style= {{
            borderWidth:1,
            height: 40,
            borderRadius:30,
            backgroundColor:'red',
            width:350,
            marginTop:20,
            alignItem:'center',
            marginHorizontal:40
        }} placeholder='Menu tambahan'>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    
  )
}

export default detail