import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  Text,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MessageDetails from '../navigation/MessageNavigation';
import Bottom_nav from '../Accessories/Nav/bottom';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const MessageSum = ({ navigation }) => {
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
          <FontAwesome name={'bell'} size={25} color={'#fff'} />
        </View>
        <View style={{height: '100%', width: '100%'}}>
          <MessageDetails />
        </View>
      </View>
      <Bottom_nav />
    </View>
  )
}
export default MessageSum;
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
    flex:6,
    backgroundColor: "#FFB16C",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  nav_container: {
    height: 30,
    marginTop: '8%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});