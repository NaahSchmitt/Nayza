import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BarraSuperior from './components/BarraSuperior';
import Cards from './components/Cards';
import CardsHorizontal from './components/CardsHorizontal';
import InputSearch from './components/BarraSearchHome';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./img/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <BarraSuperior />
        <ScrollView style={styles.containerScroll}>


          <Cards />

          <InputSearch />


          <Text style={styles.tituloSecond}>Restaurantes</Text>
          <ScrollView style={styles.containerHorizontal} horizontal={true}>
            <CardsHorizontal imagem={require('./img/Restaurantes/1.jpg')} titulo="Resta.1" estrelas="✯✯✯✯✯" />
            <CardsHorizontal imagem={require('./img/Restaurantes/2.jpg')} titulo="Resta.2" estrelas="✯✯✯" />
            <CardsHorizontal imagem={require('./img/Restaurantes/3.jpg')} titulo="Resta.3" estrelas="✯✯✯✯" />
            <CardsHorizontal imagem={require('./img/Restaurantes/4.jpg')} titulo="Resta.4" estrelas="✯✯✯✯✯" />
            <CardsHorizontal imagem={require('./img/Restaurantes/5.jpg')} titulo="Resta.5" estrelas="✯✯✯✯" />

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