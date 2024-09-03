import React from 'react';
import { Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import CardPrincipal from '../components/CardPrincipal';
import CardHorizontal from '../components/CardHorizontal';
import SearchBar from '../components/SearchBar';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/AppDetails/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <TopBar />
        <ScrollView style={styles.containerScroll}>


          <CardPrincipal />

          <SearchBar />


          <Text style={styles.tituloSecond}>Restaurantes</Text>
          <ScrollView style={styles.containerHorizontal} horizontal={true}>
            <CardHorizontal imagem={require('../assets/Restaurants/1.jpg')} titulo="Resta.1" estrelas="✯✯✯✯✯" />
            <CardHorizontal imagem={require('../assets/Restaurants/2.jpg')} titulo="Resta.2" estrelas="✯✯✯" />
            <CardHorizontal imagem={require('../assets/Restaurants/3.jpg')} titulo="Resta.3" estrelas="✯✯✯✯" />
            <CardHorizontal imagem={require('../assets/Restaurants/4.jpg')} titulo="Resta.4" estrelas="✯✯✯✯✯" />
            <CardHorizontal imagem={require('../assets/Restaurants/5.jpg')} titulo="Resta.5" estrelas="✯✯✯✯" />
          </ScrollView>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  tituloSecond: {
    fontSize: 20,
    margin: 15,
    color: 'white',

  },
  containerScroll: {
    marginBottom: 100,
    width: '100%'
  }
});