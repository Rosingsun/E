import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Picker from 'react-native-picker';

const App = () => {

  let data = ['男','女'];
  // for(var i=0;i<100;i++){
  //     data.push(i);
  // }
  Picker.init({
    pickerData: data,
    selectedValue: [59],
    onPickerConfirm: data => {
        console.log(data);
    },
    onPickerCancel: data => {
        console.log(data);
    },
    onPickerSelect: data => {
        console.log(data);
    }
});
Picker.show();
  return (
    <View><Text
      // onPress={()=>{
      //   Picker.show();
      // }}
    >111</Text></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  title: {
    fontSize: 32,
  },
});

export default App;
