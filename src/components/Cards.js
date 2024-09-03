import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, ImageBackground } from 'react-native';

export default function Cards() {
  return (
    <View style={{ borderRadius: 20 }}>
      <ImageBackground
        style={[styles.cardImagem]}
        source={require('../img/Hamburguer/1.png')}
      >

        <Text style={styles.tituloCard}>Título</Text>
        <Text style={styles.estrelasCard}>✯✯✯✯✯</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImagem: {
    width: 380,
    marginHorizontal: 'auto',
    height: 300,
    backgroundColor: '#000',
    borderRadius: 20,
    marginTop: 30,
    objectFit: 'cover',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCard: {
    fontSize: 40,
    fontWeight: "800",
    color: 'white',
  },
  estrelasCard: {
    fontSize: 30,
    fontWeight: "800",
    color: 'white',
  }

});