import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/playPause';

class Player extends Component {
  state = {
    loading: true,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = () => {
    this.setState({
      loading: false,
      paused: false,
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
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
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="#88c639" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text>Progress Bar |</Text>
            <Text>Time less |</Text>
            <Text>Fullscreen |</Text>
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
