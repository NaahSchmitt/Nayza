import React from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, } from 'react-native';
import TopBar from '../components/TopBar';
import FillNumbers from '../components/FillNumbers';

export default function Seacrh() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/AppDetails/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>

        <TopBar />

        <View style={styles.centerContainer}>
          <FillNumbers />
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
    marginTop: '10%',

  },
});