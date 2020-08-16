
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

// 上传图片/选择游记的图片
const photoOptions = {
  title: '请选择',
  quality: 0.8,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
export default class choicePhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  ChoosePicker() {
    ImagePicker.showImagePicker(photoOptions, (response) => {
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
        // let source = { uri: response.uri };
        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        {
          () => {
            ImagePicker.launchImageLibrary(options, (response) => {
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
                // let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                  avatarSource: source
                });
              }
            });
          }
        }
      </View>

    )
  }
}
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

