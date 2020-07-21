import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';



export default class onLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchPass: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_view}>
          <Text style={styles.title_text}>
            Load
         </Text>
        </View>

        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder='input your account'
            placeholderTextColor='#fff'
            onChangeText={(text) => {
              this.setState({ searchText: text });
            }} />
          <TextInput
            style={styles.password}
            placeholder='input your password'
            placeholderTextColor='#fff'
            onChangeText={(text) => {
              this.setState({ searchPass: text });
            }} />
          <Button
            style={styles.button}
            title='搜索'
            onPress={() => {
              Alert.alert('您输入的账号为：' + this.state.searchText
                + "您输入的密码为：" + this.state.searchPass)


              fetch('http://10.0.2.2:3000/insert/', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  a: this.state.searchText,
                  b: this.state.searchPass
                })
              })
                .then((response) => {
                  console.log("/n"+response+"/n");
                })
                .catch((error) => {
                  console.log(error);
                });

            }} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title_view: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27b5ee',
  },
  title_text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  search: {
    flex: 1,
    flexDirection: 'column',
    height: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  password: {
    height: 60,
    width: 300,
    backgroundColor: 'gray'
  },
  input: {
    // flex:1,
    height: 60,
    width: 300,
    borderColor: 'red',
    backgroundColor: 'green'
  },

  button: {
    flex: 1,
  }
});