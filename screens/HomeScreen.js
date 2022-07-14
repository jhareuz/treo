import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { listHome } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { generalDataAction } from '../redux/generalDuck';
import { Avatar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const general = useSelector(store => store.general.array)
  const { colors } = useTheme();
  const [data, setData] = React.useState([])

  const theme = useTheme();

  React.useEffect(() => {
    listHome(general[0]?.userToken)
      .then((response) => {
        console.log('response:::::', response.user)
        setData(response.user)
      })
      .catch((err) => {
        console.log('err:::::', err)
      })
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('BookmarkScreen', { item: item })}>
        <View style={{ width: '100%', height: 80, flexDirection: 'row', borderWidth: 2, borderRadius: 10, borderColor: 'grey' }}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar.Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
              }}
              size={50}
              style={{ backgroundColor: 'lightgrey' }}
            />
          </View>
          <View style={{ width: '70%', height: '100%', justifyContent: 'space-around' }}>
            <Text style={styles.text}>{`${item?.first_name} ${item?.last_name}`}</Text>
            <Text style={styles.text}>{item?.email}</Text>
            <Text style={styles.text}>{item?.phone_number}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.container}>
        <View style={{ width: width / 1.2, height: '90%' }}>
          <FlatList
            // numColumns={3}
            keyExtractor={(item, index) => `item-${index}`}
            data={data}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10 }} />
            )}
            renderItem={({ item }) => renderItem(item)}
          />
        </View>

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: height / 1.17,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 11
  }
});
