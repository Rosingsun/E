import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image, ScrollView, TouchableHighlight,TouchableWithoutFeedback, Dimensions,Animated,Easing,} from 'react-native';
import { StatusBar } from 'react-native'
const {width,scale}=Dimensions.get('window');
const biLi=width*scale/1125;
import CommonDialog from './commonDialog';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LottieView from 'lottie-react-native';
export default class DefineCon extends Component { 
  constructor(props){
	 super(props); 
  }
  funAlert(){
    var options={
       thide:true,
       innersWidth:308,
       innersHeight:262,	
       innersBorderRadius:15,
       buttons:[
                   {
                      txt:'确认1',
                      btnStyle:{backgroundColor:'pink',height:35,borderRadius:13,width:200},
				    txtStyle:{color:'red'},
                   }
               ]			 
    }
   this.refs.dAlert.show(options) 
}



 funAutofade(){
   var options={
   animationType:'none',
   thide:true,
       clickScreen:false		
   }
  this.refs.viewdaojishi.show(options) 
 }
 hides(){
   this.refs.viewdaojishi.hide();
 }
 funcustomConfirm(){
  var options={
    thide:true, /*不显示头部标题*/
    innersWidth:308,
    innersHeight:262,	
    innersBorderRadius:15,
    buttons:[
      {
       txt:'确认',
       btnStyle:{backgroundColor:'#999999',width:127,height:35, borderTopLeftRadius:13, borderBottomLeftRadius:15,marginRight:1},
       txtStyle:{color:'#ffffff',fontSize:15},
       onpress:this.cancels.bind(this)
      },
      {
       txt:'取消',
       btnStyle:{backgroundColor:'#6C9575',width:127,height:35,borderTopRightRadius:13,borderBottomRightRadius:15,marginLeft:1},
       txtStyle:{color:'#ffffff',fontSize:15}, 
       onpress:this.cok.bind(this)
      }
    ]		 
   } 
    this.refs.dcustomConfirm.show(options) 	  
 }
 cok(){
 alert("你点击了确定按钮!")  
 }
 cancels(){
 this.refs.viewdaojishi.show({
  //  headStyle:{backgroundColor:'#ff6600',color:'#ffffff',fontSize:24},
  thide:true,
  //  buttons:[{txt:'确定',btnStyle:{backgroundColor:'transparent'},txtStyle:{color:'#ff6600'}}],
   innersWidth:308,
   innersHeight:262,
   }) 
 }


  render() {
	 
    return (
        <View style={styles.container}>
          <View style={{width:200,height:200,backgroundColor:'pink'}}>
 <TouchableWithoutFeedback  underlayColor='transparent' 
	                 onPress={this.funAlert.bind(this)}> 
                     <View style={{width:120,borderRadius:15,backgroundColor:"#DDDDDD",}}>
			<Text >阿巴阿巴阿八</Text>  
     </View>
		  </TouchableWithoutFeedback>
  <CommonDialog types={'alert'} components={<DefineCon01/>}   ref="dAlert" />
  </View>



  <View>
  <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funcustomConfirm.bind(this)}>  
			<Text style={[styles.comBtnText]}>shanchuliaotianjilu</Text> 
		  </TouchableHighlight> 
      <TouchableHighlight style={[styles.comBtnBtnView,{width:100}]} underlayColor='transparent' onPress={this.funAutofade.bind(this)}>  
			<Text style={[styles.comBtnText]}>daojishi</Text>  
		  </TouchableHighlight>
      <CommonDialog  components={<DefineCon01/>} ref="dcustomConfirm" />
      <CommonDialog components={<DefineCon3 onclick={this.hides.bind(this)}/>}  ref="viewdaojishi" />
       <CommonDialog  ref="viewdaojishi"  components={<DefineCon3 onclick={this.hides.bind(this)}/>}  />
      </View>


        </View>
    )
  }

}

class DefineCon01 extends Component{
	constructor(props){
    super(props);
    
   this.state = {
    progress: new Animated.Value(0),
   };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
    }).start();
}
	render(){
		return(
		  <View style={[styles.conMid]}>
        <View style={{height:100,width:100}}>
              <LottieView source={require('./Success.json')} progress={this.state.progress} />
              </View>
             {/* <AntDesign name="exclamationcircle" size={60} color="#F36A6A" style={{marginTop:'10%'}}  /> */}
		     <Text style={{ fontSize: 15, color: '#484848',marginTop:11*biLi,}}>温馨提示</Text>
             <Text style={{ fontSize: 15, color: '#484848',marginTop:30*biLi }}>您的聊天记录将会被删除！</Text>
		  </View>
		)
	}
} 
class DefineCon3 extends Component{
	mixins = [TimerMixin];
	constructor(props){
		super(props);
		this.timer=""; 
		this.state={
			times:2
		}
	}
	componentDidMount() {
		this.timer=setInterval(  
			() => {  
			
			  if(this.state.times<=1){
				clearInterval(this.timer)
                this.props.onclick()				
			  }else{
				  this.setState({times:this.state.times-1})
			  }  
			},  
			1000 
		  );
	}
	 componentWillUnmount() {
		 clearInterval(this.timer);
		
    }
	
	render(){
	    return(
		  <View style={[styles.conMid,{ backgroundColor:'#999999FF'}]}>
		      <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#999999FF'}}>
          <Ionicons name="md-checkmark-circle" size={100} color="#FFFFFFFF" style={{marginTop:'10%'}}  />
			    <Text style={{flex:1,color:'#000000',textAlignVertical:'center'}}>删除成功！</Text>
				<Text style={{flex:1,fontSize:12,textAlignVertical:'center'}}>
				      即将关闭此窗口（<Text style={{color:'#ff0000'}}>{this.state.times}秒</Text>）
				 </Text>
			  </View> 
		  </View>
		)
	}
}


class DefineCon02 extends Component{
	constructor(props){
    super(props);
    this.state = {
      progress: new Animated.Value(0),
     };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
    }).start();
}
	render(){
		return(
		  <View style={styles.conMid}>
               <LottieView source={require('./Success.json')} progress={this.state.progress} />
             {/* <AntDesign name="exclamationcircle" size={60} color="#2F3843" style={{marginTop:'10%'}}  /> */}
		     <Text style={{ fontSize: 15, color: '#484848',marginTop:11*biLi,}}>温馨提示</Text>
             <Text style={{ fontSize: 15, color: '#484848',marginTop:30*biLi }}>您的聊天记录将会被删除！</Text>
		  </View>
		)
	}
} 
class DefineCon03 extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		  <View style={styles.conMid}>
             <AntDesign name="exclamationcircle" size={60} color="#F36A6A" style={{marginTop:'10%'}}  />
		     <Text style={{ fontSize: 15, color: '#484848',marginTop:11*biLi,}}>删除成功</Text>
             <Text style={{ fontSize: 15, color: '#484848',marginTop:30*biLi }}>您的聊天记录已被成功删除</Text>
		  </View>
		)
	}
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'skyblue',
    },
    conMid:{
        width:'100%',
        // backgroundColor:'red',
        borderRadius:15,
         alignItems:'center',
        
    },
    textStyle:{
        width:'50%',
        marginTop:5,
        fontSize:15,
        color:'#484848',
    },
    comBtnBtnView:{
      borderWidth:1,
      borderColor:'#DFDFDF',
      borderRadius:3,
      backgroundColor:'#ffffff',
      height:28,
      marginBottom:15
    },
    comBtnText:{
      color:'#007aff',
      textAlign:'center',
      textAlignVertical:'center',
    },
    tmid:{
      textAlign:'center',
      textAlignVertical:'center',
    }
});