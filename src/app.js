import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestionList';
import CategoryList from './videos/containers/cagetoryList';
import Player from './player/containers/player';
import Api from './services/api';
class AppLayout extends Component {
  state = {
    // suggestionList: [],
    // categoryList: [],
  };
  async componentDidMount() {
    const categoryList = await Api.getMovies();

    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });

    const suggestionList = await Api.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Player />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

export default connect(null)(AppLayout);
