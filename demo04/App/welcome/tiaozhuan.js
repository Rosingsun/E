import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import welcome from './welcome';
import Splash from './daojishi';
//import { TabNavigator } from "react-navigation";
import { StatusBar } from 'react-native'
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
export default class Tiaozhuan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowLauncher: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShowLauncher: false })
    }, 10000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Splash/>
        {/* <StatusBar barStyle='dark-content' backgroundColor='rgba(0,0,0,1)' translucent={true}></StatusBar> */}
        {
          this.state.isShowLauncher?<App />:<Hello />
        }
      </View>

    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})