import * as React from 'react';
import { Text, View, StatusBar,StyleSheet,TouchableWithoutFeedback  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!
      </Text>
    </View>
  );
}
function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function User() {
  return (
    <NavigationContainer
      independent="true"
    >
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 100 },
          style: {
            backgroundColor: 'skyblue', 
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Setting2" component={SettingsScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
