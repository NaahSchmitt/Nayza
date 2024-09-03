import { TextInput, StyleSheet } from 'react-native';

const InputBar = ({ onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    padding: 15,
    fontSize: 16,
    borderRadius: 50,
    color: 'white',
    width: '80%',
    borderWidth: 2,
    paddingLeft: 20,
  },
});

export default InputBar;
