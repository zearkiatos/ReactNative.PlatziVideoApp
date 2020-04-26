import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Error = props => {
  const {message} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C8C',
    flex: 1,
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  message: {
    color: 'red',
    fontSize: 12,
  },
});
export default Error;
