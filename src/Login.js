import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomInput from './components/CustomInput';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/Wallpaper.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image source={require('./img/logo.png')} />

        <Text style={styles.textoInput}>E-mail</Text>
        <CustomInput />

        <Text style={styles.textoInput}>Senha</Text>
        <CustomInput value={password}
          onChangeText={setPassword} />

        <Text style={styles.textoInput}>Esqueci a Senha!</Text>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.textoInput}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoInput: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 12,
  },

  loginButton: {
    borderColor: 'grey',
    padding: 2,
    fontSize: 16,
    borderRadius: 50,
    top: 40,
    color: 'white',
    width: '40%',
    borderWidth: 2,
  },
});

export default LoginScreen;
