import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/categoryListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontalSeparetor';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay elementos sugeridos ☹" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <Layout title="Categoría">
        <FlatList
          horizontal
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

export default CategoryList;
