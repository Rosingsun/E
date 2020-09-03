import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    TextInput,
    ScrollView,
} from "react-native";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SectionListContacts from 'react-native-sectionlist-contacts'

export default class Section extends React.Component {

    constructor(props) {
        super(props)

        //name字段必须,其他可有可无
        let nameData = [
            {
                name: '阿玛尼',
                id: 'amani',
                params: '',
                img: 'http://pic.51yuansu.com/pic3/cover/03/99/80/5f3e17673e793_610.jpg!/fw/260/quality/90/unsharp/true/compress/true'
            },
            { name: 'OK', id: 'ok', params: '123' },
            { name: '天津饭' },
            { name: '%……&' },
            { name: '周星驰' },
            { name: '习大表哥' },
            { name: '不要这样' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: 'V字仇杀队' },
            { name: '拼车' },
            { name: '他妈跌' },
            { name: '淫僧' },
            { name: '钱学森' },
            { name: '宁采臣' },
            { name: '史泰龙' },
            { name: '恐龙' },
            { name: '任达华' },
            { name: '妈咪宝贝' },
            { name: 'ing' },
            { name: '康麦隆' },
            { name: '刘德华' },
            { name: 'A德华' },
            { name: 'A德华' },
            { name: 'A德华' },
            { name: 'A德华' },
            { name: 'A德华' },
            { name: 'A德华' },
            { name: '精忠报国' },
            { name: '黄药师' },
            { name: '大叔皮' },
            { name: '布达拉宫' },
            { name: '方世玉' },
            { name: 'ET外星人' },
            { name: '程咬金' },
            { name: 'zzzz' },
            { name: '**&&&&' },
        ]

        this.state = {
            dataArray: nameData,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.top]}>
                    <View style={[styles.top_container]}>
                        <FontAwesome name='angle-left' size={32} color="#000"
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                        <Text style={{ color: "#000" }}>你他妈关老子</Text>
                        <Text >  </Text>
                    </View>
                </View>
                {/* <ScrollView> */}
                <View style={{ backgroundColor: "#fff", marginTop: 20, justifyContent: "center", alignItems: "center", flexDirection: "row", width: '90%', marginLeft: '5%', height: 40, borderRadius: 50 }}>
                    <TextInput
                        style={{ width: "90%", }}
                        placeholder="please input your wordss"
                    ></TextInput>
                    <FontAwesome name='search' size={20} color="#000" />
                </View>
                <View style={{ width: '95%', marginLeft: '5%', height: '77%' }}>
                    <SectionListContacts
                        ref={s => this.sectionList = s}
                        sectionListData={this.state.dataArray}
                        initialNumToRender={this.state.dataArray.length}
                        showsVerticalScrollIndicator={false}
                        SectionListClickCallback={(item, index) => {
                            // console.log('---SectionListClickCallback--:', item, index)
                            this.props.navigation.navigate("spread",{index:index});
                        }}
                        sectionItemViewStyle={{ marginTop: 4, borderRadius: 20, width: '90%', padding: 10, height: 36, }}
                        // sectionHeaderTextStyle ={{width:'90%',borderRadius:20}}
                        sectionHeaderViewStyle={{ color: "red", width: '10%' }}
                        otherAlphabet="#"
                    /></View>
                {/* </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#efefef"
    },

    top: {
        height: 78,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 8,
        justifyContent: "center",
        alignContent: "center",
    },
    top_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center"
    },
})