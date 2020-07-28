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
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const Message = ({ navigation }) => {
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
            { name: 'JK&妹' },
            { name: 'JK&妹' },
            { name: 'JK&妹' },
            { name: 'JK&妹' },
            { name: 'JK&妹' },
          ]}
          renderItem={({ item }) =>
            <View style={{ width: '94%', marginLeft: '3%', backgroundColor: "#ffffff", borderRadius: 500, marginTop: 15, }}>
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
          } />
      </View>
      {/* 中间的内容写在这里 */}

      {/* 底部颜色 */}
    </View>
  )
}
export default Message;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  userSend: {
    fontSize: 12, marginTop: 5, lineHeight: 17, fontWeight: "900", textAlign: "center", height: 17, borderRadius: 10, width: 17, color: "#ffffff", backgroundColor: "#FF0000"
  }
});