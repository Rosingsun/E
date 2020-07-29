import React from 'react'
import styled from 'styled-components'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    FlatList,
    Switch,
} from 'react-native';

class Success extends React.Component{
    render(){
        return(
            <View style={styles.container}></View>
     
        )
    }
}

export default  Success

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43949B",
    },
})