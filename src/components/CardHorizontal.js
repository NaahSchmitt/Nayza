import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function CardHorizontal({ titulo, estrelas, imagem }) {
  return (
    <View style={styles.containerHorizontal}>
      <ImageBackground
        style={[styles.cardImagem]}
        source={imagem}
      >

        <Text style={styles.tituloCard}>{titulo}</Text>
        <Text style={styles.estrelasCard}>{estrelas}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHorizontal: {
    margin: 10,
    borderRadius: 20,
  },
  cardImagem: {
    width: 250,
    marginHorizontal: 'auto',
    height: 220,
    backgroundColor: '#000',
    borderRadius: 20,
    objectFit: 'cover',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCard: {
    fontSize: 25,
    fontWeight: "600",
    color: 'white',
  },
  estrelasCard: {
    fontSize: 20,
    fontWeight: "400",
    color: 'white',
  }

});