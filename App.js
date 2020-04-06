import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}
