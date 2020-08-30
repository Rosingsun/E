import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Dimensions, Image, StatusBar, TouchableOpacity, Alert, TouchableHighlight
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class complaint extends Component {
  static defaultProps = {
    multiList: [
      {
        "id": "0",
        "text": "垃圾营销",
        select: false
      },
      {
        "id": "1",
        "name": "涉黄信息",
        select: false
      },
      {
        "id": "2",
        "name": "不实信息",
        select: false
      },
      {
        "id": "3",
        "name": "人身攻击",
        select: false
      },
      {
        "id": "4",
        "name": "有害信息",
        select: false
      },
      {
        "id": "5",
        "name": "内容抄袭",
        select: false
      },
      {
        "id": "6",
        "name": "违法信息",
        select: false
      },
      {
        "id": "7",
        "name": "诈骗信息",
        select: false
      },
      {
        "id": "8",
        "name": "恶意营销",
        select: false
      },

    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      isPress: true,

    }
  }
  onPress = () => {
    this.setState({
      isPress: false,
      multiData: this.props.multiList,
      selectMultiItem: [],
    });
  };

  //多选
  _selectMultiItemPress(item) {
    if (item.select) {
      this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
        return x === item.id;
      }), 1);
    } else {
      this.state.selectMultiItem.push(item.id);
    }
    this.state.multiData[item.id].select = !item.select;
    this.setState({ multiData: this.state.multiData });
  }
  //递交 选中 
  _submitMultiPress() {
    alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
  }
  //渲染多选标记
  _renderMultiMark() {
    let multiData = this.state.multiData;
    let len = multiData.length;
    let menuArr = [];
    for (let i = 0; i < len; i++) {
      let item = multiData[i];
      if (item.select) {
        menuArr.push(
          //选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}
            style={[styles.markRow, styles.markChecked]}>
            <Text style={styles.markCheckedText}>{item.name}</Text>
          </TouchableOpacity>
        )
      } else {
        menuArr.push(
          // 未选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}
            style={[styles.markRow, styles.markUnCheck]}>
            <Text style={styles.markUnCheckText}>{item.name}</Text>
          </TouchableOpacity>
        )
      }
    }
    return (
      //讲各类状态框输出到前端页面
      <View style={styles.multiBox}>
        {menuArr}
      </View>
    );
  }
  render() {
    var test = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ]
    return (
      <View style={styles.container}>
        {/* TOP */}
        <View style={[styles.top]}>
          <View style={[styles.nav_container]}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                this.props.navigation.goBack();
              }} />
            </View>
            <Text style={{ fontSize: 20, color: '#000' }}>线路</Text>
            <View style={{ width: 45, height: 20 }} />
          </View>
        </View>

        <View style={styles.choiceView}>
          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 15, marginLeft: '3%', marginTop: '5%' }}>
              投诉
              <Text style={{ fontSize: 15, color: '#FFB16C' }}>@用户名</Text>
              用户：
              </Text>
          </View>
          <View style={styles.userInformation}>
            <View style={{ flexDirection: 'row' }}>

              <Image style={styles.userHead} source={{ uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1220450739,2978203122&fm=26&gp=0.jpg' }} />


              <View style={{ marginLeft: '3%', justifyContent: 'center' }}>
                <Text style={styles.userId}>用户名</Text>
                <Text style={styles.userIntroduce}>简介：暂无介绍</Text>
              </View>

            </View>
          </View>
          <Text style={{ fontSize: 15, paddingLeft: '3%', paddingTop: 18 }}>请选择你想要投诉的类型</Text>
          <View style={[styles.buttonBox]}>
            <View style={styles.button}>
              <Text style={{ fontSize: 12 }}>垃圾营销</Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            style={{ alignItems: "center", backgroundColor: "#6C9575", padding: 15, width: "60%", borderRadius: 10 }}
            onPress={() => { Alert.alert('提交成功') }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>提交</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    flexDirection: "column"
  },
  top: {
    top: 0,
    height: 78,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 8,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '11%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
  choiceView: {
    width: '94%',
    height: 320,
    marginLeft: '3%',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginTop: 65,
  },
  userInformation: {
    height: 80,
    width: '94%',
    marginLeft: '3%',
    marginTop: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    justifyContent: 'center',
  },
  userHead: {
    height: 55,
    width: 55,
    borderRadius: 55,
    marginLeft: '3%'
  },
  userId: {
    fontSize: 15,
    color: '#000000'
  },
  userIntroduce: {
    fontSize: 10,
    color: '#999999',
    marginTop: 5,
  },
  nineChoice: {
    height: 156,
    width: '94%',
    paddingLeft: '3%',

  },
  button: {
    backgroundColor: "#EFEFEF",
    width: 108,
    height: 34,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"

  },
  buttonBox: {
    flexDirection: "row",
    marginTop: 10,
    width:'90%',
    backgroundColor:"red",
    marginLeft:'5%',

  },
});

