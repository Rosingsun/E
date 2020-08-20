import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//底部导航栏的主要页面
import Home from '../App/HomePage/HomePage';
import Discovery from './DiscoveryPage/discovery';
import Setting from './src/page/SettingPage';
import MessageSum from './News/MessageSum';
//首页
//首页顶部导航
import MessageDetails from './navigation/MessageNavigation'
import Search from './HomePage/detail/Ranking';
import focus from './HomePage/focus';
import local from './HomePage/local';
import recommend from './HomePage/recommend';
//发布页面
// import 
import BaiduMap from './Map/baiduMap';
// 发现页面
import choiceCity from './DiscoveryPage/moreLine/choiceCity';
import Line from './DiscoveryPage/moreLine/Line';
import dakaAll from './DiscoveryPage/daka/dakaAll';
import chating from './News/chating/chating';
//个人中心页面
import PersonalCenterSum from './PersonalCenter/personnalCenterSum';
import UserSetting from './PersonalCenter/PersonalDetail/Setting';
import UserAgreement from './PersonalCenter/PersonalDetail/agreement';
import Privacy from './PersonalCenter/PersonalDetail/Privacy';
import changePersonalInfoMation from './PersonalCenter/PersonalDetail/changePersonalInfomation';
import ProductionRoute from './PersonalCenter/PersonalDetail/ProductionRoute';
import mylevel from './PersonalCenter/PersonalDetail/myLevel';
import renderCalendarWithCustomMarkingType from './PersonalCenter/PersonalDetail/rili';
//消息页面
// 消息01
// 消息02
// 消息03
// 消息04

//定义各类导航栏的变量

const HomaPageTabNavigation = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
// 各类导航的编写
//消息页面的顶部导航
// function TabNavigation(){
//     return(

//     )
// }

// 底部导航
function bottomTab() {

    return (
        <Tab.Navigator
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
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'home'} size={25} color={color} />
                    ),
                }}>
            </Tab.Screen>
            <Tab.Screen name="Discovery"
                component={Discovery}
                options={{
                    tabBarLabel: '发现',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'binoculars'} size={20} color={color} />

                    ),
                }}>
            </Tab.Screen>
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarLabel: '发一个',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'plus'} size={25} color={color} />
                    ),
                }} />
            <Tab.Screen name="MessageSum"
                component={MessageSum}
                options={{
                    tabBarLabel: '消息',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'twitch'} size={25} color={color} />
                    ),
                }}>
            </Tab.Screen>
            <Tab.Screen name="PersonalCenterSum"
                component={PersonalCenterSum}
                options={{
                    tabBarLabel: '我',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'user'} size={25} color={color} />
                    ),
                }}>
            </Tab.Screen>

        </Tab.Navigator>
    );
}

// 堆栈导航
function MyStack() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="MyTabs" component={bottomTab} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="BaiduMap" component={BaiduMap} />
            <Stack.Screen name="choiceCity" component={choiceCity} />
            <Stack.Screen name="Line" component={Line} />
            <Stack.Screen name="dakaAll" component={dakaAll} />
            <Stack.Screen name="chating" component={chating} />
            <Stack.Screen name="UserSetting" component={UserSetting} />
            <Stack.Screen name="UserAgreement" component={UserAgreement} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="changePersonalInfoMation" component={changePersonalInfoMation} />
            <Stack.Screen name="mylevel" component={mylevel} />
            <Stack.Screen name="renderCalendarWithCustomMarkingType" component={renderCalendarWithCustomMarkingType} />
            
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
