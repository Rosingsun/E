import React from 'react';
// import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={{uri:"http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true"}}
      />
    );
  }
}