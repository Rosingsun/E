import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


import Eline from '../PersonalCenter/Eline';
import Exianlu from '../PersonalCenter/Exianlu';
import Eshouchang from '../PersonalCenter/Eshouchang';
import Edaka from '../PersonalCenter/Edaka';
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
                        width: 20,
                        marginLeft: 40,
                        marginBottom: 5,
                    },
                    labelStyle: {
                        fontSize: 20,
                        borderRadius: 20,
                    },

                    tabStyle: {
                        height: 45,
                    },
                    activeBackgroundColor: "red"
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
