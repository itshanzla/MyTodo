import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}></Modal>
    </View>
  )
}

export default Modal