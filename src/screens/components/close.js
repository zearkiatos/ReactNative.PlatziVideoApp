import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
const Close = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#88c639',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Close;
