import React from 'react';
import {
    Animated,
    Text,
    View,
    Easing,
    InteractionManager,
    Image,
    TouchableOpacity,
    StatusBar,
    TouchableNativeFeedback
} from 'react-native';
import Splash from './daojishi';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

class FadeView extends React.Component {
    state = {
        //二维坐标
        translateValue: new Animated.ValueXY({ x: 0, y: 0 })
    };
    componentDidMount() {
        Animated.timing(                  // 随时间变化而执行动画
            this.state.translateValue,
            {
                toValue: {
                    x: -50,
                    y: 50,
                },                   // 透明度最终变为1，即完全不透明
                duration: 10000,              // 让动画持续一段时间
                // delay:1000,
                // easing:Easing.bounce(20)
            }
        ).start();
    }
    render() {
        //使用专门的可动画化的View组件
        return (<Animated.View
            style={{
                ...this.props.style,
                transform: [
                    { translateX: this.state.translateValue.x },
                    { translateY: this.state.translateValue.y },
                ]
            }}>
            {this.props.children}
        </Animated.View>);
    }
}
// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default class MainFadeView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <FadeView style={{ width: 800, height: 1000 }}>
                    <Image source={{ uri: 'http://pic.51yuansu.com/backgd/cover/00/56/75/5d64fe67cab35.jpg!/fw/780/quality/90/unsharp/true/compress/true' }}
                        style={{ width: 800, height: 1000 }} />
                </FadeView>
                <TouchableNativeFeedback
                    style={{ backgroundColor: "red", height: 20, width: 20, }}
                    onPress={
                        setTimeout(()=>{
                        this.props.navigation.navigate('dengru')
                    },3000)
                    }>
                    <Splash />
                </TouchableNativeFeedback >
            </View>
        );
    }
}