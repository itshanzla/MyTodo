import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, Component} from 'react';
import Clock from '../components/Clock';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from '../Styles/Style';
import database from '@react-native-firebase/database';
import Textfield from '../components/Textfield';

const Tasks = ({navigation}) => {

  const [details, setdetails] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Style.ContainerTasks}>
      <View style={Style.View1Tasks}>
        <Image
          style={Style.ImageTasks}
          source={require('../assets/Profile.png')}
        />
        <Text style={Style.Text1Tasks}>Welcome Muhammad Hanzla</Text>
        <Text style={Style.Text2Tasks}>You can add your daily task here</Text>
      </View>

      <Clock />

      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          paddingBottom: 20,
          flexGrow:1
        }}>
        <View style={Style.cardcontainerTasks}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 60,
              borderWidth: 2,
              marginTop: 10,
            }}
            onPress={()=>setModalVisible(true)}>
            <Icon name="add" style={Style.IconTasks} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="delete" style={Style.Icon2} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      
      >
        <View style={Style.ModalView1}>
          <View style={Style.ModalView2}>
            <TextInput
            placeholder='Enter Your Tasks here:'
            placeholderTextColor={'black'}
            style={Style.InputModal}
            multiline={true}
            maxLength={240}
             />
             <TouchableOpacity style={Style.ButtonSave} >
              <Text style={Style.TextSave}>Save</Text>
             </TouchableOpacity>
          </View>
          <TouchableOpacity style={Style.ButtonIcon}>
            <Icon name="close" style={Style.Icon3} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default Tasks;
{
  /* <View style={Style.cardcontainerTasks}>
      <TouchableOpacity activeOpacity={1}
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={()=>navigation.navigate('Detail')}>
      <Icon name="add" style={Style.IconTasks} />
      </TouchableOpacity>
    <TouchableOpacity>
    <Icon name="delete" style={Style.Icon2} />
    </TouchableOpacity>
    </View> */
}

{
  /* <View style={Styles.Container}>
<View style={Styles.View1}>
  <View style={Styles.Imagecontainer}>
    <Image
      style={Styles.Image}
      source={require('../assets/Profile.png')}
    />
    <Text style={Styles.Text1}>Welcome Muhammad Hanzla</Text>
    <Text style={Styles.Text2}>You can add your daily task here</Text>
  </View>
</View>

<View style={Styles.clockcontainer}>
  <Clock />
</View>

<View style={Styles.FlatList}>
  <FlatList
    data={Tasks}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item}) => <TaskCard navigation={navigation} />}
  />
</View>
</View> */
}
// Background: {
//   backgroundColor: '#FF9162',
//   width: '20%',
//   height: '40%',
//   borderTopEndRadius: 100 / 2,
//   borderBottomEndRadius: 100 / 2,
// },
// Background2: {
//   backgroundColor: '#FF9162',
//   width: '20%',
//   height: '40%',
//   flexDirection: 'row',
//   position: 'absolute',
//   borderBottomEndRadius: 100 / 2,
// },
