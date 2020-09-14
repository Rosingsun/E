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
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ModalComp from './motaikuang';

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
class trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
    };
  }
  /*
        tfinish 0为未交易，1为完成交易
        MyJob   0为，我未守约，1为完守约
        OtherJob 0 为未完成，1为完成
      */
  render() {
    function tradeBox(finish, MyJob, OtherJob, Mname,Oname, OplaceName, MplaceName) {
      //交易是否已完成
      function finishYet(finish) {
        if (finish == 1) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: '30%', justifyContent: "flex-end" }}>
              <AntDesign name={'sync'} size={20} color={'#999999'} />
              <Text style={{ fontSize: 10, color: "#484848", paddingLeft: 6}}>已完成</Text>
            </View>
          )
        } else {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: '30%', justifyContent: "flex-end" }}>
              <Entypo name={'back-in-time'} size={25} color={'#999999'} />
              <Text style={{ fontSize: 10, color: "#484848", paddingLeft: 6 }}>未完成</Text>
            </View>
          )
        }
      }
      function textType(finish) {
        if (finish == 1) {
          return (
            <View>
              {/* <Text style={[styles.sealCost]}>订单评价</Text> */}
              <ModalComp/>
            </View>
          )
        } else {
          return (
            <View>
              <Text style={[styles.sealCost]}>取消订单</Text>
            </View>
          )
        }
      }
      // 自己是否已经完成
      function myfinishYet(finish, MyJob) {
        //交易完成，自己已经履约
        if (finish == 1 && MyJob == 1) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%", justifyContent: "flex-end" }}>
              <Text style={{ fontSize: 12, color: "#999999", paddingRight: 3, }}>已履约</Text>
              <AntDesign name={'checkcircleo'} size={12} color={'#999999'} />
            </View>
            //交易完成，自己未履约
          )
        } else if (finish == 1 && MyJob == 0) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%", justifyContent: "flex-end" }}>
              <Text style={{ fontSize: 12, color: "#999999", paddingRight: 3, }}>已违约</Text>
              <EvilIcons name={'close-o'} size={20} color={'red'} />
            </View>
            // 交易未完成
          )
        } else if (finish == 0) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%", justifyContent: "flex-end" }}>
              <Text style={{ fontSize: 12, color: "#fff", backgroundColor: "#6C9575", marginRight: 5, paddingHorizontal: 8, borderRadius: 10, paddingVertical: 3 }}>我已履约</Text>
            </View>
          )
        }
      }
      // 他人否已经完成
      function OtherYet(finish, OtherJob) {
        //交易完成，他人也完成
        if (finish == 1 && OtherJob == 1) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%" }}>
              <Text style={{ fontSize: 12, color: "#999999" }}>已履约</Text>
              <AntDesign name={'checkcircleo'} size={12} color={'#999999'} />
            </View>
            // 交易完成，他人未履约
          )
        } else if (finish == 1 && OtherJob == 0) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%" }}>
              <Text style={{ fontSize: 12, color: "#999999" }}>已违约</Text>
              <EvilIcons name={'close-o'} size={20} color={'red'} />
            </View>
            // 交易未完成
          )
        } else if (finish == 0) {
          return (
            <View style={{ alignItems: "center", flexDirection: "row", width: "25%", justifyContent: "flex-start" }}>
              <Text style={{ fontSize: 12, color: "#fff", backgroundColor: "#6C9575", marginRight: 5, paddingHorizontal: 8, borderRadius: 10, paddingVertical: 3 }}>Ta已履约</Text>
            </View>
          )
        }
      }
      //设置  <Text style={[styles.sealCost]}>订单评价</Text>

      return (
        <View style={[styles.tradeMainBox]}>
          {/* 第一个用户信息框 */}
          <View >
            <View style={{ paddingHorizontal: 10,  flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", }}>
                <Image style={{ height: 40, width: 40, borderRadius: 30,borderWidth:1,borderColor:'#707070', }} source={require('../img/a.png')} />
                {/* 用户信息 */}
                <View style={{ marginLeft: 5, justifyContent: "flex-end" }}>
                  <Text style={{ fontSize: 15 }}>{Oname}</Text>
                </View>
              </View>
              {
                finishYet(finish)
              }
            </View>
            {/* 第二行消息详情框 */}
            <View style={{ width: '100%', justifyContent: "space-between", marginTop:7}}>
              <View style={styles.dealD}>
                <View style={{ width: '75%', paddingVertical:10,paddingHorizontal:20, backgroundColor: "#EFEFEF", justifyContent: "center",borderRadius:3 }}>
                  <Text style={{ fontSize: 15, color: "#999999", marginLeft: 10, }}>{OplaceName}</Text>
                </View>
                {
                  myfinishYet(finish, MyJob)
                }
              </View>
            </View>
          </View>
          {/* 将下面的符号旋转90度 */}
          <View style={{ width: '100%', alignItems: "center",marginTop:5}}>
            <View style={{ width: 20, transform: [{ rotate: "90deg" }] }}>
              <FontAwesome5 name={'exchange-alt'} size={15} color={'#999999'} />
            </View>
          </View>
          {/* 第二个用户信息框 */}
          <View >
            {/* 成交详情 */}
            <View style={[styles.dealD]}>

              {
                OtherYet(finish, OtherJob)
              }
              <View style={{ width: '75%',paddingVertical:10,paddingHorizontal:20,  backgroundColor: "#EFEFEF", justifyContent: "center", alignItems: "flex-end",borderRadius:5,borderRadius:3 }}>
                <Text style={{ fontSize: 15, color: "#999999", marginRight: 10,  }}>{MplaceName}</Text>
              </View>
            </View>
            {/* 用户信息 */}
            <View style={{ paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between", marginTop:7 }}>
              <View style={{ alignItems: "center", flexDirection: "row", width: '45%', justifyContent: "space-around" }}>
                {
                  textType(finish)
                }
                <Text style={[styles.dealEndChoice]}>投诉</Text>
                <Text style={[styles.dealEndChoice]}>申述</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: 5, justifyContent: "flex-start" }}>
                  <Text style={{ fontSize: 15,marginRight:5 }}>{Mname}</Text>
                </View>
                <Image style={{ height: 40, width: 40, borderRadius: 30,borderWidth:1,borderColor:'#707070' }} source={{uri:"http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true"}} />
                {/* 用户信息 */}
              </View>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View style={[styles.container]}>
        {/* flatlist渲染层从这开始 */}
        <View style={{ paddingTop: 10, height: '100%', paddingBottom: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={[
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 0,
                MyJob: 1,
                OtherJob: 0,
                OplaceName: "杭州市宋城风景区",
                MplaceName: "横店影视城",
              },
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 1,
                MyJob: 1,
                OtherJob: 0,
                OplaceName: "杭州市宋城风景区",
                MplaceName: "杭州市西湖风景区",
              },
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 0,
                MyJob: 1,
                OtherJob: 1,
                OplaceName: "杭州市宋城风景区",
                MplaceName: "杭州市西湖风景区",
              },
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 1,
                MyJob: 0,
                OtherJob: 1,
                OplaceName: "杭州市宋城风景区",
                MplaceName: "西溪国家湿地公园",
              },
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 1,
                MyJob: 0,
                OtherJob: 1,
                OplaceName: "西溪国家湿地公园",
                MplaceName: "杭州市西湖风景区",
              },
              {
                Oname: '杰哥:',
                Mname: 'JK&妹:',
                finish: 0,
                MyJob: 1,
                OtherJob: 1,
                OplaceName: "杭州市宋城风景区",
                MplaceName: "千岛湖风景区",
              },
            ]}
            renderItem={({ item }) =>
              tradeBox(item.finish, item.MyJob, item.OtherJob, item.Mname, item.Oname, item.OplaceName, item.MplaceName)
            } />
        </View>
      </View>
    )
  }
}
export default trade;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  tradeMainBox: {
    width: '94%',
    marginLeft: '3%',
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginTop: 18,
    paddingVertical: 6,
    paddingHorizontal:15,
  },
  dealD: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  dealEndChoice: {
    // width: "20%",
    color: "#999999",
    fontSize: 10,
    textAlign: "center",
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal:6,
    borderRadius: 3,
    borderColor: "#999999",

  },
  sealCost: {
    fontSize: 10,
    textAlign: "center",
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#2F3843",
    paddingHorizontal: 8,
    paddingVertical: 3,
  }
});