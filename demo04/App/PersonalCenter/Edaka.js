import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
//
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { storage } from '../Accessories/storage//index';
// import { ScrollView } from 'react-native-gesture-handler';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

export default class Edaka extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: '2',
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  componentDidMount() {
    storage.load('userInfo', (data) => {
      this.setState({
        head: data.head,
        token: data.token,
        user_id: data.user_id
      })
    })
    fetch('http://192.168.1.151:3000/api/clock/getAllClock', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': this.state.token
      },
    }).then((response) => response.json())
      .then((json) => {
        console.log(json.data)
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <View style={[styles.container]}>
        <FlatList
          style={{ height: '80%' }}
          scrollEnabled={false}
          data={[
            { key: "1.5" },
            { key: "2" },
            { key: "3" },
            { key: "4" },
            { key: "5" },
            { key: "4" },
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
              </View>
            </View>
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C9575",
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
})
