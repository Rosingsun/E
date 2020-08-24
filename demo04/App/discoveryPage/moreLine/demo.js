import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    FlatList,
} from 'react-native';

export default class Home extends Component {
   
    state = {
        dataObj: [
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
            {dat: 123},
        ],
        oldPostion:0,
    };

    _onScroll(event) {
        let y = event.nativeEvent.contentOffset.y;
        if (this.state.oldPostion <y) {
            this.state.oldPostion=y;
            this.refs.title.setNativeProps({
                style: {
                    opacity: 0,
                },
            });
        } else {
            this.state.oldPostion=y;
            this.refs.title.setNativeProps({
                style: {
                    opacity: 1,
                },
            });
        }
    }

    _keyExtractor = (item, index) => index.toString();

    renderItemView = ({item}) => {
        return <View style={{height: 100}}>
            <Text>{item.dat}</Text>
        </View>;
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={(event) => this._onScroll(event)}
                    style={{flex: 1}}
                >
                    <View style={{width: '100%', height: 300, backgroundColor: '#8aa5ff'}}/>

                    <FlatList
                        keyExtractor={this._keyExtractor}
                        data={this.state.dataObj}
                        renderItem={this.renderItemView}
                    />
                </ScrollView>
                <View ref='title' style={{
                    height: 50,
                    width: '100%',
                    backgroundColor: '#4aa37c',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                }}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>主&nbsp;页</Text>
                </View>
            </View>
        );
    }
}