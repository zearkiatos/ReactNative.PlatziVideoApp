import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';
import * as videoActions from '../../redux/actions/videoActions';
const {setSelectedMovie} = videoActions;
class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay elementos sugeridos ☹" />;
  itemSeparator = () => <Separator />;
  viewMovie = async item => {
    this.props.setSelectedMovie(item);
  };
  renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.suggestionList,
  };
};

const mapDispatchToProps = {
  setSelectedMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionList);
