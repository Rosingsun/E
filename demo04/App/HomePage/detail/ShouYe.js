import React from 'react';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Text,
    Button,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity, Alert
} from 'react-native';
import { ImageBackground } from 'react-native';

var screen = Dimensions.get('window');

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just opened');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }

    renderList() {
        var list = [];
        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }
        return list;
    }
    onpoenMode3() {
        this.refs.modal3.open()
    }
    componentDidMount() {
        this.onpoenMode3()
    }

    render() {
        // var BContent = (
        //     <View style={[styles.btn, styles.btnModal]}>
        //         <Button title="X" color="red" onPress={() => this.setState({ isOpen: falses })} />
        //     </View>
        // )
        return (
            <View style={styles.wrapper}>
                {/* <Button title="Position centered + backdrop + disable" onPress={() => this.onpoenMode3()} style={styles.btn} />
                <Text
                    onPress={() => this.onpoenMode3()}
                >222</Text> */}
                <Modal style={[styles.page1]} position={"center"} ref={"modal3"}
                    isDisabled={this.state.isDisabled}
                    visible={true}
                >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:"#ffffff00" }}>
                        <View style={{ marginLeft: '5%' }}>
                            <Text style={{ fontSize: 80, color: '#2F3843', }}>06</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, color: '#484848' }}>八月</Text>
                                <Text style={{ fontSize: 15, color: '#484848', marginLeft: 5 }}>星期四</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, color: '#484848' }}>杭州</Text>
                                <Text style={{ fontSize: 15, color: '#484848', marginLeft: 5 }}>阴天</Text>
                            </View>
                            <Text style={{ fontSize: 20, color: '#484848' }}>忌低气压</Text>
                        </View>

                        <View style={{ alignItems: "flex-end" }}>
                            <Image style={{ height: 150, width: 190, marginTop: 70, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} source={{
                                uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=191148607,3872174093&fm=26&gp=0.jpg'
                            }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='location-sharp' size={10} color="#fff" />

                                <Text style={{ fontSize: 10, color: '#999999' }}>宁波·宁波老外滩</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: '7%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.refs.modal6.open()}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, color: '#ffffff', textAlign: 'center', }}>立即签到</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#2F3843', fontSize: 10, marginTop: '2%' }}>已有10,369人签到</Text>
                    </View>

                </Modal>
                <Modal style={[styles.page1]}
                    position={"center"} ref={"modal6"}
                    isDisabled={this.state.isDisabled}>
                    <View>
                        <ImageBackground
                            style={{ height: '100%', width: '100%' }}
                            imageStyle={{ borderRadius: 10 }}
                            source={{
                                uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598797657756&di=ae4a07bb2c335e2309821535a55194e1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180125%2Fa369a5ab232342b2a23e5670fb50999a.jpeg'
                            }} >

                            <View style={{ alignItems: "flex-end" }}>
                                <View style={{ borderWidth: 2, borderColor: '#fff', width: 90, marginRight: '5%', marginTop: '5%' }}>
                                    <Text style={{ fontSize: 70, color: '#fff' }}>06</Text>
                                    <View style={{ height: 2, width: '100%', backgroundColor: '#fff' }}></View>
                                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>2020.08 </Text>
                                </View>
                                <View style={{ alignItems: "flex-end", marginRight: 20 }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>宁波·老外滩</Text>
                                    <Text style={{ fontSize: 12, color: '#fff' }}>一个比上海外滩更有内涵的外滩</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", position: 'absolute', bottom: 10, width: '96%', marginLeft: '2%' }}>
                                <Ionicons name='share-social' size={20} color="#fff" />
                                <View style={{ height: 30, width: 180, borderRadius: 15, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: '#2F3843' }}>查看此人气打卡地点 >>></Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </Modal>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        // paddingTop: 50,
        flex: 1,
        backgroundColor: "#ffffff00",
        // marginTop:'45%',
        // position:"absolute",
        // zIndex:111
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal2: {
        height: 230,
        backgroundColor: "red"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: 300
    },


    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "pink"
    },

    text: {
        color: "black",
        fontSize: 22
    },
    page1: {
        width: '80%',
        height: '45%',
        borderRadius: 10,
    },
    button: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#6C9575',
        height: 50,
        justifyContent: "center"
    }

});              