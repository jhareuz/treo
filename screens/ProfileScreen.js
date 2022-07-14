import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const user = useSelector(store => store.general.array)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#694fad' barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.logo}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }}
            style={{ height: '100%', width: '100%' }}
            resizeMode="stretch"
          />
        </View>
      </View>
      <Animatable.View
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
        animation="fadeInUpBig"
      >
        <Text style={[styles.text_footer]}>E-mail</Text>
        <View style={styles.action}>
          <Feather
            name="phone"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your phone"
            style={styles.textInput}
            keyboardType='number-pad'
            value={user[0]?.username}
            onChangeText={(val) => handlePhoneChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 30
        }]}>First Name</Text>
        <View style={styles.action}>
          <Feather
            name="phone"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your phone"
            style={styles.textInput}
            keyboardType='number-pad'
            value={user[0]?.firstName}
            onChangeText={(val) => handlePhoneChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 30
        }]}>Phone</Text>
        <View style={styles.action}>
          <Feather
            name="phone"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your phone"
            style={styles.textInput}
            keyboardType='number-pad'
            maxLength={10}
            value={user[0]?.phone}
            onChangeText={(val) => handlePhoneChange(val)}
          />
        </View>
        <View style={{height: 60, width: '100%', alignItems:'center', marginTop: 20}}>
          <View style={{height: '100%', width: '60%', backgroundColor:'#694fad', alignItems:'center', borderRadius: 20, justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', color:'white'}}>Update Data</Text>
          </View>
        </View>

      </Animatable.View>
    </View>
  );
};

export default ProfileScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#694fad'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
    backgroundColor: 'lightgrey'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
