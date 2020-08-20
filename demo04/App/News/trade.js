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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const trade = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      {/* flatlist渲染层从这开始 */}
      <View style={{ paddingTop: 10, height: '100%', paddingBottom: 10 }}>
        <FlatList
          data={[
            { name: 'JK&妹' },
            { name: 'JK&妹' },
            { name: 'JK&妹' },
          ]}
          renderItem={({ item }) =>
            <View style={[styles.tradeMainBox]}>
              {/* 第一个用户信息框 */}
              <View >
                <View style={{ paddingHorizontal: 10, marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Image style={{ height: 40, width: 40, borderRadius: 30 }} source={require('../img/a.png')} />
                    {/* 用户信息 */}
                    <View style={{ marginLeft: 5, justifyContent: "flex-end" }}>
                      <Text style={{ fontSize: 15 }}>{item.name}:</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: "center", flexDirection: "row", width: '30%', justifyContent: "flex-end" }}>
                    <AntDesign name={'sync'} size={20} color={'#999999'} />
                    <Text style={{ fontSize: 10, color: "#484848", paddingLeft: 10 }}>已完成</Text>
                  </View>
                </View>
                {/* 第二行消息详情框 */}
                <View style={{ width: '100%', justifyContent: "space-between", marginTop: 5 }}>
                  <View style={styles.dealD}>
                    <View style={{ width: '75%', height: 40, backgroundColor: "#EFEFEF", justifyContent: "center" }}>
                      <Text style={{ fontSize: 15, color: "#999999", marginLeft: 10, }}>杭州市西溪湿地风景区</Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", width: "25%", justifyContent: "flex-end" }}>
                      <Text style={{ fontSize: 12, color: "#999999", paddingRight: 5, }}>已履约</Text>
                      <AntDesign name={'checkcircleo'} size={12} color={'#999999'} />
                    </View>
                  </View>
                </View>
              </View>
              {/* 将下面的符号旋转90度 */}
              <View style={{ width: '100%', alignItems: "center", marginTop: 3 }}>
                <View style={{ width: 20, transform: [{ rotate: "90deg" }] }}>
                  <FontAwesome5 name={'exchange-alt'} size={15} color={'#999999'} />
                </View>
              </View>
              {/* 第二个用户信息框 */}
              <View >
                {/* 成交详情 */}
                <View style={[styles.dealD]}>
                  <View style={{ alignItems: "center", flexDirection: "row", width: "25%" }}>
                    <Text style={{ fontSize: 12, color: "#999999" }}>已履约</Text>
                    <AntDesign name={'checkcircleo'} size={12} color={'#999999'} />
                  </View>
                  <View style={{ width: '75%', height: 40, backgroundColor: "#EFEFEF", justifyContent: "center", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, color: "#999999", marginRight: 10 }}>杭州市宋城风景区</Text>
                  </View>
                </View>
                {/* 用户信息 */}
                <View style={{ paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                  <View style={{ alignItems: "center", flexDirection: "row", width: '50%', justifyContent: "space-around" }}>
                    <Text style={[styles.sealCost]}>取消订单</Text>
                    <Text style={[styles.dealEndChoice]}>投诉</Text>
                    <Text style={[styles.dealEndChoice]}>申述</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ marginLeft: 5, justifyContent: "flex-start" }}>
                      <Text style={{ fontSize: 15, }}>{item.name}</Text>
                    </View>
                    <Image style={{ height: 40, width: 40, borderRadius: 30 }} source={require('../img/a.png')} />
                    {/* 用户信息 */}
                  </View>
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
export default trade;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  tradeMainBox: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginTop: 15,
    paddingBottom: 5
  },
  dealD: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  dealEndChoice: {
    width: "20%",
    color: "#999999",
    fontSize: 10,
    textAlign: "center",
    borderWidth: 1,
    paddingTop: 2,
    borderRadius: 3,
    borderColor: "#999999",
  },
  sealCost: {
    width: "30%",
    fontSize: 10,
    textAlign: "center",
    paddingTop: 2,
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#6C9575",
  }
});