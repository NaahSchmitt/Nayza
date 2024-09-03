import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import receitas from './menu.json';

export default function MenuRest() {
  return (
    <ScrollView style={styles.container}>
      {receitas.map((receita, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: receita.imagem }} style={styles.imagemReceita} />
          <View style={styles.conteudo}>
            <Text style={styles.titulo}>{receita.name}</Text>
            <Text style={styles.info}>{receita.acompanhamento}</Text>
            <Text style={styles.info}>{receita.quantidade}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 90,
    marginTop: 50
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,

  },
  conteudo: {
    width: '90%',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  titulo: {
    fontSize: 20,
    color: '#C1A764',
  },
  info: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 2,

  },
  imagemReceita: {
    width: 150,
    height: 150,
    marginRight: 10,
  }
});