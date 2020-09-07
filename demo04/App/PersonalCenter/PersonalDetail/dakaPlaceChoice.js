import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
//
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Picker from 'react-native-picker';
import { SceneView } from 'react-navigation';
//底部选择框
let cityData = [
  {
    '杭州': [1, 2, 3, 4]
  },
  {
    '温州': [1, 2, 3, 4]
  },
];
let choiceType = ['人气最高', '历史气息', '情侣圣地'];
export default class dakaPlaceChoice extends Component {
  static defaultProps = {
    multiList: [
      {
        id: 0,
        "name": "西湖·一个小亭子",
        select: false,

      },
      {
        id: 1,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 2,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 3,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 4,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 5,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 6,
        "name": "西湖·一个小亭子",
        select: false
      },
      {
        id: 7,
        "name": "西湖·一个小亭子",
        select: false
      },
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: '2',
      placeSumCount: 0,
      choiceCitye: "杭州",
      choiceType: "人气最高",
      addPlace: 0,
      addOpacity: 0,

      multiData: this.props.multiList,
      selectMultiItem: [],
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  _pointChoice(item, color) {
    return (
      <View style={[styles.userEBox]}>
        {/* pic box */}
        <View>
          <Image style={{ height: '100%', width: 129 }} source={{ uri: "http://pic.51yuansu.com/backgd/cover/00/56/64/5d08a272e481e.jpg!/fw/780/quality/90/unsharp/true/compress/true" }}></Image>
        </View>
        {/* user Word Box */}
        <View style={[styles.wordBox]}>
          {/* title */}
          <View>
            <Text style={{ fontSize: 15 }}>西湖·一个小亭子</Text>
          </View>
          {/* 评星 */}
          <View style={{ height: 20, width: 120 }}>
            <StarRating
              disabled={false}
              emptyStar={'star-o'}
              fullStar={'star'}
              halfStar={'star-half'}
              iconSet={'FontAwesome'}
              maxStars={5}
              rating={5}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#EA9518'}
              starStyle={{
                fontSize: 20,
              }}
            />
          </View>
          {/* <View> */}
          <Text style={{ color: "#999999", fontSize: 10 }}>西湖景区</Text>
          <Text style={{ color: "#999999", fontSize: 10, padding: 2, width: 160, backgroundColor: "#EFEFEF" }}>杜甫、李白、白居易也在这里打卡</Text>
          {/* </View> */}
          <View style={{ position: "absolute", right: -10, top: '45%' }}>
            <AntDesign name={'pluscircle'} size={22} color={color}
              onrrPress={() => {
                this.setState({ addOpacity: 1, addPlace: this.state.addPlace + 1 })
              }}
            />
          </View>
        </View>
      </View>
    )
  }
  //多选
  _selectMultiItemPress(item) {
    if (item.select) {
      this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
        return x === item.id;
      }), 1);
    } else {
      this.state.selectMultiItem.push(item.name,item.select);
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
            onPress={() => this._selectMultiItemPress(item)}>
            {this._pointChoice({ item }, '#999')}
          </TouchableOpacity>
        )
      } else {
        menuArr.push(

          // 未选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}>
            {this._pointChoice({ item }, '#6C9575')}
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
    return (
      <View style={[styles.container]}>
        <View style={styles.Top}>
          <AntDesign name={'left'} size={32} color='#000000' onPress={() => {
            this.props.navigation.goBack()
          }} />
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: '12%' }}>选择城市</Text>
          <Text style={{ fontSize: 12, color: '#fff', backgroundColor: "#6C9575", borderRadius: 15, padding: 2, paddingHorizontal: 5 }}
            onPress={() => {
              this.props.navigation.navigate("improveInformation")
            }}
          >下一步(2/3)</Text>
        </View>


        <View>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={'md-location-sharp'} size={30} color={'#000'} />
              <Text style={{ lineHeight: 30, marginLeft: 0, color: "#000", fontWeight: "bold" }}
                onPress={() => {
                  Picker.init({
                    pickerData: cityData,
                    onPickerConfirm: data => {
                      this.setState({ choiceCitye: data })
                    },
                    onPickerCancel: data => {
                      console.log(data);
                    },
                    onPickerSelect: data => {
                      this.setState({ choiceCitye: data })
                    }
                  });
                  Picker.show();
                }}
              >{this.state.choiceCitye}
                <View style={{ borderWidth: 4, borderBottomColor: "#ffffff00", borderLeftColor: "#ffffff00", borderRightColor: "#ffffff00", borderTopColor: "#000000" }}></View>
              </Text>
            </View>
            <View style={{ width: '60%', flexDirection: "row", backgroundColor: "#fff", borderRadius: 20 }}>
              <TextInput
                placeholder="去哪玩"
                style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '83%', lineHeight: -2, }}
              >
              </TextInput>
              <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
            </View>

            <Text
              onPress={() => {
                Picker.init({
                  pickerData: choiceType,
                  onPickerConfirm: data => {
                    this.setState({ choiceType: data })
                  },
                  onPickerCancel: data => {
                    console.log(data);
                  },
                  onPickerSelect: data => {
                    this.setState({ choiceType: data })
                  }
                });
                Picker.show();
              }}
            >{this.state.choiceType}
              <View style={{ borderWidth: 4, borderBottomColor: "#ffffff00", borderLeftColor: "#ffffff00", borderRightColor: "#ffffff00", borderTopColor: "#000000" }}></View>
            </Text>
          </View>
        </View>
        <ScrollView>
        {this._renderMultiMark()}
        </ScrollView>
        <View style={{ position: "absolute", justifyContent: "center", alignItems: "center", height: 60, width: 60, borderRadius: 100, right: 20, bottom: 40, backgroundColor: "#2F3843" }}>
          <View style={{ opacity: this.state.addOpacity, height: 20, position: "absolute", right: -1, top: -5, width: 20, borderRadius: 10, backgroundColor: "red" }}>
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>{this.state.addPlace}</Text>
          </View>
          <MaterialCommunityIcons name={'clipboard-list-outline'} size={40} color={'#fff'}
            onPress={() => {
              this._submitMultiPress()
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  wordBox: {
    width: "60%",
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-around",
  },
  userEBox: {
    marginTop: 10,
    width: '96%',
    marginLeft: '2%',
    height: 118,
    flexDirection: "row",
    backgroundColor: "#FFFFFF"
  },
  Top: {
    height: 78,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // justifyContent:"space-between",
    justifyContent: "space-between",
    flexDirection: 'row',
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    backgroundColor: "#fff"
  },
})
