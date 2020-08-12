import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
//
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

export default class dakaPlaceChoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: '2',
      placeSumCount: 0,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
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
              Alert.alert("you click me ");
            }}
          >下一步(2/3)</Text>
        </View>


        <View>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={'md-location-sharp'} size={30} color={'#000'} />
              <Text style={{ lineHeight: 30, marginLeft: 0, color: "#000", fontWeight: "bold" }}>杭州
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
            <Text>人气最高
<View style={{ borderWidth: 4, borderBottomColor: "#ffffff00", borderLeftColor: "#ffffff00", borderRightColor: "#ffffff00", borderTopColor: "#000000" }}></View>
            </Text>
          </View>
        </View>
        <FlatList
          style={{ height: '80%' }}
          scrollEnabled={false}
          data={[
            { key: "1.5" },
          ]}
          renderItem={({ item }) =>
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
                    rating={item.key}
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
                  <AntDesign name={'pluscircle'} size={22} color='#6C9575'
                    onPress={() => {

                    }}
                  />
                </View>
              </View>
            </View>
          }
        />

        <View style={{ position: "absolute", top: 0, right: 0 }}>
          <Ionicons name={'list-circle'} size={22} color='red' />
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
