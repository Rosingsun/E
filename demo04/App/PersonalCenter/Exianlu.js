import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
var data = [
  { key: "1" },
]

function userMap(data) {
  return (
    <View style={{ width: '96%', marginLeft: '2%', marginTop: 10, backgroundColor: "red", height: 100, borderWidth: 8, borderColor: "#fff", borderRadius: 1 }}>
      <ImageBackground style={{ height: '100%', width: "100%", }} source={{ uri: "http://pic.51yuansu.com/backgd/cover/00/00/60/5b4c773ae26b1.jpg!/fw/780/quality/90/unsharp/true/compress/true" }}>
        <View style={{ paddingVertical: 5, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>上城区到下城区</Text>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Byme</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
export default class Exianlu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.container]}>

        {
          data.map((item) => {
            return (
              userMap(item)
            )
          })
        }

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
})
