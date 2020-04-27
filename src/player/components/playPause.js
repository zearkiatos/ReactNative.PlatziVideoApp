import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const FullScreen = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="transparent"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      {props.paused ? (
        <FontAwesome style={styles.button} icon={SolidIcons.play} />
      ) : (
        <FontAwesome style={styles.button} icon={SolidIcons.pause} />
      )}
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  button: {
    color: '#88c639',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
  },
});
export default FullScreen;
