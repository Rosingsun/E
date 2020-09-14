
/**
 * Created by anyutz on 2017/3/31.
 */

'use strict';
import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Text,
	ScrollView,
	Dimensions,
	Modal,
	TouchableWithoutFeedback
} from 'react-native'
const {width, height} = Dimensions.get('window'); 
const [aWidth, aHeight] = [320, 240];  
const [left, top] = [0, 0];  
const [aBorderRadius]=[20];
export default class CommonDialog extends Component{ 
	constructor(props){
		super(props);
		this.state={
			hide:true,
			clickScreen:true,
			animationType:'fade',
	        modalVisible: false,
	        transparent: true,
			title:'提示',  
			mess:'中间的语句',
		    chide:false,
			headStyle:'',
			messStyle:'',
			messtextStyle:'',
			messText:'',
			innersWidth:null,
			innersHeight:null,
			innersBorderRadius:null,
			buttons:[],
			innerscoloR:'yanse',
		}

   }  
	render(){
		this.innersWidth=this.state.innersWidth||aWidth;
		this.innersHeight=this.state.innersHeight||aHeight;		
		this.innersBorderRadius=this.state.innersBorderRadius||aBorderRadius;
		this.btnW=(this.innersWidth-60)/2;
		// this.coloR=this.state.innerscoloR||acoloR

		const types=this.props.types;
		return(
			<Modal
				animationType={this.state.animationType}
				transparent={this.state.transparent}
				visible={this.state.modalVisible}
				onRequestClose={this.hide.bind(this)}
				>
				<View style={[styles.container,styles.flexVer,styles.flex1]}>
					{
						this.state.clickScreen&&<TouchableHighlight onPress={this.hide.bind(this)} style={[styles.mask]} underlayColor='transparent'>
													<Text></Text>
												  </TouchableHighlight>
					}
				    {
						!this.state.clickScreen&&<TouchableHighlight style={[styles.mask]} underlayColor='transparent'>
													<Text></Text>
												  </TouchableHighlight>
					}
				  <View style={[styles.flexVer,styles.Acenter,styles.tip,
				  {width:this.innersWidth,height:this.innersHeight,borderRadius:aBorderRadius}]}>
					  {
						 !this.state.thide&&<View style={[styles.flexRow,{height:40}]}>
											 <Text style={[
											 styles.headLog,
											 styles.flex1,
											 styles.paddLR10,
											 this.state.headStyle]}>{this.state.title}</Text>
										   </View> 
					  }
					   <View style={{flexDirection:'row',flex:1,width:this.innersWidth}}>
					     {this.props.components}
					   </View>
					  {
					   this.state.messText!==''&&<View style={this.state.messStyle}>
														<Text style={this.state.messtextStyle}>{this.state.messText}</Text>
												 </View>  
					  }
					  {/* 改变第一个按钮距离下面的距离，是个定值 */}
					  { this.state.buttons&&<View style={styles.btnView,{flexDirection:'row',marginBottom:36}}>  
						   
						   {this.state.buttons.map((item,i)=>this.CreateBtns(item,i))}
						   

					    </View>  
					 }	
				  </View>
				</View>
			</Modal>
		 )	
	}
	CreateBtns(item,i){     
		return <CreateButton key={i} btnW={this.btnW} onClick={this.hide.bind(this)} item={item} indexs={i} coloR={this.state.coloR}/>
	}	
	hide(){
		this.setState({modalVisible:false });
	}

/** 
	* animationType:动画类型 使用Modal组件 ’none,fade,slide‘   ---string
	* title:头部标题文字                 ---string
	* thide：true|false 是否隐藏头部     ---boolean
	* headStyle：头部样式                ---object
	* messText：中间提示文字             ---string
	messStyle:中间提示文字的样式			----string
	messtextStyle:中间提示文字在弹出框内的样式		---string
	* clickScreen:点击屏幕是否隐藏弹出框 ---boolean
	* innersWidth：弹出框的宽度  ---number
	* innersHeight：弹出框的高度 ---number
	innercoloR:按键的颜色===string
	innersBorderRadius：弹出窗的弧度---number
	* buttons：按钮数组          ---array
	* buttons:[
	*		 {
	*			txt:'按钮文字',     ---string
	*			btnStyle:{backgroundColor:'transparent'}, 按钮的样式对象---object
	*			txtStyle:{color:'#ff6600'},    按钮的文字样式           ---object
	*			onpress:this.cancels.bind(this) 按钮的点击事件          ---function
	*		 }
	*		 ...
    *        ]
  */  
	show(options) { 
	  if(options){
		var clickScreen=options.clickScreen==undefined?true:options.clickScreen;
		var animationType=options.animationType==undefined?'fade':options.animationType;
		var title=options.title==undefined?'提示':options.title;
		var mess=options.mess==undefined?'中间的语句':options.mess;
		var thide=options.thide==undefined?false:options.thide;
		var headStyle=options.headStyle==undefined?'':options.headStyle;
		var messStyle=options.messStyle==undefined?'':options.messStyle;
		var messtextStyle=options.messtextStyle==undefined?'':options.messtextStyle;
		var messText=options.messText==undefined?'':options.messText;
		var innersWidth=options.innersWidth==undefined?null:options.innersWidth;
		var innersHeight=options.innersHeight==undefined?null:options.innersHeight;
		var innercoloR=options.innercoloR==undefined?'yanse':options.innercoloR;
	    var innersBorderRadius=options.innersBorderRadius==undefined?null:options.innersBorderRadius;
		var buttons=options.buttons==undefined?null:options.buttons;
		if(!this.state.modalVisible){  
		  this.setState({
			  title:title,
			  mess:mess,
			  messText:messText,
			  thide:thide,
			  headStyle:headStyle,
			  messStyle:messStyle,
			  messtextStyle:messtextStyle,
			  modalVisible: true,
			  innersHeight:innersHeight,
			  innersWidth:innersWidth,
			  innersBorderRadius:innersBorderRadius,
			  innercoloR:innercoloR,
			  buttons:buttons,
			  animationType:animationType,
			  clickScreen:clickScreen
			  });  
		} 
       }else{
		  this.setState({modalVisible: true}) 
	   }		
    } 
} 
class CreateButton extends Component{
	constructor(props){
		super(props);
	}
	click(){
		this.props.onClick();
		if(this.props.item.onpress){
			this.props.item.onpress()
		}	
	}
	render(){
		return(
		  <TouchableHighlight  style={[styles.comBtnBtnView,{width:this.props.btnW},this.props.item.btnStyle]} underlayColor='{this.state.innercoloR}' onPress={this.click.bind(this)}>  
			<Text style={[styles.comBtnText,this.props.item.txtStyle]}>{this.props.item.txt}</Text>  
		  </TouchableHighlight>

		  

		)
	}
}
const styles = StyleSheet.create({
	boxCenter:{
		justifyContent:'center',
		alignItems:'center',
	},
	container: {  
		width:width,  
		height:height,  
		alignItems:"center",  
		justifyContent:"center",  
		backgroundColor:'transparent' 	
	}, 
	mask: {  
		justifyContent:"center",  
		backgroundColor:"#383838",  
		opacity:0.5,  
		position:"absolute",  
		width:width,  
		height:height,  
		left:0,  
		top:0,  
	},  
	tip: {    
		alignItems:"center",  
		justifyContent:"space-between",
		backgroundColor:'#ffffff' ,	
	},
	touchScreen:{
		width:width,
		height:height,
	},
	headLog:{
	  backgroundColor:'#e6454a',
	  color:'#ffffff',
	  height:40,
	  textAlignVertical:'center',
	  textAlign:'center'
	},
	tipTitleText:{  
    color:'#ffffff' ,
    fontSize:17,  
    textAlignVertical:'center',  
    textAlign:'center',  
  },  
  
  btnView:{  
     alignItems:"center",  
    justifyContent:"space-between",
    flexDirection:'row',  
  },  
  comBtnBtnView:{  
    height:32,  
    backgroundColor: '#e6454a',  
    alignItems: 'center',  
    justifyContent: 'center',  
    borderRightWidth:1/2,  
    borderColor:'#f0f0f0',  
    borderRadius:3,
	paddingLeft:10,
	paddingRight:10,
	marginLeft:8,
    marginRight:8,
  },  
  comBtnText: {  
    fontSize:14,
    height:28,
    textAlignVertical:'center',	
    color:"#ffffff",  
    textAlign:"center",  
   },  
	defaultWidth:{
	   width:150
	},
	defaultStyle:{
		backgroundColor:'#ffffff',
		fontSize:14,
		borderWidth:1,
		borderColor:'#DFDFDF',
		color:'#141414',
		padding:0,
		paddingLeft:5,
		paddingRight:5,
		borderRadius:3,
		textAlignVertical:'center',
	},
	Jcenter:{
		justifyContent:'center',
	},
	Acenter:{
		alignItems:'center',
	},
	Textcenter:{
		textAlign:'center',
	},
	TextCenterVer:{
		textAlignVertical:'center',
	},
	dropdownStyle:{
	    width:148,
	  top:40,	  
	},
	style:{
		width:150,
		height:40, 
		justifyContent:'center',
	},
	TextInputContainer:{
	   backgroundColor:'white'
	},
	 yellow:{
		color:'#f8cb43',
	 }, 
	 flexRow:{

	   flexDirection:'row',
	 },
	 flexVer:{ 
	   flexDirection:'column',
	 },
	 flex1:{
		flex: 1, 
	 },
	  colorRed:{
		  color:'#b40e12',
	  },
	  colorYellow:{
			color:'#f8cb43', 
		 },
	  color999:{
		  color:'#999999',
	  },
	  colorWhite:{
		  color:'#ffffff',
	  },
	  colorBlack:{
		  color:'#141414',
	  },
	  paddLR10:{
		  paddingLeft:10,
		  paddingRight:10,
	  }
})
