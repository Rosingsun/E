import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import welcome from './welcome';
import Splash from './daojishi';
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