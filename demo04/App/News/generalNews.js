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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const Message = () => {
  return (
    
    <View style={[styles.container]}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent={true}></StatusBar>
      {/* 顶部输入框 */}
      <View style={[styles.top]}>
        <View style={[styles.nav_container]}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name={'map-marker'} size={30} color={'#fff'} />
            <Text style={{ lineHeight: 30, marginLeft: 10, color: "#fff", fontWeight: "bold" }}>杭州</Text>
          </View>
          <View style={[styles.inputBox]}>
            <TextInput
              placeholder="abibas"
              style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }}
            >
            </TextInput>
            <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Message');

            }}
          >
            <FontAwesome name={'bell'} size={25} color={'#fff'} />
          </TouchableWithoutFeedback>
        </View>
      </View>
  </View>
  )
}
export default Message;
const styles = StyleSheet.create({
  
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
  choice: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#484848",
  },
  userShopBox: {
    width: "100%",
    marginTop: 15 * biLi,
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
  },
  list: {
    width: "48%",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    height: 50,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  imgShowBox: {
    width: '100%',
    padding: 0,
  },
  imgShow: {
    height: 233 * biLi,
    width: '100%',
    marginTop: 20
  },
  mainBox: {
    width: "94%",
    marginLeft: "3%",
    height: "73%",
    marginTop: -20,
    borderRadius: 20,
  },
  firstBox: {
    width: "100%",
    marginTop: 45 * biLi,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
  },
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
    // position: "absolute",
    height: (90) * biLi,
    width: "100%",
    backgroundColor: "#FFB16C",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 8,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '5%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});