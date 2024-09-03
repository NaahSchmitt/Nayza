import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import ListFood from './ListFood';

const FillNumbers = () => {
  const [userInputs, setUserInputs] = useState(['', '', '', '', '', '']);
  const [showMenu, setShowMenu] = useState(false);
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    const updatedInputs = [...userInputs];
    updatedInputs[index] = text;

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

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
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

      <TouchableOpacity style={styles.botaoMenu} onPress={handleMenuPress}>
        <Text style={styles.botaoTexto}>Ver Menu</Text>
      </TouchableOpacity>

      {showMenu && <ListFood />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  squaresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  square: {
    width: 55,
    height: 80,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#393939',
    backgroundColor: '#1F1F1F',
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
    color: '#FFFFFF',
  },
  botaoMenu: {
    width: '50%',
    marginHorizontal: 'auto',
    backgroundColor: '#BFA55F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
  },
  botaoTexto: {
    fontSize: 18,
    color: '#000000',
  },
});

export default FillNumbers;