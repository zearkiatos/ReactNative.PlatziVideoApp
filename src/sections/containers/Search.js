import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as videoActions from '../../redux/actions/videoActions';
import SkeletonLoading from '../components/skeletonLoading';
import Error from '../components/Error';
const {setSelectedMovieByText} = videoActions;

class Search extends Component {
  state = {
    text: '',
  };
  handleSubmit = async () => {
    const {text} = this.state;
    await this.props.setSelectedMovieByText(text);
  };
  handleChangeText = text => {
    this.setState({
      text,
    });
  };
  loading = () => {
    const {loading} = this.props;
    return loading && <SkeletonLoading isLoading={loading} />;
  };
  error = () => {
    const {error, errorMessage} = this.props;
    return error && <Error message={errorMessage} />;
  };
  render() {
    console.log(this.props);
    this.loading();
    this.error();
    return (
      <TextInput
        style={styles.input}
        placeholder="Busca tu película favorita"
        autoCorrent={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
      />
    );
  }
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    payload: state.payload,
  };
};
const mapDispatchToProps = {
  setSelectedMovieByText,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
