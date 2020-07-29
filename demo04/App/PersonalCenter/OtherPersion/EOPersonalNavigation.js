import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


import Eline from '../daohangxiding/Eline';
import Exianlu from '../daohangxiding/Exianlu';
import Eshouchang from '../daohangxiding/Eshouchang';
import Edaka from '../daohangxiding/Edaka';
const Tab = createMaterialTopTabNavigator();
export default function PersonalCenterNavigation() {
    return (
        <NavigationContainer
            independent="true"
        >
            <Tab.Navigator
                tabBarOptions={{
                    //底部横线样式
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: "#FFB16C",
                        width: '10%',
                        marginLeft: '5%',
                        marginBottom:5,
                        // borderWidth:0
                    },
                    labelStyle: {
                        fontSize: 20,
                        borderRadius: 20,
                        // backgroundColor: "red"
                    },

                    tabStyle: {
                        // backgroundColor: "#6d6d6d",
                        height:45,
                    },
                }}

            >
                <Tab.Screen
                    name="Eline"
                    component={Eline}
                    options={{ title: 'E游记' }}
                />
                <Tab.Screen
                    name="Exianlu"
                    component={Exianlu}
                    options={{ title: 'E线路' }}
                />
                <Tab.Screen
                    name="Eshouchang"
                    component={Eshouchang}
                    options={{ title: 'E收藏' }}
                />
                <Tab.Screen
                    name="Edaka"
                    component={Edaka}
                    options={{ title: 'E打卡' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
