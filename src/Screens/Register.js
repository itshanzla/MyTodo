import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PixelRatio,
} from 'react-native';
import React, { useState } from 'react';
import Login from './Login';
import auth  from '@react-native-firebase/auth';
import Btn from '../components/Btn';
import Style from '../Styles/Style'
import Textfield from '../components/Textfield';
const Register = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');
  const [Message, setMessage] = useState('');

  const handleregister = async () => {
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(Email,Password)
      console.log(isUserCreated)
      navigation.navigate('Login')
    } catch (err) {
      console.log(err);
      setMessage(err.Message);
    }
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:60}} style={{backgroundColor: '#E6E6E6',}}>
      <View style={Style.Background} />
      <View style={Style.Background2} />
      <Text style={Style.Text1reg}>Welcome Onboard!</Text>
      <Text style={Style.Text2reg}>Let's help you meet your task</Text>
      {/* <TextInput placeholder="Enter your full name" style={Style.input1reg}
      value={Name}
      onChangeText={value=>setName(value)}
      />
      <TextInput 
        placeholder="Enter your Email" 
        style={Style.input1reg}
        value={Email} 
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry
        style={Style.input1reg}
        value={Password}
        onChangeText={value => setPassword(value)}
      />
      <TextInput placeholder="Confirm password" style={Style.input1reg}
      value={ConfirmPassword}
      secureTextEntry 
      onChangeText={value=> SetConfirmPassword(value)}
      /> */}
      <Textfield
      placeholder={'Enter Your Name'}
      value={Name}
      onChangeText={value=>setName(value)}/>
      <Textfield
      placeholder={'Enter Your Email'}
      onChangeText={value=>setEmail(value)}  />
      <Textfield
      placeholder={'Enter Your Password'} 
      onChangeText={value=>setPassword(value)} />
      <Textfield
      placeholder={'Comfirm Password'}  
      onChangeText={value=>SetConfirmPassword(value)}/>
      <View style={Style.ButtonRegView}>
      <Btn 
        title={'Register'}
        style={Style.ButtonRegister}
        onPress={handleregister}
        />
      </View>
      <View style={Style.Viewreg}>
        <Text style={Style.Text3reg}>
          Already have an account?
        <Text style={Style.Text4reg} onPress={() => navigation.navigate('Login')}>{" Sign in"}</Text>
        </Text>
      </View>
      <Text>{Message}</Text>
    </ScrollView>
  );
};
export default Register;
