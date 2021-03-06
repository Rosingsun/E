import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { PanResponder, Animated } from 'react-native';
function getNextIndex(index) {
    var nextIndex = index + 1
    if (nextIndex > Projects.length - 1) {
        return 0;
    }
    return nextIndex;

}
class ProjectsScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        pan: new Animated.ValueXY(),
        scale: new Animated.Value(0.9),
        translateY: new Animated.Value(44),
        thirdScale: new Animated.Value(0.8),
        thirdTranslateY: new Animated.Value(-50),
        index: 0,
        opacity: new Animated.Value(0),
    };
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                Animated.spring(this.state.scale, { toValue: 1 }).start();
                Animated.spring(this.state.translateY, { toValue: 0 }).start();
                Animated.spring(this.state.thirdScale, { toValue: 0.9 }).start();
                Animated.spring(this.state.thirdTranslateY, { toValue: 44 }).start();
                Animated.timing(this.state.opacity, { toValue: 1 }).start();
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: () => {
                const positionY = this.state.pan.y.__getValue();
                const positionX = this.state.pan.x.__getValue();
                Animated.timing(this.state.opacity, { toValue: 0 }).start();
                if (positionY > -400) {
                    Animated.timing(this.state.pan, {
                        toValue: { x: positionX * 10, y: positionY * 10 }
                    }).start(() => {
                        this.state.pan.setValue({ x: 0, y: 0 });
                        this.state.scale.setValue(0.9);
                        this.state.translateY.setValue(44);
                        this.state.thirdScale.setValue(0.8);
                        this.state.thirdTranslateY.setValue(-24);
                        this.setState({ index: getNextIndex(this.state.index) })
                    });
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 }
                    }).start();
                    Animated.spring(this.state.scale, { toValue: 0.9 }).start();
                    Animated.spring(this.state.translateY, { toValue: 44 }).start();
                    Animated.spring(this.state.thirdScale, { toValue: 0.8 }).start();
                    Animated.spring(this.state.thirdTranslateY, { toValue: -50 }).start();
                }
            }
        });
    }
    render() {
        return (
            <Container>
                <AnimatedMask style={{ opacity: this.state.opacity }} />
                <Animated.View
                    style={{
                        transform: [
                            { translateX: this.state.pan.x },
                            { translateY: this.state.pan.y }
                        ]
                    }}
                    {...this._panResponder.panHandlers}
                >
                    <Project
                        title={Projects[this.state.index].title}
                        image={{uri:Projects[this.state.index].image}}
                        author={Projects[this.state.index].author}
                        // text={Projects[this.state.index].text}
                        canOpen={true}
                    />

                </Animated.View>
                <Animated.View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [{ scale: this.state.scale },
                    { translateY: this.state.translateY }]

                }}>
                    <Project
                        title={Projects[getNextIndex(this.state.index)].title}
                        image={{uri:Projects[getNextIndex(this.state.index)].image}}
                        author={Projects[getNextIndex(this.state.index)].author}
                    // text={Projects[getNextIndex(this.state.index)].text}

                    />
                </Animated.View>
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -3,
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: [{ scale: this.state.thirdScale },
                        { translateY: this.state.thirdTranslateY }]

                    }}>
                    <Project
                        title={Projects[getNextIndex(this.state.index + 1)].title}
                        image={{uri:Projects[getNextIndex(this.state.index + 1)].image}}
                        author={Projects[getNextIndex(this.state.index + 1)].author}
                    // text={Projects[getNextIndex(this.state.index + 1)].text}

                    />
                </Animated.View>
            </Container>
        );
    }
}

export default ProjectsScreen;

const Mask = styled.View`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(255,255,255,1);
  z-index:-3;
`;
const AnimatedMask = Animated.createAnimatedComponent(Mask);
const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background:#fff;
`;
const Text = styled.Text``;
const Projects = [
    {
        title: "Price Tag1",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code.3242342....................Thanks to Design+Code.3242342...................." +
            "Thanks to Design+Code.3242342....................Thanks to Design+Code.3242342...................." +
            "Thanks to Design+Code.3242342....................Thanks to Design+Code.3242342...................." +
            "与其让你在我怀中枯萎，宁愿你犯错后悔。"
    },
    {
        title: "Price Tag2",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code....4324242................."
    },
    {
        title: "Price Tag3",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code..........57676768..........."
    },
    {
        title: "Price Tag4",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code..........57676768..........."
    },
    {
        title: "Price Tag5",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code..........57676768..........."
    },
    {
        title: "Price Tag6",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code..........57676768..........."
    },
    {
        title: "Price Tag7",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            "Thanks to Design+Code..........57676768..........."
    },
    {
        title: "Price Tag8",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "Liu Yi",
        text:
            `Thanks to Design+Code.......21412156........
        Thanks to Desi`
    },
    {
        title: "猪头妹",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/78/5f3c962fb56c6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        author: "天才少年",
        text:
            "Thanks to Design+Code.......21412156........" +
            "Thanks to Design+Code.......21412156........" +
            "Thanks to Design+Code.......21412156........"
    },
]

