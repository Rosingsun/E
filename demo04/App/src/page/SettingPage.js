
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Alert,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

export default class choicePhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: '',
      imgURL: '',
    }
  }


  render() {
    return (
      <View style={[styles.container]}>
        <Image source={{ uri: this.state.avatarSource }} style={{ height: 200, width: 200, backgroundColor: "red" }} />
        <TouchableWithoutFeedback
          style={{ padding: 30, backgroundColor: "skyblue", color: "#fff" }}
          title="选择"
            onPress={
              ImagePicker.openPicker({
                  multiple: true,
                  enableRotationGesture:true,
              }).then(images => {
                  console.log(images);
              })
            }
            
          >
          <Text>111</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center"
  },
});

