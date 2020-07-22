import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Home from './src/page/HomePage';
import Home from '../App/HomePage/HomePage';
import Discovery from './DiscoveryPage/Discovery';
import Setting from './src/page/SettingPage';
// import User from './src/page/UserPage';
import onLoad from './src/page/onLoad';
import MessageSum from './News/MessageSum';
//下面是页面之内需要跳转的
//消息页面
//底部材料导航栏
const Stack = createMaterialBottomTabNavigator();

function MyStack() {

    return (
        <Stack.Navigator
            //刚进入时候的第一个可见页面
            initialRouteName="home"
            //激活状态的图标颜色
            activeColor="#FFB16C"
            //熄灭状态图标颜色
            inactiveColor="#6d6d6d"
            //底部导航栏样式设置
            barStyle={{
                backgroundColor: '#ffffff00',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                width: "102%",
                marginLeft: "-1%",
                padding: 0,
                margin: 0,
                position: "absolute"
            }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'home'} size={25} color={color} />
                    ),
                }}>
            </Stack.Screen>
            <Stack.Screen name="Discovery" component={Discovery}
                options={{
                    tabBarLabel: '发现',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'binoculars'} size={20} color={color} />
                    ),
                }}
            />
            <Stack.Screen name="Setting" component={Setting}
                options={{
                    tabBarLabel: '发一个',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'plus'} size={25} color={color} />
                    ),
                }}
            />
            <Stack.Screen name="MessageSum" component={MessageSum}
                options={{
                    tabBarLabel: '消息',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'twitch'} size={25} color={color} />
                    ),
                }}
            />
            <Stack.Screen name="onLoad" component={onLoad}
                options={{
                    tabBarLabel: '我',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'user'} size={25} color={color} />
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
