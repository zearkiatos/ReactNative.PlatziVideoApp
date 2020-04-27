import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestionList';
import CategoryList from './videos/containers/cagetoryList';
import Movie from './screens/containers/movie';
import Search from './sections/containers/Search';
import SkeletonLoading from './sections/components/skeletonLoading';
import Error from './sections/components/Error';
import * as videoActions from './redux/actions/videoActions';
const {setCategoryList, setSuggestionList} = videoActions;
class AppLayout extends Component {
  async componentDidMount() {
    await this.props.setCategoryList();
    await this.props.setSuggestionList(10);
  }
  loading = () => {
    const {loading} = this.props;
    return loading && <SkeletonLoading isLoading={loading} />;
  };
  error = () => {
    const {error, errorMessage} = this.props;
    return error && <Error message={errorMessage} />;
  };

  render() {
    const {selectedMovie} = this.props;
    this.loading();
    this.error();
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
    loading: state.loading,
    error: state.error,
    payload: state.payload,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = {
  setCategoryList,
  setSuggestionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLayout);
