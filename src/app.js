import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestionList';
import CategoryList from './videos/containers/cagetoryList';
import Movie from './screens/containers/movie';
import Api from './services/api';
import Search from './sections/containers/Search';
class AppLayout extends Component {
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
    const {selectedMovie} = this.props;
    if (selectedMovie) {
      return <Movie />;
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(AppLayout);
