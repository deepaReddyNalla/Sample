import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  rollNo: number;
}
const SampleComponent = ({name, rollNo}: Props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Sample Components</Text>

      <Image
        source={require('./../../assets/nature.jpg')}
        style={styles.imageStyle}
      />

      <Text>UserName: {name}</Text>
      <Text>RollNo: {rollNo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20,
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});

export default SampleComponent;
