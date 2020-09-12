import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Image,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
  export default class  leaveMessage extends Component {
    constructor(props){
      super(props)
      this.state={
      }
    }

    render(){
  return (
    <View style={[styles.container]}>
      <View style={{ paddingTop:5, height: '100%', paddingBottom: 20 }}>
        <FlatList
          data={[
            {
              key: "1",
              name: 'JK&妹'
            },
            {
              key: "1",
              name: 'JK&妹'
            },
            {
              key: "1",
              name: 'JK&妹'
            },
            {
              key: "1",
              name: 'JK&妹'
            },
            
          ]}
          renderItem={({ item }) =>
            <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#ffffff", borderRadius: 15, marginTop: 15, paddingBottom: 13, }}>
              {/* 第一行用户信息框 */}
              <View style={{ paddingHorizontal:'5%', flexDirection: "row",alignItems:'center',paddingVertical:'2%'  }}>
                <Image style={{  height: 40, width: 40, borderRadius: 30,borderWidth:1,borderColor:'#707070'}} source={require('../img/a.png')} />
                {/* 用户信息 */}
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text style={{ fontSize: 15,color:'#000000' }}>{item.name}</Text>
                  <Text style={{ color: "#999999",fontSize:10 }}>20-07-01 22:00</Text>
                </View>
                <View style={{ position: "absolute", borderRadius: 10, right: 15, top: 15,  backgroundColor: "#6C9575", alignItems: "center",paddingHorizontal:10,paddingVertical:3 }}>
                {/* <View style={{ position: "absolute", right: 10, top: 15, alignItems: "center" }}> */}
                  <Text style={{ fontSize:12, color: "#ffffff" }}
                    onPress={() => {
                      this.props.navigation.navigate('MainText');
                    }}
                  >回复</Text>
                </View>
              </View>
              <View style={{ width: '90%', marginLeft: '5%', fontSize: 15 }}>
                <Text>回复
                  <Text style={{ color: '#FFBE84' }}>{item.name}</Text>：
                  <Text style={{ color: '#000000' }}>{item.name}</Text>
                </Text>
              </View>
              {/* 第二行消息详情框 */}
              <View style={{ width: '90%', marginLeft: '5%', backgroundColor: "#EFEFEF50", borderRadius: 15, flexDirection: "row",marginTop:5 }}>
                <Image style={{ height: '100%', width: 132, borderRadius:15,height:85,  }} source={require('../img/a.png')} />
                <View style={{ paddingVertical: 5, width: 190,marginLeft:5 }}>
                  <Text style={{ fontSize: 15,color:'#000000' }}>CRUEL_JACK</Text>
                  <View style={{flexDirection:"column"}}>
                    <Text style={{ fontSize: 12, color: "#FFBE84", }}>#欲把西湖比西子#</Text>
                    <Text style={{ width: '100%', fontSize: 12,color:'#000000' }}>2222222222222222222222222</Text>
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
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
});