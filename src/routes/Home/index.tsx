import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Second Item',
  },
  {
    id: 5,
    title: 'Third Item',
  },
];

const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatlistView}>
        <Text>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={3}
        //horizontal={true}
        // horizontal={true}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistView: {
    marginHorizontal: 10,
    marginVertical: 30,
    padding: 20,
  },
  title: {
    backgroundColor: 'pink',
    fontSize: 20,
  },
});
