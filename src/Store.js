import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BarraSuperior from './components/BarraSuperior';
import MenuRest from './components/MenuRest';

export default function Store() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./img/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <BarraSuperior />
        <ScrollView>
          <MenuRest />
        </ScrollView>
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
});