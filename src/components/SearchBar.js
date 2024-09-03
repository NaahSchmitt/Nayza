import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.input}>
      <Ionicons style={styles.iconSearch} name="search-outline"></Ionicons>
      <TextInput
        style={styles.barra}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#BFA55F',
    padding: 5,
    fontSize: 16,
    borderRadius: 20,
    color: 'white',
    flexDirection: 'row',
    width: '90%',
    marginTop: 25,
    marginHorizontal: 'auto',
    borderWidth: 2,
    paddingLeft: 20,
    alignItems: 'center',
  },
  barra: {
    width: '80%',
    height: '100%',
    margin: 10,
    color: 'white',
    fontSize: 16
  },
  iconSearch: {
    color: '#BFA55F',
    fontSize: 25
  },
});