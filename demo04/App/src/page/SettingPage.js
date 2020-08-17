
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
// import ImagePicker from 'react-native-image-picker';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

// 上传图片/这里即头像
const photoOptions = {
  title: '请选择',
  multiple: true,
  quality: 1,
  cancelButtonTitle: '取消',
  chooseFromLibraryButtonTitle: '选择相册',
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


function choosePicker(){
  ImagePicker.launchImageLibrary(photoOptions, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      // let 
      this.setState({
        avatarSource: source
      });
    }
  });
}

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
          onpress={
            choosePicker()
          } >
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

