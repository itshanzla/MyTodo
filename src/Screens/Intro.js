import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Btn from '../components/Btn';
import Style from '../Styles/Style'
const Intro = ({navigation}) => {
  const handleOnpress=()=>{
    navigation.navigate('Register')
  }
  return (
    <View style={{backgroundColor: '#E6E6E6', flex: 1}}>
      <View style={Style.Background} />
      <View style={Style.Background2} />
      <View style={Style.ImageIntro}>
      <Image source={require('../assets/Image1.png')}  />
      </View>
      <Text style={Style.TextIntro}>Get things done with Todo</Text>
      <Text style={Style.TexIntro}>Your Daily Driver</Text>
      <View style={Style.ButtonIntro}>
      <Btn
      onPress={handleOnpress} 
      title={'Get Started'} />
      </View> 
    </View>
  );
};
export default Intro;
