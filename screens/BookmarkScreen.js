import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { details } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/core';

const BookmarkScreen = () => {

  const general = useSelector(store => store.general.array)
  const route = useRoute();
  const [data, setData] = React.useState({})

  useEffect(() => {
    details(general[0]?.userToken, route?.params?.item?._id)
      .then((response) => {
        console.log('details:::::', response?.user)
        setData(response?.user)
      })
      .catch((err) => {
        console.log('err:::::', err)
      })
  }, [route?.params]);

  return (
    <View style={styles.container}>
      <View style={{ height: '30%', width: width, justifyContent: 'center', alignItems: 'center' }}>
        <Avatar.Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
          }}
          size={150}
          style={{ backgroundColor: 'lightgrey' }}
        />
      </View>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.subtitle}>{`${data?.first_name} ${data?.last_name}`}</Text>
      <Text style={styles.title}>E-mail</Text>
      <Text style={styles.subtitle}>{`${data?.email}`}</Text>
      <Text style={styles.title}>Phone</Text>
      <Text style={styles.subtitle}>{`${data?.phone_number}`}</Text>
    </View>
  );
};

export default BookmarkScreen;

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    alignItems: 'flex-start'
  },
  title: {
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 30,
    fontWeight:'bold'
  },
  subtitle: {
    paddingLeft: 40,
    fontWeight: '600',
    fontSize: 20,
  }
});
