import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bottom_nav from '../Accessories/Nav/bottom';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const Message = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      {/* 顶部输入框 */}
      <View style={[styles.top]}>
        <View style={[styles.nav_container]}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name={'leftcircle'} size={30} color={'#fff'} />
          </View>
          <View style={[styles.inputBox]}>
            <TextInput
              placeholder="abibas"
              style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }}>
            </TextInput>
            <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
          </View>
          <TouchableWithoutFeedback>
            <FontAwesome name={'bell'} size={25} color={'#fff'} />
          </TouchableWithoutFeedback>
        </View>   
        <View style={{marginTop:15,height:50,width:'100%',borderRadius:15}}>
          <View>
          <TouchableWithoutFeedback>
            <View style={{flexDirection:"row"}}>
              <View>
              <AntDesign style={{ lineHeight: 35, marginLeft: 5 }} name={'like2'} size={15} color={'#6C6C6C'} />
              </View>
              <View>
              <AntDesign style={{ lineHeight: 35, marginLeft: 5 }} name={'message1'} size={15} color={'#6C6C6C'} />
              </View>
              <View>
              <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
              </View>
            </View>
          </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
{/* 中间的内容写在这里 */}

    {/* 底部颜色 */}
      <Bottom_nav />
    </View>
  )
}
export default Message;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    width: 250 * biLi,
    borderRadius: 20,
    padding: 0,
    height: 35 * biLi,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    height: (125) * biLi,
    width: "100%",
    backgroundColor: "#FFB16C",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 8,
    
  },
  nav_container: {
    backgroundColor:"red",
    height:30,
    marginTop: '6%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});