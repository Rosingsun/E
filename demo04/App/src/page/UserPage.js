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
        <View>
          <TouchableWithoutFeedback 
          
          >
          <Icon name="id-card" size={15} color="red" />
          </TouchableWithoutFeedback>
          <Icon name="id-card" size={25} color="yellow" />
          <Icon name="database" size={35} color="black" />
        </View>
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
            backgroundColor: 'powderblue', style: {
              justifyContent: "center"
            }
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
