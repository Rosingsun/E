import React from "react";
import styled from "styled-components";
import {Animated,TouchableWithoutFeedback,Dimensions,StatusBar,TouchableOpacity} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';




const screenWidth= Dimensions.get("window").width;
const screenHeight= Dimensions.get("window").height;
// const tabBarHeight=85;

class Project extends React.Component{

    state={
        cardWidth:new Animated.Value(screenWidth*0.85),
        cardHeight:new Animated.Value(300),
        titleTop: new Animated.Value(20),
        opacity:new Animated.Value(0),
        textHeight: new Animated.Value(100)
    };

    openCard=()=>{
    
    if(!this.props.canOpen) return;

        Animated.spring(this.state.cardWidth,{toValue:screenWidth}).start(); 
        Animated.spring(this.state.cardHeight,{toValue:screenHeight}).start();
        Animated.spring(this.state.titleTop,{toValue:40}).start();
        Animated.timing(this.state.opacity,{toValue:1}).start();
        Animated.spring(this.state.textHeight,{toValue:1000}).start();
        StatusBar.setHidden(true);
    }

    closeCard=()=>{
        Animated.spring(this.state.cardWidth,{toValue:screenWidth*0.85}).start();
        Animated.spring(this.state.cardHeight,{toValue:460}).start();
        Animated.spring(this.state.titleTop,{toValue:20}).start();
        Animated.timing(this.state.opacity,{toValue:0}).start();
        Animated.spring(this.state.textHeight,{toValue:100}).start();
        StatusBar.setHidden(false);
    }

    render(){
        return(
        <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
           style={{ width:this.state.cardWidth, height:this.state.cardHeight}}       
        >
                <Cover>
                    <Image source={this.props.image}/>
                    <AnimatedTitle style={{top:this.state.titleTop}}
                    >{this.props.title}</AnimatedTitle>
                    <Author>by {this.props.author}</Author>
                </Cover>
                <AnimatedText style={{ height:this.state.textHeight}}
                >{this.props.text}</AnimatedText>
            <TouchableOpacity style={{
                position:"absolute",top:20,right:20}}
                onPress={this.closeCard}>
            <AnimatedCloseView style={{ opacity:this.state.opacity}}>
                <AntDesign name="closecircleo" size={32} />
            </AnimatedCloseView>
            </TouchableOpacity>
        </AnimatedContainer>
        </TouchableWithoutFeedback>
        );
    }
}

export default Project;
const CloseView=styled.View`
   width:32px;
   height:32px;
   background:white;
   border-radius:16px;
   justify-content:center;
   align-items:center;
`;
const AnimatedCloseView=Animated.createAnimatedComponent(CloseView)
const Container=styled.View`
    width:315px;
    height:460px;
    border-radius:14px;
    background-color:white;
    box-shadow:0 10px 20px rgba(0,0,0,1);
`;
const AnimatedContainer=Animated.createAnimatedComponent(Container);
const Cover=styled.View`
  height:290px;
  border-top-left-radius:14px;
  border-top-right-radius:14px;
  overflow: hidden;
`;
const Image=styled.Image`
    width:100%;
    height:290px;
`;
const Title=styled.Text`
 position: absolute;
 top:20px;
 left:20px;
 font-size:24px;
 font-weight:bold;
 color:white;
 width:300px;
`;
const AnimatedTitle=Animated.createAnimatedComponent(Title)
const Author=styled.Text`
  position:absolute;
  bottom:20px;
  left:20px;
  color:rgba(255,255,255,1);
  font-size:15px;
  font-weight:600;
  text-transform:uppercase;
`;
const Text=styled.Text`
  font-size:17px;
  margin:10px;
  line-height:20px;
  color:#3c4560;
`;
const AnimatedText=Animated.createAnimatedComponent(Text);