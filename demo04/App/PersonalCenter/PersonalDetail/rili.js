import React, { useState, Fragment, Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions, StatusBar, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {Calendar} from 'react-native-calendars';


import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import _ from 'lodash';
import { LocaleConfig } from 'react-native-calendars';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
LocaleConfig.locales['fr'] = {
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
  today: '今天'
};
LocaleConfig.defaultLocale = 'fr';
const testIDs = require('./testIDs');

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

const CalendarsScreen = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const getDisabledDates = (startDate, endDate, daysToDisable) => {
    const disabledDates = {};
    const start = moment(startDate);
    const end = moment(endDate);
    for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
      if (_.includes(daysToDisable, m.weekday())) {
        disabledDates[m.format('YYYY-MM-DD')] = { disabled: true };
      }
    }
    return disabledDates;
  };

  const renderCalendarWithCustomMarkingType = () => {
    return (

      <Fragment>


        <View style={styles.container}>
          <View>
            <View style={{ marginTop: '8%', marginLeft: '5%' }}>
              <AntDesign name={'left'} size={30} color={'#FFFFFF'} onPress={() => {
                navigation.goBack();    
              }} />
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
              {/* 等级条 */}
              <AnimatedGaugeProgress
                size={280}
                width={15}
                fill={80}
                rotation={90}
                cropDegree={180}
                tintColor="#FAAF3D"
                backgroundColor="#FFFFFF"
              //  stroke={[40]}
              //   strokeCap="circle"
              />
              <View style={{ marginTop: -230, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50, color: '#FFF' }}
                >Lv.1</Text>
                <Text style={{ fontSize: 20, color: '#FFF' }}>我的积分  120</Text>
              </View>
            </View>
          </View>
          <View style={{
            width: '94%', marginLeft: '3%', backgroundColor: '#FFF', height: 70, borderRadius: 15,
            marginTop: 30, justifyContent: "center", alignItems: 'center'
          }}>
            <Text style={{ fontSize: 20 }}>我的守约</Text>
            <Text style={{ fontSize: 15 }}>完成约定次数 <Text style={{ fontSize: 15, color: '#FAAF3D' }}>34</Text> </Text>

          </View>
          <View style={{ marginTop: 10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 25 }}>·····</Text>
              {/* <View style={{ flexDirection: 'row', width: 200, borderStyle: "dotted",borderWidth:8, borderRadius: 20, borderColor: "#fff" }}> */}
              {/* <Text style={{fontSize:50,color:'#FFF',justifyContent:'space-around',flexDirection:'row'}}>···</Text> */}
              <Text style={{ fontSize: 20, color: '#FFF' }}>我已连续打卡 1 天</Text>
              <Text style={{ color: '#FFF', fontSize: 25 }}>·····</Text>
              {/* <View style={{}}></View> */}
            </View>
            {/* <Text style={styles.text}>Custom calendar with custom marking type</Text> */}
            {/* </View> */}
            <CalendarList
              horizontal={true}
              pagingEnabled={true}
              hideArrows={false}
              hideExtraDays={true}
              renderArrow={(direction) => direction === 'left' ?
                <View style={{ width: 52, height: 23, backgroundColor: '#6C9575', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>上个月</Text></View>
                :
                <View style={{ width: 52, height: 23, backgroundColor: '#6C9575', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>下个月</Text></View>}
              renderHeader={(date) => {
                const header = date.toString('MM yyyy');
                const [month, year] = header.split(' ');
                const textStyle = {
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  paddingVertical: 5
                };
                return (
                  <View style={{
                    flexDirection: 'row',
                    borderRadius: 15,
                    backgroundColor: '#6C9575',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}><Text style={{ color: '#FFFFFF', fontSize: 15, ...textStyle }}>{year}年{`${month}`}月</Text>

                  </View>
                );
              }}

              markingType={'period'}
              theme={{
                arrowStyle: { paddingHorizontal: '1%', marginTop: '2%', },
                calendarBackground: '#2F3843',
                textSectionTitleColor: 'white',
                // textSectionTitleDisabledColor: 'green',
                dayTextColor: 'white',
                todayTextColor: 'white',
                selectedDayTextColor: 'white',
                // monthTextColor: 'pink',
                // indicatorColor: 'red',
                // //   选中的颜色
                selectedDayBackgroundColor: '#FAAF3D',
                //  arrowColor: 'white',
                textDisabledColor: 'white',
                'stylesheet.calendar.header': {
                  week: {
                    marginTop: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // fontSize:40
                  }
                }
              }}
              style={styles.calendar}
              //   onDayLongPress={this.onDayLongPress}
              hideExtraDays
              // current={'2020-08-01'}
              // minDate={'2020-08-01'}
              markingType={'custom'}
              markedDates={{
                '2020-08-08': {
                  selected: true
                },
                '2020-08-09': {
                  selected: true
                },
                '2020-08-31': {
                  selected: true
                },



              }}
            />
          </View>
        </View>
      </Fragment>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} testID={testIDs.calendars.CONTAINER}>
      {/* {renderCalendarWithSelectableDate()}
      {renderCalendarWithWeekNumbers()}
      {renderCalendarWithMarkedDatesAndHiddenArrows()}
      {renderCalendarWithPeriodMarkingAndSpinner()}
      {renderCalendarWithPeriodMarkingAndDotMarking()}
      {renderCalendarWithMultiDotMarking()}
      {renderCalendarWithMultiPeriodMarking()} */}
      {renderCalendarWithCustomMarkingType()}
      {/* {renderCalendarWithCustomDay()} */}
    </ScrollView>
  );
};
export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: "#2F3843",


  },
});
