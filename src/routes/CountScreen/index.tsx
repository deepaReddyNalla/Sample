import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CountScreen = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const handleonPressCount = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CountScreen</Text>

      <Text style={styles.text}>Count: {count}</Text>
      <TouchableOpacity style={styles.pressStyle} onPress={handleonPressCount}>
        <Text style={styles.textIncrement}>Increment</Text>
      </TouchableOpacity>
      <Button
        title="Go to Login Page"
        onPress={() => {
          navigation.navigate('LoginPage');
        }}
      />
    </View>
  );
};

export default CountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  textIncrement: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'blue',
  },
  pressStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
