import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, } from 'react-native';
import BarraSuperior from './components/BarraSuperior';
import InputSearch from './components/Numeros';

export default function Seacrh() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./img/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>

        <BarraSuperior />
        <View style={styles.centerContainer}>
          <InputSearch />
        </View>
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
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
});