import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
// const Message = ({ navigation }) => {
  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={[{ height: 20, width: 20, backgroundColor: "red", borderRadius: 20, }, style]}></View>
    </TouchableOpacity>
  );
  
export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateFlag: 1,
      BmessageWidth: '94%',
      BmessageMarginLeft: '3%',
      choiceColor: "#FAAF3D",
      selectedId:null,
    }
  }

   renderItem = ({ item }) => {
    // 前面的是选中状态。后面的是未选中状态
    const backgroundColor = item.id === selectedId ? "#FAAF3D" : "#FFFFFF";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };


  render() {
    return (
      <View style={[styles.container]}>
        {/* 顶部输入框 */}
        {/* flatlist渲染层从这开始 */}
        <View style={{ paddingTop: 0, height: '100%', paddingBottom: 10 }}>
          <FlatList
            data={[
              { name: 'JK&妹' },
              { name: 'JK&妹' },
              { name: 'JK&妹' },
            ]}
            renderItem={({ item }) =>
              <TouchableNativeFeedback
                onLongPress={() => {
                  if (this.state.stateFlag == 1) {
                    this.setState(
                      {
                        stateFlag: 0,
                        BmessageWidth: '85%',
                        BmessageMarginLeft: '12%',
                      })
                  } else {
                    this.setState(
                      {
                        stateFlag: 1,
                        BmessageWidth: '94%',
                        BmessageMarginLeft: '3%',
                      })
                  }
                }}
              >
                <View style={{ justifyContent: "center", }}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      if (this.state.choiceColor = "#FAAF3D") {
                        this.setState({
                          choiceColor: "#fff"
                        })
                      } else {
                        this.setState({
                          choiceColor: "#FAAF3D"
                        })
                      }
                    }}
                  >
                    <View style={{ width: 15, backgroundColor: this.state.choiceColor, borderWidth: 1, borderColor: "#fff", height: 15, borderRadius: 100, display: "flex", position: "absolute", left: '5%', top: "50%" }}
                    ></View></TouchableNativeFeedback>
                  <View style={{ width: this.state.BmessageWidth, marginLeft: this.state.BmessageMarginLeft, backgroundColor: "#ffffff", borderRadius: 500, marginTop: 15, }}>
                    {/* 第一行用户信息框 */}
                    <View style={{ padding: 10, flexDirection: "row" }}>
                      <Image style={{ height: 45, width: 45, borderRadius: 30 }} source={require('../img/a.png')} />
                      {/* 用户信息 */}
                      <View style={{ flexDirection: "column", marginLeft: 10, justifyContent: "space-between", width: '65%' }}>
                        <Text style={{ fontSize: 15 }}>{item.name}</Text>
                        {/* 用户发送未读消息 */}
                        <Text style={{ color: "#999999", width: '100%', fontSize: 12 }}>你好</Text>
                      </View>
                      <View style={{ position: "absolute", right: 30, top: 15, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 10, color: "#999999" }}>14分钟前</Text>
                        <Text style={[styles.userSend]}>1</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            } />
        </View>

        {/* 中间的内容写在这里 */}

        {/* 底部颜色 */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  userSend: {
    fontSize: 12,
    marginTop: 5,
    lineHeight: 17,
    fontWeight: "900",
    textAlign: "center",
    height: 17,
    borderRadius: 10,
    width: 17,
    color: "#ffffff",
    backgroundColor: "#FF0000"
  }
});