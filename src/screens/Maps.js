import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopBar from '../components/TopBar';
import * as Linking from 'expo-linking';

export default function Maps() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/AppDetails/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>

        <TopBar />
        
        <View style={styles.textocontainerMap}>
          <Text style={styles.textoMap}>Endereço:</Text>
          <Text style={styles.textoMap}>Via Roma - 123, Firenze, </Text>
          <Text style={styles.textoMap}>CEP: 50123</Text>
          <Text style={styles.textoMap}>CNPJ: 12.345.678/0001-90</Text>
        </View>

        <View style={styles.iconesMap}>
          <Ionicons onPress={() => Linking.openURL('https://linkedin.com')} name="logo-linkedin" style={styles.botaoMenu}> </Ionicons>
          <Ionicons onPress={() => Linking.openURL('https://instagram.com')} name="logo-instagram" style={styles.botaoMenu}> </Ionicons>
          <Ionicons onPress={() => Linking.openURL('https://whatsapp.com')} name="logo-whatsapp" style={styles.botaoMenu}> </Ionicons>
          <Ionicons onPress={() => Linking.openURL('https://ifood.com')} name="restaurant-outline" style={styles.botaoMenu}> </Ionicons>
        </View>
        <MapView
          style={styles.map} />

      </ImageBackground>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  textocontainerMap: {
    width: '90%',
    margin: 40,
    gap: 20
  },
  textoMap: {
    fontSize: 20,
    color: '#BFA55F'
  },
  map: {
    width: "90%",
    height: 300,
    margin: 20
  },
  iconesMap: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    gap: 35
  },
  botaoMenu: {
    fontSize: 40,
    color: '#BFA55F',
  },
});