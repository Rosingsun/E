
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
  _fetchImage(image) {

    let url = "http://192.168.56.1:3000/api/users/updataPersonal"
    let head = { uri: image.path, type: 'multipart/form-data', name: 'image.png' };

    let formData = new FormData();
    formData.append('file', head); // 这里的 file 要与后台名字对应。

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData,
    }).then(function (response) {
        console.log("response", response);
        return response.json();
    })
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
              width: 400,
              height: 400,
              multiple: true,
              cropping: true,
              enableRotationGesture: true,
            }).then(images => {
              console.log(images)
              this.props.navigation.push("spread",{avatarSource:this.state.avatarSource});
              _fetchImage(image);
              this.setState({
                avatarSource: source
            });
            })
          }>
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

