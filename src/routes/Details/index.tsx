import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button} from 'react-native';
import SampleComponent from '../../components/SampleComponents';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params?.subTitle;
  //const {name, id} = route.params;

  return (
    <View>
      <Text>{'Get Details'}</Text>

      {/* <Text>Name: {name}</Text>
      <Text>id: {id}</Text> */}

      <Button
        title={'Go to CountScreen '}
        onPress={() => navigation.navigate('CountScreen')}
      />
      <Text>{title}</Text>
      <SampleComponent name="Prakruthi" rollNo={23} />
    </View>
  );
};
export default Details;
