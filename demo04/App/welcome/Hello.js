import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'react-native'

const Hello = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent={true}></StatusBar>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default Hello;
