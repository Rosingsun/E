
import React, { Component, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import Bottom_nav from '../../Accessories/Nav/bottom';
import Top_nav from '../../Accessories/Nav/navOne';
import UserShop from '../../Accessories/HomePage/userShop';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    return (

      //导入底部和顶部组件
      <View style={[styles.container]}>
        <Top_nav> </Top_nav>
        {/* 中部自己写 */}
        <ScrollView style={[styles.mainBox]} showsVerticalScrollIndicator={false}>
          {/* 第一大框 */}
          <View style={[styles.firstBox]}>
            <View style={[styles.imgShow]}>
              <View style={[styles.imgShowBox]}>
                <Image style={{ height: 123*biLi, width: "94%", marginLeft: "3%" }} source={require('../../img/a.jpg')} />
                <View style={{width:"100%",flexDirection:"row",padding:6,justifyContent:"center"}}>
                  <Text style={{fontSize:15,}}>今日热议：</Text>
                  <TouchableWithoutFeedback 
                    onPress={()=>{

                    }}
                  >
                  <Text style={{fontSize:12,lineHeight:20,color:"#FFB16C"}}>#横看成岭侧成峰，远近高低各不同#</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              {/* 1-2排行框 */}
              <View style={{ width: "96%", flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: "2%" }}>
                {/* firest View Box */}
                <View style={[styles.list]}>
                  {/* 用户头像 */}
                  <View>
                    <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../../img/a.png')} />
                  </View>
                  <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                    <Text>每周活跃用户</Text>
                    <Text>排行榜</Text>
                  </View>
                </View>
                {/* Second View Box */}
                <View style={[styles.list]}>
                  {/* 用户头像 */}
                  <View>
                    <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../../img/a.png')} />
                  </View>
                  <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                    <Text>每周活跃用户</Text>
                    <Text>排行榜</Text>
                  </View>
                </View>
                {/* The Second Box End */}
              </View>
            </View>
            <View>
            </View>
          </View>
          {/* 第二个框 */}
          <View style={[styles.userShopBox]}>
            {/* 顶部三个选项 */}
            <View style={{
              flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1,
              borderBottomColor: '#CCC', borderBottomRightRadius: 30, borderBottomStartRadius: 30
            }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableWithoutFeedback >
                  <Text style={[styles.choice], [styles.fontSize]}>推荐</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                  <Text style={[styles.choice]}>关注</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                  <Text style={[styles.choice]}>本地</Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#FFB16C", justifyContent: "center", marginTop: 8, marginRight: 10 }}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Alert.alert("your press me")
                  }}>
                  <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>更多游记</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ width: "94%", marginLeft: '3%', paddingTop: 5, flexDirection: "column", justifyContent: "space-between" }}>
              <UserShop />
              <UserShop />
              <UserShop />
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ textAlign: "center", padding: 10, color: "#666666", }}>
                <Text style={{ textDecorationLine: 'line-through' }}>               </Text>
                <Text>     </Text>
                  一场旅行，一次成长。
                  <Text>     </Text>
                <Text style={{ textDecorationLine: 'line-through' }}>               </Text>
              </Text>
            </View>
          </View>

        </ScrollView>

        <Bottom_nav />
      </View>
    )
  }
}
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  list: {
    width: "48%",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    height: 50,
    justifyContent: "center",
    padding: 10,
    borderRadius:5,
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
    height: "75%",
    marginTop: "5%"
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
  }
});

