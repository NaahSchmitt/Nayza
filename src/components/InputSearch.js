// src/Search.js
import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const Search = () => {
  const [userInputs, setUserInputs] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    const updatedInputs = [...userInputs];
    updatedInputs[index] = text;

    // Move para o próximo campo se o texto tiver 1 caractere
    if (text.length === 1 && index < 5) {
      setTimeout(() => {
        const nextInput = index + 1;
        if (nextInput < userInputs.length) {
          inputRefs.current[nextInput].focus();
        }
      }, 100);
    }

    setUserInputs(updatedInputs);
  };

  const handleSubmit = () => {
    const allInputsFilled = userInputs.every((input) => input !== '');
    if (allInputsFilled) {
      Alert.alert('Sucesso', 'Todos os campos foram preenchidos!');
      // Aqui você pode adicionar a lógica para navegar ou realizar outra ação
    } else {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.squaresContainer}>
        {userInputs.map((input, index) => (
          <View key={index} style={styles.square}>
            <TextInput
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.input}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => handleInputChange(text, index)}
              value={input}
            />
          </View>
        ))}
      </View>
      <Button title="Ver Menu" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squaresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Search;