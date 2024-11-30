import { StyleSheet, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Btn from "../components/Btn";


export default StyleSheet.create({
    Background: {
        backgroundColor: '#FF9162',
        width: '22%',
        height: '20%',
        borderTopEndRadius: 100 / 1.5,
        borderBottomEndRadius: 100 / 1.5,
      },
      Background2: {
        backgroundColor: '#FF9162',
        width: '37%',
        height: '12%',
        flexDirection: 'row',
        position: 'absolute',
        borderBottomEndRadius: 100 / 1.5,
      },
      ImageIntro: {
        width:'60%',
        height:'30%',
        justifyContent:'center',
        alignSelf:'center',
        left:20,
        marginLeft:10
      },
      TextIntro: {
        fontSize: 28,
        left: 13,
        top: 10,
        fontFamily: 'Roboto-Black',
      },
      TexIntro: {
        fontSize: 25,
        top: 20,
        alignSelf: 'center',
        fontFamily: 'Roboto-Light',
      },
      ButtonIntro:{
        position:'absolute',
        bottom:0,
      },
      ButtonRegView:{
        bottom:0,
        top:230, 
      },
      ButtonRegister:{
        alignSelf:'center',
        width:100,
      },

      ButtonLogin:{
        position:'absolute',
        bottom:0,
         top:30
      },
      Text1reg: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'PlaywriteNGModern-VariableFont_wght',
      },
      Text2reg: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
      },
      input1reg: {
        borderRadius: 20,
        backgroundColor: 'white',
        left: 0,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
      },
    //   button1reg: {
    //     backgroundColor: '#FAA885',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexDirection: 'row',
    //     width: '100%',
    //     height: 60,
    //     marginTop: 20,
    //     borderRadius: 100,
    //   },
      Texreg: {
        fontSize: 25,
        top: 20,
        alignItems: 'center',
      },
      Viewreg: {
        flex:1,
        justifyContent:'flex-end',
        alignSelf:'center',
      },
      Text4reg: {
        color: '#AD491E',
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        alignItems: 'center',
        marginTop: 30,
        justifyContent:'center',

        
      },
      Text3reg: {
        color: 'black',
        fontFamily: 'Roboto-MediumItalic',
      },
      button2reg: {
        paddingHorizontal: 10,
      },
      Text4log: {
        color: '#AD491E',
        fontFamily: 'Roboto-Bold',
      },
      Text1log: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'PlaywriteNGModern-VariableFont_wght',
      },
      Text2log: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
      },
      Text3log: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
      },
      Imagelog:{
        justifyContent:'center',
        alignItems:'center',
        left:30,
        marginTop:10
    },
      Text2log: {
        fontSize: 13,
        color: '#B83F0B',
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        marginTop:5
      },
      button1log: {
        backgroundColor: '#FAA885',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        marginTop: 20,
        borderRadius: 100,
      },
      button2log: {
        paddingHorizontal: 10,
      },
      Text3log: {
        color: 'black',
        fontFamily: 'Roboto-Medium',
      },
      Viewlog:{
        justifyContent:'center',
        alignItems:'center'
      },
      ContainerTasks: {
        flex: 1,
        backgroundColor: '#E6E6E6',
      },
      View1Tasks: {
        height:250,
        backgroundColor: '#CF7751',
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      Text1Tasks: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: 'white',
        top:20
      },
      Text2Tasks: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'white',
        justifyContent: 'flex-end',
        top: 20,
      },
      clockcontainerTasks: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:30,
        marginBottom:30
      },
      ImageTasks: {
        width: 80,
        height: 80,
        borderRadius: 40,
        top: 20,
      },
      ImagecontainerTasks: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      cardcontainerTasks: {
        width:'90%',
        alignSelf:'center',
        height:'50%',
        backgroundColor: 'white',
        borderRadius:60,
      },
      IconTasks: {
        fontSize: 80,
        justifyContent:'center',
        alignItems:'center',
        left:2
      },
      Icon2:{
        fontSize:30,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignSelf:'flex-end',
       bottom:80,
        color:'red',
        right:20
      },
      Detail:{
        
      },
      btn1:{

        bottom:0,
        flex:1
      },
      ModalView1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      ModalView2:{
        backgroundColor:'#ffffff',
        width:340,
        height:200,
        borderRadius:20,
        shadowColor:'black',
        elevation:5,
        
      },
      InputModal:{
        backgroundColor:'#edf2f4',
        // width:'100%',
        // height:'60%',
        borderRadius:20,
        marginBottom:60,
        padding:14,
        shadowColor:'black',
        elevation:10,
        // marginLeft:20,
        marginRight:40
      },
      ButtonSave:{
        backgroundColor:'#073b4c',
        width: '60%',
        height: 60,
        marginTop: 20,
        borderRadius: 50,
        justifyContent:'center',
        alignSelf:'center'
           },
      TextSave:{
        alignSelf:'center',
        color:'white',
        fontSize:24

      },
      Icon3:{
        fontSize:30,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignSelf:'flex-end',

      }
      
})