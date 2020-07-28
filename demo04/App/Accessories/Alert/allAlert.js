import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { StatusBar } from 'react-native'
const { width, scale } = Dimensions.get('window');
const biLi = width * scale / 1125;
import CommonDialog from './commonDialog';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RotationGestureHandler } from 'react-native-gesture-handler';
export default class DefineCon extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }

  funAlert() {
    var options = {
      thide: true,
      innersWidth: 308,
      innersHeight: 274,
      innersBorderRadius: 15,
      buttons: [
        {
          txt: '确认',
          btnStyle: { backgroundColor: '#FFB16C', height: 35, borderRadius: 13, width: '80%' },
          txtStyle: { color: '#FFFFFF' },
        }
      ]
    }
    this.refs.dAlert.show(options)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={{ width: 120, borderRadius: 15, height: 30, backgroundColor: 'white' }} underlayColor='transparent'
          onPress={this.funAlert.bind(this)}>
          <Text >阿巴阿巴阿八八八</Text>
        </TouchableHighlight>
        <CommonDialog types={'alert'} components={<DefineCon01 />} ref="dAlert" />
      </View>
    )
  }
}
class DefineCon01 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.conMid]}>
        <AntDesign name="exclamationcircle" size={60} color="#F36A6A" style={{ marginTop: '10%' }} />
        <Text style={{ fontSize: 15, color: '##484848', marginTop: 11 * biLi, }}>温馨提示</Text>
        <Text style={{ fontSize: 15, color: '##484848', marginTop: 30 * biLi }}>您的聊天记录将会被删除！</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43949B',
  },
  conMid: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  textStyle: {
    width: '50%',
    marginTop: 5,
    fontSize: 15,
    color: '#484848',
  },
});