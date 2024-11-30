import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import Textfield from '../components/Textfield'
import Btn from '../components/Btn';
import Style from '../Styles/Style'
const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const HandleLogin=async()=>{
    try {
      console.log('Email=>',Email,'Password=>',Password)
      const isUserSignin = await auth().signInWithEmailAndPassword(Email,Password)
      navigation.navigate('Tasks')
    } catch (err) {
      console.log(err);
    }
  };
  const login = ({navigation}) => {
    const handleOnpress=()=>{
      navigation.navigate('Tasks')
    }
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={Style.Background} />
      <View style={Style.Background2} />
      <Text style={Style.Text1log}>Welcome Back!</Text>
      <Text style={Style.Text2log}>let's help you meet your task</Text>
      <View style={Style.Imagelog} ><Image source={require('../assets/Image2.png')} /></View>
    <Textfield
    placeholder={'Enter your Email'}
    value={Email}
    onChangeText={value=>setEmail(value)}
    />
    <Textfield 
    placeholder={'Enter Your password'}
    value={Password}
    secureTextEntry={true}
    onChangeText={value=>setPassword(value)}
    />
    <TouchableOpacity
        onPress={() => navigation.navigate("/")}>
        <Text style={Style.Text2log}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={Style.ButtonRegView}>
      <Btn
      title={'Login'}
      style={Style.ButtonRegister}
      onPress={HandleLogin}
       />
      </View>
      <View style={Style.Viewlog}>
        <Text style={Style.Text3log}>
          Doesn't have an account?
          <TouchableOpacity
            style={Style.button2log}
            onPress={() => navigation.navigate('Register')}>
            <Text style={Style.Text4log}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  )
}
}
export default Login;