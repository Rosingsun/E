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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Bottom_nav from '../Accessories/Nav/bottom';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
const thumbs = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      {/* 顶部输入框 */}
      {/* flatlist渲染层从这开始 */}
      <View style={{ paddingTop: 10, height: '100%', paddingBottom: 10 }}>
        <FlatList
          data={[
            {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/89/5d68d979acad4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            },
            {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/89/5d68d979acad4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            }, {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/89/5d68d979acad4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            }, {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/89/5d68d979acad4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            },
          ]}
          renderItem={({ item }) =>
            <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#ffffff", borderRadius: 15, marginTop: 15, paddingBottom: 8 }}>
              <View style={{ padding: 10, flexDirection: "row" }}>
                <Image style={{ height: 45, width: 45, borderRadius: 30 }} source={{ uri: item.userHead }} />
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}>{item.username}</Text>
                  <Text style={{ color: "#999999" }}>20-07-01 22:00</Text>
                </View>
                <View style={{ position: "absolute", right: 10, top: 15, alignItems: "center" }}>
                  <AntDesign name={'like1'} size={20} color={'#FFB16C'} />
                  <Text style={{ fontSize: 10, color: "#484848" }}>赞了你</Text>
                </View>
              </View>
              {/* 第二行消息详情框 */}
              <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#EFEFEF", borderRadius: 15, flexDirection: "row" }}>
                <Image style={{ height: '100%', width: 132, borderRadius: 3 }} source={{ uri: item.userHead }} />
                <View style={{ paddingVertical: 5, width: 190, }}>
                  <Text style={{ fontSize: 15, }}>CRUEL_JACK</Text>
                  <View >
                    <Text style={{ fontSize: 12, color: "#FFBE84", }}>#欲把西湖比西子#</Text>
                    <Text style={{ width: '100%', fontSize: 15 }}>{item.userSpeach}</Text>
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
export default thumbs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
});