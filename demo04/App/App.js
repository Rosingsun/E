import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../App/HomePage/HomePage';
import Discovery from './DiscoveryPage/discovery';
import Setting from './src/page/SettingPage';
import MessageSum from './News/MessageSum';

//发布页面
// import 

import Search from './HomePage/detail/Ranking';
import BaiduMap from './Map/baiduMap';
// 发现页面
import choiceCity from './DiscoveryPage/moreLine/choiceCity';
import Line from './DiscoveryPage/moreLine/Line';
import dakaAll from './DiscoveryPage/daka/dakaAll';
//个人中心页面
import PersonalCenterSum from './PersonalCenter/personnalCenterSum';
import UserSetting from './PersonalCenter/PersonalDetail/Setting';
import UserAgreement from './PersonalCenter/PersonalDetail/agreement';
import Privacy from './PersonalCenter/PersonalDetail/Privacy';
import changePersonalInfoMation from './PersonalCenter/PersonalDetail/changePersonalInfomation';
import ProductionRoute from './PersonalCenter/PersonalDetail/ProductionRoute';
//下面是页面之内需要跳转的
//消息页面  
//底部材料导航栏
const Stack = createMaterialBottomTabNavigator();
const changeStack = createStackNavigator();
const DiscoveryStack = createStackNavigator();
const PersonalStack = createStackNavigator();
function MyStack() {

    return (
        <Stack.Navigator
            //刚进入时候的第一个可见页面
            initialRouteName="home"
            //激活状态的图标颜色
            activeColor="#6C9575"
            //熄灭状态图标颜色
            inactiveColor="#fff"
            //底部导航栏样式设置
            barStyle={{
                backgroundColor: '#2F3843',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                width: "102%",
                marginLeft: "-1%",
                padding: 0,
                margin: 0,
                // height:10,
                // elevation:10,
            }}
            tabBarOptions={{
                style: {
                    overflow: "hidden",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    height: 50,
                    elevation: 10,
                    marginTop: 10,
                    elevation: 0,
                    activeBackgroundColor: "red"
                },
                // 选中状态的背景颜色
                activeBackgroundColor: "black",
                // 未选中状态的颜色
                inactiveBackgroundColor: "green",
            }}>
            <Stack.Screen name="Home"
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'home'} size={25} color={color} />
                    ),
                }}>
                {() => {
                    return (
                        <changeStack.Navigator headerMode="none">
                            <changeStack.Screen name="Home" component={Home} />
                            <changeStack.Screen name="Search" component={Search} />
                        </changeStack.Navigator>
                    )
                }}
            </Stack.Screen>
            <Stack.Screen name="Discovery"
                //  component={Discovery}
                options={{
                    tabBarLabel: '发现',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'binoculars'} size={20} color={color} />
                    ),
                }}>
                {() => {
                    return (
                        <DiscoveryStack.Navigator
                            headerMode="none"
                        >
                            <DiscoveryStack.Screen name="Discovery" component={Discovery} />
                            <DiscoveryStack.Screen name="BaiduMap" component={BaiduMap} />
                            <DiscoveryStack.Screen name="choiceCity" component={choiceCity} />
                            <DiscoveryStack.Screen name="Line" component={Line} />
                            <DiscoveryStack.Screen name="dakaAll" component={dakaAll} />
                        </DiscoveryStack.Navigator>
                    )
                }}
            </Stack.Screen>
            <Stack.Screen name="Setting" component={Setting}
                options={{
                    tabBarLabel: '发一个',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'plus'} size={25} color={color} />
                    ),
                }}/>
            <Stack.Screen name="MessageSum"
                component={MessageSum}
                options={{
                    tabBarLabel: '消息',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'twitch'} size={25} color={color} />
                    ),
                }}>
            </Stack.Screen>
            <Stack.Screen name="PersonalCenterSum"
            //  component={PersonalCenterSum}
                options={{
                    tabBarLabel: '我',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'user'} size={25} color={color} />
                    ),
                }}>
                {() => {
                    return (
                        <PersonalStack.Navigator headerMode="none">
                            <PersonalStack.Screen name="PersonalCenterSum" component={PersonalCenterSum} />
                            <PersonalStack.Screen name="UserSetting" component={UserSetting} />
                            <PersonalStack.Screen name="UserAgreement" component={UserAgreement} />
                            <PersonalStack.Screen name="Privacy" component={Privacy} />
                            <PersonalStack.Screen name="changePersonalInfoMation" component={changePersonalInfoMation} />                            
                        </PersonalStack.Navigator>
                    )
                }}
            </Stack.Screen>

        </Stack.Navigator>
    );
}

export default function App() {
    return (

        <NavigationContainer
            independent="true"
        >
            <MyStack />
        </NavigationContainer>
    );
}
