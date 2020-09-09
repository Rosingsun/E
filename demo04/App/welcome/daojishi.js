import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    Alert,
    StatusBar,
} from 'react-native';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
var timeChange;
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 5,
        }
    }
    componentWillMount() {
        //启动包含定时器的方法
        this.startTimer()
    }
    startTimer() {
       
        //关键在于用time取代state中的time，进行计算和判断，因为state中的time在render里不断刷新，但在方法中不会进行刷新
        var time = this.state.time;
        const clock = () => {
            if (time > 0) {
                //当time>0时执行更新方法
                time = time - 1;
                this.setState({
                    time: time,
                });
            } else {
                //当time=0时执行终止循环方法
                clearInterval(timeChange);
                //当倒计时时间=0时，进入项目，这里使用了路由跳转
                this.props.navigation.navigate('dengru');
            }
        };
        //每隔一秒执行一次clock方法
        timeChange = setInterval(clock, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        borderRadius: 2,
                        justifyContent: 'center',
                        backgroundColor: 'rgba(225,225,255,.4)',
                        width: 60,
                        height: 25,
                        alignItems: 'center',
                    }}
                    onPress={()=>{
                        clearInterval(timeChange);
                        this.props.navigation.navigate("dengru");
                    }}
                >
                    <Text style={{ fontSize: 14, color: '#fff' }}>跳过{this.state.time}s</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top: 50,
        right: 20,
    }
});