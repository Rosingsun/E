import { Dimensions, Platform } from 'react-native';
import { getInputRangeFromIndexes } from 'react-native-snap-carousel'; // 3.7.2

const SLIDER_WIDTH = Dimensions.get('window').width - 72;
export const TRANSLATE_VALUE = Math.round(SLIDER_WIDTH * 0.3);

export function scrollInterpolator(index, carouselProps) {
  const range = [1, 0, -1];
  const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  const outputRange = range;

  return { inputRange, outputRange };
}
export function animatedStyles(index, animatedValue, carouselProps, currentIndex) {
  const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  let animatedOpacity = {};
  let animatedTransform = {};
  let animationZIndex = {};
  const shadowProp = Platform.OS === 'android' ? 'elevation' : 'zIndex';

  if (carouselProps.inactiveSlideOpacity < 1) {
    animatedOpacity = {
      opacity: animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0.8, 1, 0.8],
      }),
    };
  }

  animationZIndex = {
    elevation: animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, carouselProps.data.length - index, carouselProps.data.length - index],
      })
  }

  // zIndex: carouselProps.data.length - index;

  if (carouselProps.inactiveSlideScale < 1) {
    animatedTransform = {
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              carouselProps.inactiveSlideScale,
              1,
              carouselProps.inactiveSlideScale,
            ],
          }),
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              TRANSLATE_VALUE ,
              0,
              -TRANSLATE_VALUE,
            ],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  return {
    // ...animatedOpacity,
    ...animatedTransform,
    zIndex: index < currentIndex ? 0 : carouselProps.data.length - index,
    ...animationZIndex
  };
}
