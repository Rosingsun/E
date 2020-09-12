import React from 'react';
import { View, Text, Modal, StyleSheet, Button, TouchableWithoutFeedback,TouchableOpacity,Alert
 } from 'react-native';
 
class ModalComp extends React.Component{
 
    state = {
            modalVisible: false,
    };
    
    _openModalWin = () => {
        this.setState({modalVisible: true});
    }
 
    _closeModalWin = () => {
        this.setState({modalVisible: false});
    }
 
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.contentStyle}>
                    <Text style={styles.contentTextStyle}>
                        ModalComp
                    </Text>
                    <Button
                        title="打开Modal窗口"
                        color="#841584"
                        onPress={this._openModalWin}
                    />
                </View>
            
                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={()=>{console.log('modal窗口显示了');}} // 回调函数会在 modal 显示时调用
                >
                    {/* <TouchableWithoutFeedback
                    style={{backgroundColor:"red",height:20,width:20,position:"absolute",top:0,left:0}}
                onPress={()=>{
                    this._closeModalWin
                }}
            > */}
            <TouchableOpacity
            
            style={{backgroundColor:"red",height:'100%',width:'100%',position:"absolute",top:0,left:0}}
            onPress={this._closeModalWin}
        >
                    <View style={styles.modalLayer}>

                          <TouchableOpacity
                                onPress={()=>{
                                   
                                }}                           
                            >
                        <View style={styles.modalContainer}>
                          
                            <Text style={styles.modalTitleStyle}>这是个Modal窗口！</Text>
                            <View style={styles.modalButtonStyle}>
                                <Button 
                                    title='取消' 
                                    color="#A4A4A4"
                                    onPress={this._closeModalWin}
                                ></Button>
                            </View>
                            
                        </View></TouchableOpacity>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                    </TouchableOpacity>
                </Modal>
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentStyle: {
        padding:30
    },
    contentTextStyle: {
        textAlign: 'center',
        fontSize: 26
    },
    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        padding: 32
    },
    modalContainer: {
        height: 300,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 26
    },
    modalButtonStyle: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10
    }
});
 
export default ModalComp;