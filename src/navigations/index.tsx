import {Alert, Button, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../routes/LoginPage';
import Details from '../routes/Details';
import Home from '../routes/Home';
import CountScreen from '../routes/CountScreen';
import LoginPage from '../routes/LoginPage';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="blue"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CountScreen" component={CountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
