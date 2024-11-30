import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from '../Styles/Style';
const Btn = ({onPress, title, style, contentContainerStyle}) => {
  return (
    <View >
      <TouchableOpacity style={[Styles.button,style]} activeOpacity={0.8} onPress={onPress}>
        <Text style={Styles.Text2}>{title}</Text>
      </TouchableOpacity>
      
    </View>
  );
};
const Styles = StyleSheet.create({
  Text2: {
    fontSize: 30,
    textAlign: 'justify',
    color: 'white',
    fontFamily: 'PlaywriteNGModern-Regular',
  },
  button: {
    backgroundColor: '#FAA885',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 300,
    height: 60,
    position: 'absolute',
    bottom: 130,
    left: 30,
    borderRadius: 100,
  },
});

export default Btn;
