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
const leaveMessage = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <View style={{ paddingTop: 10, height: '100%', paddingBottom: 10 }}>
        <FlatList
          data={[
            { name: 'JK&妹' },
            { name: 'JK&妹' },
          ]}
          renderItem={({ item }) =>
            <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#ffffff", borderRadius: 15, marginTop: 15, paddingBottom: 8 }}>
              {/* 第一行用户信息框 */}
              <View style={{ padding: 10, flexDirection: "row" }}>
                <Image style={{ height: 45, width: 45, borderRadius: 30 }} source={require('../img/a.png')} />
                {/* 用户信息 */}
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}>{item.name}</Text>
                  <Text style={{ color: "#999999" }}>20-07-01 22:00</Text>
                </View>
                <View style={{ position: "absolute", right: 10, top: 15, alignItems: "center" }}>
                  <AntDesign name={'like1'} size={20} color={'#FFB16C'} />
                  <Text style={{ fontSize: 10, color: "#484848" }}>赞了你</Text>
                </View>
              </View>
              {/* 第二行消息详情框 */}
              <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#EFEFEF", borderRadius: 15, flexDirection: "row" }}>
                <Image style={{ height: '100%', width: 132, borderRadius: 3 }} source={require('../img/a.png')} />
                <View style={{ paddingVertical: 5, width: 190, }}>
                  <Text style={{ fontSize: 15, }}>CRUEL_JACK</Text>
                  <View >
                    <Text style={{ fontSize: 12, color: "#FFBE84", }}>#欲把西湖比西子#</Text>
                    <Text style={{ width: '100%', fontSize: 15 }}>1111111111111111111111111111111111111111111</Text>
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
export default leaveMessage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
});