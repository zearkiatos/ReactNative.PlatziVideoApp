import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const ProgressBar = props => {
  const {time, duration, currentTime} = props;
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View
          style={{
            position: 'absolute',
            marginRight: 5,
            borderRightWidth: 5,
            borderRightColor: 'black',
            width: (currentTime * 270) / duration,
            height: 16,
            backgroundColor: '#8AC73A',
          }}
        />
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 320,
    height: 32,
    paddingVertical: 8,
  },
  bar: {
    marginRight: 5,
    width: 270,
    height: 16,
    backgroundColor: 'rgba(138,199,58,0.5)',
  },
  barProgress: {
    position: 'absolute',
    marginRight: 5,
    borderRightWidth: 5,
    borderRightColor: 'black',
    width: 3,
    height: 16,
  },
  time: {
    top: -2,
    color: '#8AC73A',
  },
});
export default ProgressBar;
