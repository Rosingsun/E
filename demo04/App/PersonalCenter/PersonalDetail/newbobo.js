
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Surface, Shape, Path, LinearGradient, Text } from '@react-native-community/art';
export class HcdWaveView extends Component {
  constructor(props) {
    super(props);
    this.copyRadian = 0.5;
    this.proportion = this.props.proportion;//Arc control 现在有多少积分
    this.surfaceWidth = this.props.surfaceWidth;
    this.surfaceHeigth = this.props.surfaceHeigth;
    this.moveY = this.surfaceWidth;
    this.levelPercent = this.props.levelPercent  //本级别有多少积分
    this.radius = this.surfaceWidth / 2.0;
    // 中间文本文字
    this.word = this.props.word;
    // 波浪颜色
    this.bobocolor = this.props.bobocolor;
    this.state = {
      a: 1.5,
      b: 0,
      increase: false,
      flashCount: 0
    };
  }

  componentDidMount() {
    if (this.props.type == 'dc') {
      this.intervalTimer = setInterval(() => {
        var a = this.state.a
        var b = this.state.b
        var increase = this.state.increase
        if (increase) {
          a += 0.01
        } else {
          a -= 0.01
        }
        if (a <= 1) {
          increase = true
        }
        if (a >= 1.5) {
          increase = false
        }
        b += 0.1
        this.setState({
          a: a,
          b: b,
          increase: increase
        })
      }, 20)
    } else if (this.props.type == 'ac') {
      this.flashTimer = setInterval(() => {
        var flashCount = this.state.flashCount
        flashCount += 2
        flashCount %= 30
        this.setState({
          flashCount: flashCount
        })
      }, 60)
    }
  }

  componentWillUnmount() {
    if (this.props.type == 'dc') {
      this.intervalTimer && clearTimeout(this.intervalTimer)
    } else if (this.props.type == 'ac') {
      this.flashTimer && clearTimeout(this.flashTimer)
    }
  }

  // 直流充电动画
  artDrawDCChargeWaveView() {
    // 左边刻度
    const leftLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= 30 * this.props.powerPercent / this.props.levelPercent; i++) {
      len = 12;
      tmp = radius - 5;
      leftLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      leftLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      leftLinePath.close();
      angle += Math.PI / 30;
    }

    // 右边刻度
    const rightLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= 30 * this.props.powerPercent / this.props.levelPercent; i++) {
      len = 12;
      tmp = radius - 5;
      rightLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      rightLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      rightLinePath.close();
      angle -= Math.PI / 30;
    }

    var circleRadius = radius - 30
    const path = new Path()
      .moveTo(radius, radius - circleRadius)
      .arc(0, circleRadius * 2, circleRadius)
      .arc(0, -circleRadius * 2, circleRadius)
      .close();
    let colors = ["#FFF", "#FFF",];
    // let colors = [ "white", "white", ];
    let linearGradient = new LinearGradient(colors, 0, 20, 90, 280);

    return <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
      <Surface width={this.surfaceWidth} height={this.surfaceHeigth} >
        {this.artDrawBg()}
        <Shape d={path} fill={linearGradient} />
        {this.artDrawWave()}
        <Text strokeWidth={1}
          alignment="center"
          x={this.props.surfaceHeigth / 2}
          y={this.props.surfaceHeigth / 2}
          fill="#2F3843"
          font={`12px "Helvetica Neue", "Helvetica", Arial`}>{this.props.word}</Text>
      </Surface>
    </View>
  }
  // 画背景
  artDrawBg() {
    const bgLine = Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = 0, tmp, len; i < 60; i++) {
      len = 12;
      tmp = radius - 5;
      bgLine.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      bgLine.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      bgLine.close();
      angle += Math.PI / 30;
    }
    //       return (
    //   <Shape d={bgLine} stroke="#FAAF3D" strokeWidth={2} fill={"red"} />
    // )
  }
  artDrawWave() {
    var powerPercent = parseInt(this.props.powerPercent)
    var levelPercent = parseInt(this.props.levelPercent)
    const radius = this.props.surfaceWidth / 2 - 30;

    if (powerPercent / levelPercent < 100) {
      const centerX = this.props.surfaceWidth / 2
      const centerY = this.props.surfaceHeigth / 2

      const a = this.state.a
      const b = this.state.b
      const amplitude = 6

      var currentLinePointY = radius * 2 + 30 - radius * 2 * (this.props.powerPercent / this.props.levelPercent)
      var startX = 30
      var endX = this.props.surfaceWidth - startX

      var startPoint, endPoint

      const linePath = new Path();
      for (var x = startX; x <= endX; x++) {
        var y = a * Math.sin(x / 180 * Math.PI + 4 * b / Math.PI) * amplitude + currentLinePointY
        if (y < centerY) {
          var circleY = centerY - Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2))
          if (y < circleY) {
            y = circleY
          }
        } else if (y > centerY) {
          var circleY = centerY + Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2))
          if (y > circleY) {
            y = circleY
          }
        }
        if (x == startX) {
          linePath.moveTo(x, y)
          startPoint = [x, y]
        } else if (x == endX) {
          endPoint = [x, y]
        }
        linePath.lineTo(x, y)
      }
      linePath.moveTo(endPoint[0], endPoint[1])
      linePath.arc(-2 * radius, 0, radius)
      linePath.close()
      return (
        <Shape d={linePath} strokeWidth={0} fill={this.props.bobocolor} />
      )
    } else {
      const linePath = new Path()
        .moveTo(radius + 30, 30)
        .arc(0, radius * 2, radius)
        .arc(0, -radius * 2, radius)
        .close();
      return (
        <Shape d={linePath} strokeWidth={0} fill={this.props.bobocolor} />
      )
    }
  }

  typeView() {
    if (this.props.type === 'dc') {
      return this.artDrawDCChargeWaveView()
    } else if (this.props.type === 'ac') {
      return this.artDrawACChargeView()
    }
  }

  render() {
    return (
      <View style={{ width: this.props.surfaceWidth, height: this.props.surfaceHeigth, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.0)', }}>
        {this.typeView()}
      </View>
    )
  }
}