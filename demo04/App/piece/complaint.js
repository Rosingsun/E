import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions,Image,StatusBar,TouchableOpacity,Alert,TouchableHighlight
 } from 'react-native';


 import AntDesign from 'react-native-vector-icons/AntDesign';
 


const {width,scale}=Dimensions.get("window");
const biLi=width*scale/1125;


export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isPress: true,

      }
    }
    onPress = () => {
      this.setState({
        isPress:false
        
      });
    };
    render() {
        return (
                <View style={styles.container}>
                    {/* TOP */}
                    <View style={[styles.top]}>
                  <View style={[styles.nav_container]}>
                      <View style={{ flexDirection: "row" }}>
                          <AntDesign name={'leftcircle'} size={30} color={'#fff'} onPress={()=>{
                            Alert.alert("返回")
                          }}/>  
                      </View>
             <Text style={{fontSize:20,color:'#FFFFFF'}}>线路</Text>
            <View style={{width:45,height:20}}/>
            </View>
            </View>

                <View style={styles.choiceView}>
                    <View style={{width:'100%'}}>
             <Text style={{fontSize:15,marginLeft:'3%',marginTop:'5%'}}>投诉
                 <Text style={{fontSize:15,color:'#FFB16C'}}>
                     @用户名</Text>
                     用户：</Text>
                     </View>



                     <View style={styles.userInformation}>
                        <View style={{flexDirection:'row'}}>
                       
                        <Image style={styles.userHead} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1220450739,2978203122&fm=26&gp=0.jpg'}} />
                        
                            
                         <View style={{marginLeft:'3%',justifyContent:'center'}}>
                        <Text style={styles.userId}>用户名</Text>
                        <Text style={styles.userIntroduce}>简介：暂无介绍</Text>
                         </View>
                         
                        </View>
                     </View>
                    <Text style={{fontSize:15,paddingLeft:'3%',paddingTop:18}}>请选择你想要投诉的类型</Text> 
                    {/* <View style={styles.nineChoice}></View> */}
                     <View style={[styles.buttonBox]}>
                       
                        <TouchableHighlight style={styles.button}  underlayColor = '#FFB16C' activeOpacity={0.7} onPress={()=>{this.setState.onPress
                        }}>
                          <Text style={{fontSize:12}}>垃圾营销</Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style={[styles.button]} >
                          <Text style={{fontSize:12}}>涉黄信息</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>不实信息</Text>
                        </TouchableHighlight>
                     </View>
                     <View style={styles.buttonBox}>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>人身攻击</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>有害信息</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>内容抄袭</Text>
                        </TouchableHighlight>
                     </View>
                     <View style={styles.buttonBox}>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>违法信息</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>诈骗信息</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button]}>
                          <Text style={{fontSize:12}}>恶意营销</Text>
                        </TouchableHighlight>
                     </View>
                </View>
                
                 <View style={{alignItems:"center",marginTop:20}}>
                <TouchableOpacity
        style={{alignItems: "center",backgroundColor: "#FFB16C",padding: 15,width:"60%",borderRadius:10}}
        onPress={()=>{ Alert.alert('提交成功')}}>
        <Text style={{color:"#fff",fontSize:20}}>提交</Text>
      </TouchableOpacity>
                </View>
                </View>
                    

            );
        }
      }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:"#43949B",
          flexDirection:"column"
      },
      top: {
          height: (100) * biLi,
          width: "100%",
          backgroundColor: "#FFB16C",
      },
      nav_container: {
          flex: 0.7,
          marginTop: '11%',
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "5%",
      },
        choiceView:{
            width:'94%',
            height:320,
            marginLeft:'3%',
            borderRadius:15,
            backgroundColor:'#FFFFFF',
            marginTop:65,
        },
        userInformation:{
            height:80,
            width:'94%',
            marginLeft:'3%',
            marginTop:10,
            backgroundColor:'#EFEFEF',
            borderRadius:15,
            justifyContent:'center',
            // backgroundColor:'red'
        },
        userHead:{
            height:55,
            width:55,
            borderRadius:55,
            marginLeft:'3%'
        },
        userId:{
            fontSize:15,
            color:'#000000'
        },
        userIntroduce:{
            fontSize:10,
            color:'#999999',
            marginTop:5,
        },
        nineChoice:{
            height:156,
            width:'94%',
            paddingLeft:'3%',
            
        },
        button:{
          backgroundColor:"#EFEFEF",
          width:108*biLi,
          height:34*biLi,
          borderRadius:15,
          alignItems:"center",
          justifyContent:"center"

        },
        buttonBox:{
          justifyContent:"space-around",
          flexDirection:"row",
          marginTop:10,
          
        },
    });
