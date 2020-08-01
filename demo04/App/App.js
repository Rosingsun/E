import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../App/HomePage/HomePage';
import Discovery from './DiscoveryPage/discovery';
import Setting from './src/page/SettingPage';
import MessageSum from './News/MessageSum';
import PersonalCenterSum from './PersonalCenter/personnalCenterSum';
import welcom from './welcome/welcome';
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
                    activeBackgroundColor:"red"
                  },
                  
          // 选中状态的背景颜色
          activeBackgroundColor: "black",
          // 未选中状态的颜色
          inactiveBackgroundColor: "green",
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
            <Stack.Screen name="PersonalCenterSum" component={PersonalCenterSum}
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

        <NavigationContainer
            independent="true"
        >
            <MyStack />
        </NavigationContainer>
    );
}
