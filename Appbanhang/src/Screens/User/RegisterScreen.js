import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import ipconfig from '../../IpApp';
const WIDTH__SCREEN = Dimensions.get('screen').width;
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const RegisterScreen = ({navigation}) => {
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  // const [errorEmail, setErrorEmail] = useState();
  // const [errorPassword, setErrorPassword] = useState();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const Register = async () => {
    try {
      if (!Email || !emailRegex.test(Email)) {
        Alert.alert(
          'Cảnh báo !',
          'Vui lòng điền đầy đủ thông tin và đúng định dạng email',
        );
        return null;
      } else if (!password || password < 8) {
        Alert.alert(
          'Cảnh báo !',
          'Vui lòng điền đầy đủ thông tin và đúng định dạng Password',
        );
        return null;
      } else if (!rePassword || rePassword !== password) {
        Alert.alert(
          'Cảnh báo !',
          'Vui lòng điền đầy đủ thông tin và xác nhận phải trùng với Password !',
        );
        return null;
      } else {
        const response = await axios.post(`${ipconfig}/Users/Signup`, {
          Email,
          password,
        });
        if (response.status === 200) {
          await AsyncStorage.setItem('Email', response.data.user.Email);
          Alert.alert('Thông báo', 'Đăng ký  thành công !');
          navigation.navigate('Login');
        } else {
          console.log('Đăng ký thất bại!');
        }
      }
    } catch (error) {
      console.log('lỗi nè :', error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text style={styles.txt__login}>Đăng ký </Text>
            <View style={styles.input__Container}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Xác nhận mật khẩu"
                onChangeText={text => setRePassword(text)}
                secureTextEntry
              />
            </View>
            <View>
              <TouchableOpacity style={styles.btn__Login} onPress={Register}>
                <Text>Đăng ký</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txt__account}>
              Đã có tài khoản
              <Text
                style={{color: 'orange'}}
                onPress={() => navigation.navigate('Login')}>
                Đăng nhập
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  txt__account: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 4,
    marginLeft: 23,
    marginTop: 16,
  },
  btn__Login: {
    width: WIDTH__SCREEN * 0.9,
    marginHorizontal: 23,
    height: HEIGHT__SCREEN * 0.07,
    backgroundColor: 'gray',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH__SCREEN * 0.9,
    marginHorizontal: 23,
    backgroundColor: '#F4F4F4',
    marginTop: 20,
  },
  input__Container: {
    flex: 1,
  },
  txt__login: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 123,
    flex: 1,
    textAlign: 'center',
  },
});
