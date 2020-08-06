
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    Dimensions,
    FlatList,

} from 'react-native';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import SelfadaptModal from 'react-native-selfadapt-modal';
// import { TextInput, Button } from 'react-native-paper';
// import { text } from 'express';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

const TestData = [
    { id: 10086, name: '  人气最高  ' },
    { id: 10087, name: '  离我最近  ' },
    { id: 10088, name: '  最新收录  ' },
    { id: 10089, name: '  评分最高  ' },
];

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 5,
            loaded: false,
            errInfo: null,
            demoOneValue: '',
        }
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    onOpenStatusChange = (res) => {
        // console.log('===res===',res);
        this.setState({ openStatus: res == 1 });
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, marginLeft: 30 }}>打卡全部</Text>

                        <View>
                            {/* <SelfadaptModal 
                            menuList={TestData} 
                            containerStyle={styles.demeOneBtn}
                            modalStyle={{backgroundColor:"#FFCA9B"}}
                            unActiveMenuTextStyle={{color:"#fff"}}
                            // content={this.state.demoOneValue}
                            // onPress={(res)=>this.doSelect(res,'demoOneValue')}
                            openStatus={(res)=>this.onOpenStatusChange(res)}>
                      <AntDesign name={'bars'} size={30} color={'#fff'} /> 
                      </SelfadaptModal>  */}
                            <Text style={{ fontSize: 15, color: '#000' }}>{this.state.openStatus}</Text>
                        </View>
                    </View>
                </View>
                {/* 顶部分类 */}
                <FlatList
                    style={{paddingTop:10,}}
                    showsVerticalScrollIndicator={false}
                    data={[
                        {
                            picture: "./img/a.jpg",
                            title: '西湖·一个小亭子',
                            scenicSpot: "西湖景区",
                            clock: "杜甫、李白、白居易也曾在这里打过卡"
                        },
                        {
                            picture: "./img/a.jpg",
                            title: '西湖·一个小亭子',
                            scenicSpot: "西湖景区",
                            clock: "杜甫、李白、白居易也曾在这里打过卡"
                        },
                    ]}
                    renderItem={({ item }) =>
                        <View style={[styles.mainBox]}>
                            <Image style={{ height: '100%', width: 118 * biLi }} source={{
                                uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399377501,2221360822&fm=26&gp=0.jpg'
                            }} />
                            <View style={{ flexDirection: "column", justifyContent: "space-around", marginLeft: 15 }}>
                                <Text style={[styles.title]}>{item.title}</Text>
                                <View style={{ width: 115 }}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        starSize={20}
                                        fullStarColor={"#EA9518"}
                                        emptyStarColor={"#ffffff"}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    /></View>
                                <Text style={[styles.scenicSpot]}>{item.scenicSpot}</Text>
                                <TouchableOpacity
                                    style={styles.button}>
                                    <Text style={[styles.clock]}>{item.clock}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>} />
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation:6,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '8%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
        
    },
    words: {
        color: "#fff",
        fontSize: 15,
    },
    picker: {
        marginRight: 30
    },
    mainBox: {
        width: "90%",
        height: 118 * biLi,
        backgroundColor: "#fff",
        marginLeft: "5%",
        flexDirection: "row",
        marginTop:10,
        borderRadius:3,
    },
    title: {
        fontSize: 15,
        color: "#000000"
    },

    scenicSpot: {
        color: "#999999",
        fontSize: 10
    },
    clock: {
        color: "#999999",
        fontSize: 10,
        justifyContent:"center",
        alignItems:"center",
        lineHeight:20,
        
    },
    button: {
        width: 190 * biLi,
        height: 20 * biLi,
        backgroundColor: "#EFEFEF"
    },
    demeOneBtn: {
        padding: 25,
        borderRadius: 5,
        marginTop: 20,
    },

})
