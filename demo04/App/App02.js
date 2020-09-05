import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

//登录欢迎页面
import dengru from './load/dengru';
import load from './load/load';
import MainFadeView from './welcome/welcome';
import Splash from './welcome/daojishi';
import Register from './load/register';
//底部导航栏的主要页面
import Home from '../App/HomePage/HomePage';
import Discovery from './discoveryPage/discovery';
import choicePhoto from './publish/choicePthoto';
import MessageSum from './News/MessageSum';
//首页
//首页顶部导航
import Search from './HomePage/detail/Ranking';
import focus from './HomePage/focus';
import local from './HomePage/local';
import recommend from './HomePage/recommend';
import exchange from './HomePage/detail/exchange';
//发布页面
import Section from './publish/publishDetails/Section';
import spread from './publish/publishDetails/spread';
import topic from './publish/publishDetails/topic';

// import 
import BaiduMap from './Map/baiduMap';
// 发现页面
import choiceCity from './discoveryPage/moreLine/choiceCity';
import Line from './discoveryPage/moreLine/Line';
import dakaAll from './discoveryPage/daka/dakaAll';
import chating from './News/chating/chating';
import qiandao from './discoveryPage/daka/qiandao';
import MyCustomCarousel from './discoveryPage/card';
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
//其他人的个人中心
import EPersonalCenterSum from './PersonalCenter/OtherPersion/EOpersonnalCenterSum';
import EOline from './PersonalCenter/OtherPersion/EOline';
import EOxianlu from './PersonalCenter/OtherPersion/EOxianlu';
import EOshouchang from './PersonalCenter/OtherPersion/EOshouchang';
import EOdaka from './PersonalCenter/OtherPersion/EOdaka';
//消息页面
import thumbs from './News/thumbs';
import leaveMessage from './News/leaveMessage';
import Message from './News/Message';
import trade from './News/trade';
import MainText from './News/NewsDetails/MainText';
import ChatInfoMation from './Chat/ChatInfoMation';
import ChatRecord from './Chat/ChatRecord';
import complaint from './News/NewsDetails/complaint';

//定义各类导航栏的变量

const HomaPageTabNavigation = createMaterialTopTabNavigator();
const PersonalTabNavigation = createMaterialTopTabNavigator();
const EOPersonalTabNavigation = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
// 各类导航的编写
//首页顶部导航
export function HomePageDetails() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          padding: 0,
          height: '100%',
        },
        tabStyle: {
          width: 80,
          padding: 0,
          borderBottomColor: "#000000",
          height: 30,

        },
        style: {
          backgroundColor: '#EFEFEF',
          height: 30,
          padding: 0,
          elevation: 0,
        },
        indicatorStyle: {
          backgroundColor: "#FFB16C",
          height: 3,
          width: 30,
          borderRadius: 111,
          marginLeft: 25,
        },
      }}
    >
      <TopTab.Screen
        name="recommend"
        component={recommend}
        options={{
          title: '推荐',
        }}
      />
      <TopTab.Screen
        name="focus"
        component={focus}
        options={{ title: '关注' }}
      />
      <TopTab.Screen
        name="local"
        component={local}
        options={{ title: '本地' }}
      />
    </TopTab.Navigator>
  );
}
//其他人个人中心页面
export function EOPersonalTab() {
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
      <PersonalTabNavigation.Screen name="EOline" component={EOline} options={{ title: 'E游记' }} />
      <PersonalTabNavigation.Screen name="EOxianlu" component={EOxianlu} options={{ title: 'E线路', }} />
      <PersonalTabNavigation.Screen name="EOshouchang" component={EOshouchang} options={{ title: 'E收藏' }} />
      <PersonalTabNavigation.Screen name="EOdaka" component={EOdaka} options={{ title: 'E打卡' }} />
    </PersonalTabNavigation.Navigator>
  );
}
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
      <Tab.Screen name="choicePhoto" component={choicePhoto}
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
      <Stack.Screen name="dengru" component={dengru} />
      <Stack.Screen name="bottomTab" component={bottomTab} />
      {/* 欢迎页面 */}
      <Stack.Screen name="load" component={load} />
      <Stack.Screen name="MainFadeView" component={MainFadeView} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Register" component={Register} />
      {/* 还未定义 */}

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

      {/* 发布页面详情页 */}
      <Stack.Screen name="Section" component={Section} />
      <Stack.Screen name="topic" component={topic} />
      <Stack.Screen name="spread" component={spread} />
      {/* /。/消息页面 */}
      <Stack.Screen name="thumbs" component={thumbs} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="leaveMessage" component={leaveMessage} />
      <Stack.Screen name="trade" component={trade} />
      <Stack.Screen name="MainText" component={MainText} />
      {/* /。。/消息页面详情 */}
      <Stack.Screen name="chating" component={chating} />
      <Stack.Screen name="complaint" component={complaint} />

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
      {/* 观看其他用户的个人中心 */}
      <Stack.Screen name="EPersonalCenterSum" component={EPersonalCenterSum} />

      {/* 发现 */}
      <Stack.Screen name="PersonalCenterSum" component={PersonalCenterSum} />
      <Stack.Screen name="qiandao" component={qiandao} />
      <Stack.Screen name="MyCustomCarousel" component={MyCustomCarousel} />
      <Stack.Screen name="ChatInfoMation" component={ChatInfoMation} />
      <Stack.Screen name="ChatRecord" component={ChatRecord} />
      {/* 首页 */}
      <Stack.Screen name="exchange" component={exchange} />
      <Stack.Screen name="Discovery" component={Discovery} />
      
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
