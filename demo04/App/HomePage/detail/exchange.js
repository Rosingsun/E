import React, { Component } from 'react';
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
  Switch
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOn: true,
      turnOff: false
    }
  }
  render() {
    return (

      <View style={styles.container}>

        <View style={styles.Top}>
          <AntDesign name={'left'} size={32} color='#000000' style={{ marginLeft: '3%' }} onPress={() => {
            this.props.navigation.goBack()
          }} />
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: '-3%' }}>与 杰哥 进行交易</Text>
          <View style={{ width: 10 }}>
          </View>
        </View>
        <View style={[styles.box, { marginTop: '8%' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.photo} source={{
              uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399377501,2221360822&fm=26&gp=0.jpg'
            }} />
            <View style={{ marginLeft: '3%', marginTop: '3%' }}>
              <Text style={{ fontSize: 15 }}>您的路线</Text>
            </View>
          </View>
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.littleBox}>
              <Entypo name={'plus'} size={90} color='#999999' style={{ marginLeft: '3%' }} />
            </View></View>
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ transform: [{ rotate: "90deg" }], width: 50, marginTop: 5, marginBottom: 5 }}>
            <Feather name={'repeat'} size={50} color={'#FFFFFF'} />
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.photo} source={{
              uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399377501,2221360822&fm=26&gp=0.jpg'
            }} />
            <View style={{ marginLeft: '3%', marginTop: '3%' }}>
              <Text style={{ fontSize: 15 }}>JK妹 的路线</Text>
            </View>
          </View>
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.littleBox}>
              <Entypo name={'plus'} size={90} color='#999999' style={{ marginLeft: '3%' }} />
            </View>
          </View>
        </View>
        {/* 按钮 */}
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <TouchableWithoutFeedback >
            <View style={{ backgroundColor: '#2F3843', width: 280, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 15, color: '#FFFFFF' }}>确认交易</Text></View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ width: '100%', alignItems: "center", marginTop: '5%',}}>
          <TextInput
            placeholder="  给TA留个言吧！"
            style={{ paddingHorizontal: 80, width: '95%', backgroundColor: '#EFEFEF', paddingLeft: 20, borderRadius: 10, borderWidth: 8, borderColor: '#FFFFFF', marginBottom:20}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C9575',
  },
  Top: {
    height: 78,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  box: {
    marginLeft: '3%',
    width: 387,
    height: 175,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',

  },
  photo: {
    marginLeft: '4%',
    marginTop: '2%',
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#2F3843',
    borderWidth: 2,
  },
  littleBox: {
    width: 355,
    height: 109,
    borderWidth: 8,
    borderStyle: 'dashed',
    borderColor: '#99999950',
    borderRadius: 20,
    marginTop: '2%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EFEFEF50',
  },
}
)