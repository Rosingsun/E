import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//导入需求页面
import dengru from '../load/dengru';
import Search from '../load/load';
import MainFadeView from '../welcome/welcome';
import Splash from '../welcome/daojishi';
import App from '../App';
import Register from'../load/register';
import MainText from'../News/NewsDetails/MainText';
import leaveMessage from'../News/leaveMessage';
const Stack = createStackNavigator();
//这边导航功能主要为页面之间的跳转
function PageJomp() {
  return (
    <NavigationContainer
      independent="true"
      mode="card"
      animationEnabled={true}
      animationTypeForReplace="pop"
    >
      <Stack.Navigator
        initialRouteName="MainFadeView"
        tabBarOptions={{
          showLabel: false,
        }}
        headerMode="none"
      >
        {/* 选择登陆还是注册 */}
        <Stack.Screen name="dengru" component={dengru} />
        {/* 登陆页面 */}
        <Stack.Screen name="Search" component={Search} />
        {/* 注册页面 */}
        <Stack.Screen name="Register" component={Register} />
        {/* 登陆成功后的主页 */}
        <Stack.Screen name="App" component={App} />
        {/* 倒计时，只需要传入导航，不需要调用到前端页面 */}
        <Stack.Screen name="Splash" component={Splash} />
        {/* 进入的时候的欢迎页面 */}
        <Stack.Screen name="MainFadeView" component={MainFadeView} />
        {/* 消息详情页面 */}
        <Stack.Screen name="MainText" component={MainText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PageJomp;
