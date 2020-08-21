import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


//底部导航栏的主要页面
import Home from '../App/HomePage/HomePage';
import Discovery from './DiscoveryPage/discovery';
import Setting from './src/page/SettingPage';
import MessageSum from './News/MessageSum';
//首页
//首页顶部导航
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
import Eline from './PersonalCenter/Eline';
import Exianlu from './PersonalCenter/Exianlu';
import Eshouchang from './PersonalCenter/Eshouchang';
import Edaka from './PersonalCenter/Edaka';



// 个人中心详细页面
import PersonalCenterSum from './PersonalCenter/personnalCenterSum';
import UserSetting from './PersonalCenter/PersonalDetail/Setting';
import UserAgreement from './PersonalCenter/PersonalDetail/agreement';
import Privacy from './PersonalCenter/PersonalDetail/Privacy';
import changePersonalInfoMation from './PersonalCenter/PersonalDetail/changePersonalInfomation';
import mylevel from './PersonalCenter/PersonalDetail/myLevel';
import renderCalendarWithCustomMarkingType from './PersonalCenter/PersonalDetail/rili';
import ProductionRoute from './PersonalCenter/PersonalDetail/ProductionRoute';
import dakaPlaceChoice from './PersonalCenter/PersonalDetail/dakaPlaceChoice';
import improveInformation from './PersonalCenter/PersonalDetail/ImproveInformation';
//消息页面
import thumbs from './News/thumbs';
import leaveMessage from './News/leaveMessage';
import Message from './News/Message';
import trade from './News/trade';
import MainText from './News/NewsDetails/MainText';


//定义各类导航栏的变量

const HomaPageTabNavigation = createMaterialTopTabNavigator();
const PersonalTabNavigation = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
// 各类导航的编写
//个人中心页面

export function PersonalTab() {
  return (
    <PersonalTabNavigation.Navigator
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
      }}>
      <PersonalTabNavigation.Screen name="Eline" component={Eline} options={{ title: 'E游记' }} />
      <PersonalTabNavigation.Screen name="Exianlu" component={Exianlu} options={{ title: 'E线路', }} />
      <PersonalTabNavigation.Screen name="Eshouchang" component={Eshouchang} options={{ title: 'E收藏' }} />
      <PersonalTabNavigation.Screen name="Edaka" component={Edaka} options={{ title: 'E打卡' }} />
    </PersonalTabNavigation.Navigator>
  );
}
//消息页面的顶部导航，输出，给其他页面调用
export function MessageTopTab() {
  return (
    <HomaPageTabNavigation.Navigator
      tabBarOptions={{
        labelStyle: {
          backgroundColor: "#fff"
        },
        //选中状态的选项卡的文本颜色
        activeTintColor: "#6C9575",
        activeTintColor: "#43949B",
        // 未选中的选项卡的颜色
        inactiveTintColor: "#000000",
        adaptive: true,
        // 导航栏状态
        tabStyle: {
          // backgroundColor: "red",
        },
        // 样式设置
        style: {
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          height: 50,
          elevation: 0,
        },
        //底部横条样式设置
        indicatorStyle: {
          height: 0,
        },
        iconStyle: {
          width: '100%',
        },
        //显示标签和显示icon
        showLabel: false,
        showIcon: true,
        tabBarVisible: false,
        // mode:"model",
      }}
    >
      <HomaPageTabNavigation.Screen
        name="thumbs"
        component={thumbs}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={'like2'} size={28} color={color} />
          ),

        }}
      />
      <HomaPageTabNavigation.Screen
        name="leaveMessage"
        component={leaveMessage}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={'message1'} size={28} color={color} />
          ),
        }}
      >
      </HomaPageTabNavigation.Screen>
      <HomaPageTabNavigation.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name={'email'} size={28} color={color} />
          ),
        }} />
      <HomaPageTabNavigation.Screen
        name="trade"
        component={trade}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'envelope-open-text'} size={28} color={color} />
          ),
        }}
      />
    </HomaPageTabNavigation.Navigator>
  );
}
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
        options={{ tabBarLabel: '首页', tabBarIcon: ({ color }) => (<FontAwesome name={'home'} size={25} color={color} />), }}>
      </Tab.Screen>
      <Tab.Screen name="Discovery"
        component={Discovery}
        options={{ tabBarLabel: '发现', tabBarIcon: ({ color }) => (<FontAwesome name={'binoculars'} size={20} color={color} />), }}>
      </Tab.Screen>
      <Tab.Screen name="Setting" component={Setting}
        options={{ tabBarLabel: '发一个', tabBarIcon: ({ color }) => (<FontAwesome name={'plus'} size={25} color={color} />), }} />
      <Tab.Screen name="MessageSum"
        component={MessageSum}
        options={{ tabBarLabel: '消息', tabBarIcon: ({ color }) => (<FontAwesome name={'twitch'} size={25} color={color} />), }}>
      </Tab.Screen>
      <Tab.Screen name="PersonalCenterSum"
        component={PersonalCenterSum}
        options={{ tabBarLabel: '我', tabBarIcon: ({ color }) => (<FontAwesome name={'user'} size={25} color={color} />), }}>
      </Tab.Screen>
    </Tab.Navigator>
  );
}
// 堆栈导航
function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      {/* 底部导航栏 */}
      <Stack.Screen name="MyTabs" component={bottomTab} />
      <Stack.Screen name="MessageTopTab" component={MessageTopTab} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="BaiduMap" component={BaiduMap} />
      <Stack.Screen name="choiceCity" component={choiceCity} />
      <Stack.Screen name="Line" component={Line} />
      <Stack.Screen name="dakaAll" component={dakaAll} />
      <Stack.Screen name="UserSetting" component={UserSetting} />
      <Stack.Screen name="UserAgreement" component={UserAgreement} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="renderCalendarWithCustomMarkingType" component={renderCalendarWithCustomMarkingType} />
      {/* /。/消息页面 */}
      <Stack.Screen name="thumbs" component={thumbs} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="leaveMessage" component={leaveMessage} />
      <Stack.Screen name="trade" component={trade} />
      <Stack.Screen name="MainText" component={MainText} />
      {/* /。。/消息页面详情 */}
      <Stack.Screen name="chating" component={chating} />
      {/* /。/个人中心页面 */}
      <Stack.Screen name="Eline" component={Eline} />
      <Stack.Screen name="Exianlu" component={Exianlu} />
      <Stack.Screen name="Eshouchang" component={Eshouchang} />
      <Stack.Screen name="Edaka" component={Edaka} />
      {/* /。。/个人中心详情页面 */}
      <Stack.Screen name="changePersonalInfoMation" component={changePersonalInfoMation} />
      <Stack.Screen name="mylevel" component={mylevel} />
      <Stack.Screen name="ProductionRoute" component={ProductionRoute} />
      <Stack.Screen name="dakaPlaceChoice" component={dakaPlaceChoice} />
      <Stack.Screen name="improveInformation" component={improveInformation} />
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
