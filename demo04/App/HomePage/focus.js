import React,{Component,useState}from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

export default function focus() {
  // set icon color
  const [Iconcolor, setIconcolor] = useState('gray');
  const [flag, setFlag] = useState(true);
  function changeIconColor() {
    if (flag) {
      setIconcolor('red');
      setFlag(!flag);
    } else {
      setFlag(!flag);
      setIconcolor('gray')
    }
  }

  return (
    <View style={{ backgroundColor: "#EFEFEF",borderRadius:20, }}>
      <View style={{ flexDirection: "row", width: "94%", marginLeft: '3%' }}>
        {/* 左边这一侧的用户商品信息 */}
        <View style={{ width: "49%", paddingTop: 5, flexDirection: "column", }}>
          {/* 试一下用flatlist */}
          <View style={styles.showUserlist}>
            <FlatList
              data={[
                {
                  name: 'JK妹123213',
                  userHead: "../img/a.png",
                  userWords: '一袖青衣，晚风吹彼岸。',
                  place: '杭州西湖风景区',
                  countNum: '11',
                  showUserImg: 'https://reactnative.dev/img/tiny_logo.png',
                },
                {
                  name: 'JK妹123213',
                  userHead: "../img/a.png",
                  userWords: '一袖青衣，晚风吹彼岸。',
                  place: '杭州西湖风景区',
                  countNum: '11',
                  showUserImg: 'https://reactnative.dev/img/tiny_logo.png',
                },
              ]}
              renderItem={({ item }) =>
                <View style={[styles.showContainer]}>
                  {/* 图片框 */}
                  <Image style={{ height: 240, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={{ uri: item.showUserImg }} />
                  {/* 定位 */}
                  <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
                    <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
                    {item.place}
                  </Text>

                  {/* 用户发言 */}
                  <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}>
                    {item.userWords}
                  </Text>
                  {/* 用户信息框 */}
                  <View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 8 }}>
                    <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={{ uri: item.userHead }} />
                    <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>{item.name}</Text>
                    <View style={{ position: "absolute", right: 10, bottom: 5 }}>
                      <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>
                        <AntDesign name={'like2'} size={12} color={Iconcolor} />
                        {item.countNum}
                      </Text>
                    </View>
                  </View>
                </View>} />
          </View>
        </View>
        {/* 右边这一侧的用户信息 */}
        <View style={{ width: "49%", paddingTop: 5, flexDirection: "column", marginLeft: "2%" }}>
          <View style={styles.showUserlist}>
            <FlatList
              data={[
                {
                  name: 'JK妹',
                  userHead: "../img/a.png",
                  userWords: '一袖青衣，晚风吹彼岸。',
                  place: '杭州西湖风景区',
                  countNum: '11',
                  showUserImg: 'https://reactnative.dev/img/tiny_logo.png',
                },
                {
                  name: 'JK妹123213',
                  userHead: "../img/a.png",
                  userWords: '一袖青衣，晚风吹彼岸。',
                  place: '杭州西湖风景区',
                  countNum: '11',
                  showUserImg: 'https://reactnative.dev/img/tiny_logo.png',
                },
              ]}
              renderItem={({ item }) =>
                <View style={[styles.showContainer]}>
                  {/* 图片框 */}
                  <Image style={{ height: 240, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={{ uri: item.showUserImg }} />
                  {/* 定位 */}
                  <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
                    <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
                    {item.place}
                  </Text>
                  {/* 用户发言 */}
                  <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}>
                    {item.userWords}
                  </Text>
                  {/* 用户信息框 */}
                  <View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 8 }}>
                    <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={{ uri: item.userHead }} />
                    <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>{item.name}</Text>
                    <View style={{ position: "absolute", right: 10, bottom: 5 }}>
                      <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>
                        <AntDesign name={'like2'} size={12} color={Iconcolor} />
                        {item.countNum}
                      </Text>
                    </View>
                  </View>
                </View>} />
          </View>
        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  showUserlist: {
    width: '100%',
    borderRadius: 3,
  },
  showContainer: {
    width: 185 * biLi,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  item: {
    padding: 0,
    height: 440,
  },
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
});

