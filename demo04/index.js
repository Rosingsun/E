/**
 * @format
 */

import {AppRegistry} from 'react-native';
//正常主页
import App from './App/App02';
// import App from './App/App';
//复选框
// import App from './App/src/page/demo01'

//art demo
// import App from './App/src/page/App';

// testPage
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
