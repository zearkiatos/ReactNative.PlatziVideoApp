import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import API from '../../services/api';
import {connect} from 'react-redux';

class Search extends Component {
  state = {
    text: '',
  };
  handleSubmit = async () => {
    const {text} = this.state;
    const movies = await API.searchMovie(text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0],
      },
    });
  };
  handleChangeText = text => {
    this.setState({
      text,
    });
  };

  render() {
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
export default connect(null)(Search);
