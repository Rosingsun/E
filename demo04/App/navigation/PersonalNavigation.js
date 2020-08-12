import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Eline from '../PersonalCenter/Eline';
import Exianlu from '../PersonalCenter/Exianlu';
import ProductionRoute from '../PersonalCenter/PersonalDetail/ProductionRoute';
import Eshouchang from '../PersonalCenter/Eshouchang';
import Edaka from '../PersonalCenter/Edaka';
import dakaPlaceChoice from'../PersonalCenter/PersonalDetail/dakaPlaceChoice';
import improveInformation from '../PersonalCenter/PersonalDetail/ImproveInformation';
const Tab = createMaterialTopTabNavigator();
const ExianluStack = createStackNavigator();
export default function PersonalCenterNavigation() {
    return (
        <NavigationContainer
            independent="true"
            headerShown="none"
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
                    activeBackgroundColor: "red",
                    headerShown: false
                }}

            >
                <Tab.Screen
                    name="Eline"
                    component={Eline}
                    options={{ title: 'E游记' }}
                />
                <Tab.Screen
                    name="Exianlu"
                    // component={Exianlu}
                    options={{
                        title: 'E线路',
                        headerShown: false
                    }}
                >
                    {() => {
                        return (
                            <ExianluStack.Navigator
                                headerMode="none"
                            >
                                <ExianluStack.Screen name="Exianlu" component={Exianlu} />
                                <ExianluStack.Screen name="ProductionRoute" component={ProductionRoute}
                                    options={{
                                        headerShown: false, // 是否渲染导航栏，默认 true
                                    }}
                                />
                                <ExianluStack.Screen name="dakaPlaceChoice" component={dakaPlaceChoice} />
                                <ExianluStack.Screen name="improveInformation" component={improveInformation} />
                                
                            </ExianluStack.Navigator>
                        )
                    }}
                </Tab.Screen>
                <Tab.Screen
                    name="Eshouchang"
                    component={Eshouchang}
                    options={{ title: 'E收藏' }}
                />
                <Tab.Screen name="Edaka" component={Edaka} options={{ title: 'E打卡' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
