/**
 * @format
 */

import {AppRegistry} from 'react-native';
//正常主页
// import App from './App/navigation/welcomeNavigation';
// import MyStack from './App/App';
//复选框
import checkBoX from './App/src/page/checkBox'
//art demo
// import App from './App/src/page/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => checkBoX);
