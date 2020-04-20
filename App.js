import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestionList';
import CategoryList from './src/videos/containers/cagetoryList';
import Api from './src/services/api';
import Player from './src/player/containers/player';
import {store, persistor} from './src/redux/store';
import Loading from './src/sections/components/loading';
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
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
