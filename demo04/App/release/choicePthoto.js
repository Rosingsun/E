
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,

} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

// 上传图片/选择游记的图片
const photoOptions = {
  title:'请选择',
  quality: 0.8,
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  allowsEditing: true,
  noData: false,
  storageOptions: {
      skipBackup: true,
      path: 'images'
  }
};
function choosePicker(){
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
          let source = { uri: response.uri };
          // You can also display the image using data:
          let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
              avatarSource: source
          });
      }
  });
}
export default class choicePhoto extends Component{
  constructor(props){
    super(props)
    this.state={ 
    }
  }
  render(){
    return(
        <View>
          <Image source={{uri:this.state.avatarSource}} style={{height:200,width:200}}/>
        </View>
        
    )
  }
}
// }
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red"
  },
});

