import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestionList';
import CategoryList from './src/videos/containers/cagetoryList';
import Api from './src/services/api';
import Player from './src/player/containers/player';
import store from './src/redux/store';
type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: [],
  };
  async componentDidMount() {
    const categoryList = await Api.getMovies();

    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });

    const suggestionList = await Api.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
