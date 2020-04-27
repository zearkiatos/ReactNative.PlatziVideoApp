import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-native';
import MovieLayout from '../components/movie';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../components/close';
import Details from '../../videos/components/details';
import * as videoActions from '../../redux/actions/videoActions';

const {clearSelectedMovie} = videoActions;

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  };
  closeVideo = () => {
    this.props.clearSelectedMovie();
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {toValue: 1, duration: 1000}).start();
  }
  render() {
    const {movie} = this.props;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <MovieLayout>
          <Header>
            <Close onPress={this.closeVideo} />
          </Header>
          <Player />
          <Details {...movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

const mapDispatchToProps = {
  clearSelectedMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
