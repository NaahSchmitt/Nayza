import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import BarraSuperior from './components/BarraSuperior';
import InputSearch from './components/InputSearch';



export default function Seacrh() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./img/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <BarraSuperior />

        
        <ScrollView style={styles.containerScroll}>
        <InputSearch />
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
  containerScroll: {
    marginBottom: 100,
    width: '100%'
  }
});