import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/page/HomePage';
import loadDB from './src/page/readDB';
import Setting from './src/page/SettingPage';
import User from './src/page/UserPage';
import onLoad from './src/page/onLoad';


let getPgs = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    await Geolocation.init({
      ios: "",
      android: "41f8024a490b74f0ff62bce34f66c2a4"
    })
    // 间隔时间
    Geolocation.setOptions({
      interval: 800,
      distanceFilter: 20
    })
    Geolocation.addLocationListener(location => {
      if (location == null) {
        console.log("aaa")
      } else {
        console.log(location)
      }
    });
    //启动
    Geolocation.start();
  }
}
getPgs();
// const Stack = createBottomTabNavigator();
const Stack = createMaterialBottomTabNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'home'} size={28} color={color} />
          ),
        }}
      />
      <Stack.Screen name="loadDB" component={loadDB}
        options={{
          tabBarLabel: 'loadDB',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'bell'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen name="Setting" component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'github'} size={28} color={color} />
          ),
        }}
      />
      <Stack.Screen name="User" component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name={'bug'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen name="onLoad" component={onLoad}
        options={{
          tabBarLabel: 'onLoad',
          tabBarIcon: ({ color }) => (
            <FontAwesome name={'github'} size={28} color={color} />
          ),
        }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
