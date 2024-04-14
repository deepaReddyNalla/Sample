import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Login</Text>
      <Text>Name</Text>
      <TextInput style={styles.input} />
      <Text>Email</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput style={styles.input} />

      <Button
        title="Save"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textStyle: {
    color: 'darkblue',
    alignSelf: 'center',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
export default LoginPage;
