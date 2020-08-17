import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  Switch,
  ScrollView
} from 'react-native';
import AnimatedLineProgressBar from './AnimatedLineProgressBar'
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { HcdWaveView } from './newbobo'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
var line = [{ key: "0" }, { key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" }, { key: "6" }, { key: "7" }, { key: "8" }, { key: "9" }]
export default class mylevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      levelPercent: 80,
      powerPercent: 50,
      dayleft: 80,
      dayPercent: 10,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* 加载条的上部 */}
        <ScrollView>
          <View style={{ marginTop: '12%', marginLeft: '5%' }}>
            <AntDesign name={'left'} size={30} color={'#FFFFFF'} onPress={() => {
              this.props.navigation.goBack();
            }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -8 }}>
            <Image source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597334136490&di=071d7849f5e0f375c12d6d855b6779e3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F28%2F20190228210011_byvvj.thumb.400_0.jpeg" }}
              style={styles.photo} />
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 15 }}>当前等级：</Text>
              <Text style={{ color: '#FAAF3D', fontSize: 15 }}
                onPress={()=>{
                  this.props.navigation.navigate("renderCalendarWithCustomMarkingType")
                }}
              >Lv.7</Text>
            </View>
          </View>
          {/* 加载条 */}
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }} >
            <View style={{ width: 300, height: 10, backgroundColor: "#ffffff00", zIndex: 2, flexDirection: "row", justifyContent: "space-between", marginBottom: 9 }}>
              {line.map((item) => {
                return (
                  <View>
                    <Text style={{ color: "#fff" }}>{item.key}</Text>
                    <View style={{ height: '100%', width: 1, backgroundColor: "#000" }}></View>
                  </View>
                )
              })}
            </View>
            <AnimatedLineProgressBar
              style={{
                height: 10,
                width: 300,
                zIndex: 1,
              }}
              progressTotal={100}
              progressNumber={77}
              strokeWidth={0}
              barStartColor={'#FAAF3D50'}
              barEndColor={'#FAAF3D'} />

          </View>
          {/* 俩个盒子 */}
          <View style={styles.box}>
            <Text style={{ fontSize: 15, color: '#000000' }}>当前等级特权</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: '#FAAF3D' }}></View>
              <Text style={{ fontSize: 12, color: '#000000', marginLeft: 5 }}>与Lv.7用户同级匹配</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#999999' }}>注：愿望单路线匹配与路线交易仅限于近似等级用户( ±1 )，当低等级用户向高等级用户发起交易时，需要支付额外的越级交易积分，每多跨越一级需要额外支付25%的越级交易积分。
</Text>
          </View>

          <View style={styles.littleBox}>
            <Text style={{ fontSize: 12, color: '#000000' }}>距离下一个等级：</Text>
            <Text style={{ fontSize: 12, color: '#FAAF3D' }}>Lv.8</Text>
          </View>
          {/* 两个波波球 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <HcdWaveView
                surfaceWidth={180}
                surfaceHeigth={180}
                //  powerPercent现在
                powerPercent={this.state.powerPercent}
                levelPercent={this.state.levelPercent}
                type="dc"
                word={"还需要" + (this.state.levelPercent - this.state.powerPercent) + "分"}
                bobocolor='#FAAF3D'
              //  style = {{backgroundColor:'red',superViewBackgroundColor:'red'}}
              ></HcdWaveView><Text style={{ marginTop: -15, fontSize: 12, color: '#fff' }}>累计积分</Text></View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <HcdWaveView
                surfaceWidth={180}
                surfaceHeigth={180}
                //  powerPercent现在
                powerPercent={this.state.dayPercent}
                levelPercent={this.state.dayleft}
                type="dc"
                word={"还需要" + (this.state.dayleft - this.state.dayPercent) + "天"}
                bobocolor='#6C9575'
              //  style = {{backgroundColor:'red',superViewBackgroundColor:'red'}}
              ></HcdWaveView>
              <Text style={{ marginTop: -15, fontSize: 12, color: '#fff' }}
              
              >登录天数</Text></View>
          </View>
          <View style={[styles.box, { marginBottom: 40 }]}><Text style={{ color: '#999999', fontSize: 12 }}>累计积分是指累计的所有积分而非当前所有的积分，已经使用的积
分也纳入累计积分计算。</Text></View>

        </ScrollView>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F3843",
    flexDirection: "column"
  },
  photo: {
    width: 65,
    height: 65,
    borderRadius: 65
  },
  box: {
    width: '94%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 40,
    marginLeft: '3%',
    paddingHorizontal: 10
  },
  littleBox: {
    width: 135,
    height: 30,
    backgroundColor: '#fff',
    marginLeft: '3%',
    borderRadius: 3,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})