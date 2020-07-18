
import { Dimensions } from 'react-native';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

const Global = {
        //第一套颜色定义
        blue: '#43949B',
        yellow: '#FFB16C',
        white: '#fff',
        gray: '#EFEFEF',
        red: '#FF0000',
        black:"#000000",
        //第二套颜色定义
        ThickGray:"#6C6C6C",
        green:"#43949B",
        signRed:"#FF0000",
        warningRed:"#FF0000",
        midGray:"#999999",
        lightGray:"#EFEFEF",
        orange:"#FFB16C",
        //定义圆角样式
        bigCircular: 15,
        midCircular: 15,
        smallCircular: 15,
        litteCircular: 15,
        //定义字体大小
        big: 20 * biLi,
        mid: 15 * biLi,
        small: 12 * biLi,
        supersmall: 10 * biLi,
        //定义比例
        biLi: biLi,
};
module.exports = Global;