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
const thumbs = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      {/* 顶部输入框 */}
      {/* flatlist渲染层从这开始 */}
      <View style={{paddingTop:5,height: '100%', paddingBottom:20}}>
        <FlatList

          data={[
            {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            },
            {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            }, {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            }, {
              username: 'JK&妹',
              userSpeach: '加油加油加油加油加油加油加油加油',
              userHead: 'http://pic.51yuansu.com/pic3/cover/03/95/80/5d649e8a60248_610.jpg',
            },
          ]}
          renderItem={({ item }) =>
            <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#ffffff", borderRadius: 15, marginTop: 15, paddingBottom:13 }}>
              <View style={{ paddingHorizontal:'5%', flexDirection: "row",alignItems:'center',paddingVertical:'2%' }}>
                
                <Image style={{ height: 40, width: 40, borderRadius: 30,borderWidth:1,borderColor:'#707070' }} source={{ uri: item.userHead }} />
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text style={{ fontSize: 15,color:'#000000' }}>{item.username}</Text>
                  <Text style={{ color: "#999999",fontSize:10 }}>20-07-01 22:00</Text>
                </View>
                <View style={{ position: "absolute", right: 10, top: 15, alignItems: "center" }}>
                  <AntDesign name={'like1'} size={20} color={'#2F3843'} />
                  <Text style={{ fontSize: 10, color: "#484848",marginTop:3}}>赞了你</Text>
                </View>
              </View>
              {/* 第二行消息详情框 */}
              <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#EFEFEF50", borderRadius: 15, flexDirection: "row", }}>
                <Image style={{ height: '100%', width: 132,height:85, borderRadius:15 }} source={{ uri: item.userHead }} />
                <View style={{ paddingVertical: 5, width: 190,marginLeft:5 }}>
                  <Text style={{ fontSize: 15,color:'#000000' }}>CRUEL_JACK：</Text>
                  <View style={{flexDirection:'column'}}>
                    <Text style={{ fontSize: 12, color: "#FFBE84", }}>#欲把西湖比西子# </Text>
                    <Text style={{ width: '100%', fontSize: 12,color:'#000000' }}>{item.userSpeach}</Text>
                   
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
    backgroundColor: "#EFEFEF",
  },
});