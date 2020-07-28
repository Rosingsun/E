
import { Dimensions } from 'react-native';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

const Global = {
        //背景颜色
        backWhite:"#ffffff",
        backPurpor:"#2F3843",
        backGreen:"#6C9575",
        backYellow:"#FAAF3D",
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
// module.exports = Global;