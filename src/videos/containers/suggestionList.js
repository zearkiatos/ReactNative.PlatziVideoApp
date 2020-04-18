import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';
class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay elementos sugeridos ☹" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
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

export default connect(mapStateToProps)(SuggestionList);
