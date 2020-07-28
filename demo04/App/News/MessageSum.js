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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageDetails from '../navigation/MessageNavigation';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const MessageSum = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      {/* 顶部输入框 */}
      <View style={[styles.top]}>
        <View style={{ width: '100%', backgroundColor: "#fff", }}>
          <View style={[styles.nav_container]}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={'md-location-sharp'} size={30} color={'#000000'} />
              <Text style={{ lineHeight: 30, marginLeft: 10, color: "#000000", fontWeight: "bold" }}>杭州</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput
                placeholder="abibas"
                style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }}
              >
              </TextInput>
              <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
            </View>
            <AntDesign name={'calendar'} size={25} color={'#000000'} />
          </View>
        </View>


        <View style={{ height: '90%', width: '100%', borderBottomRightRadius: 20, borderBottomRightRadius: 20, }}>
          <MessageDetails />
        </View>
      </View>
    </View>
  )
}
export default MessageSum;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  inputBox: {
    backgroundColor: "#EFEFEF",
    width: 250 * biLi,
    borderRadius: 20,
    padding: 0,
    height: 35 * biLi,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    backgroundColor: "#00000000",
  },
  nav_container: {
    marginTop: '8%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});