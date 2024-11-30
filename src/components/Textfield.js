import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'
const Textfield = ({placeholder,secureTextEntry,value,onChangeText,style}) => {
  return (
    <View style={style}>
      <TextInput
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
        placeholder={placeholder}
        style={Styles.input1}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const Styles=StyleSheet.create({
    input1: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold'
      },
})

export default Textfield