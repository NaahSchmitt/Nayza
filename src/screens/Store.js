import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import ListFood from '../components/ListFood';

export default function Store() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/AppDetails/Wallpaper.png')}
        resizeMode="cover"
        style={styles.imageBackground}>

        <TopBar />

        <ScrollView>
          <ListFood />
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