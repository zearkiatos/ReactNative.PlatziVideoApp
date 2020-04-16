import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/playPause';
import ProgressBar from '../components/progressBar';
import FullScreen from '../components/fullScreen';
import {secondToTime} from '../../utils/helper';
class Player extends Component {
  state = {
    loading: true,
    fullScreen: false,
    time: '00:00',
    currentTime: 0,
    duration: 0,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = ({duration}) => {
    console.log(duration);
    this.setState({
      loading: false,
      paused: false,
      fullScreen: false,
      duration,
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };

  fullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen,
    });
  };

  onProgress = ({currentTime}) => {
    this.setState({time: secondToTime(currentTime), currentTime});
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.video}
            resizeMode="cover"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            fullscreen={this.state.fullScreen}
            paused={this.state.paused}
            onProgress={this.onProgress}
          />
        }
        loader={<ActivityIndicator color="#88c639" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar
              time={this.state.time}
              duration={this.state.duration}
              currentTime={this.state.currentTime}
            />
            <FullScreen
              onPress={this.fullScreen}
              fullScreen={this.state.fullScreen}
            />
          </ControlLayout>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
