import { View, StyleSheet, Image } from 'react-native';
import ButtonMenu from './ButtonMenu';

export default function BarraSuperior() {
  return (
    <View style={styles.barraSuperior}>
      <Image style={styles.imageLogo} source={require('../img/logo.png')}></Image>
      <ButtonMenu></ButtonMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  barraSuperior: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    width: '90%',
    padding: 20,
    height: 100,
    justifyContent: 'space-between',
    borderBottomColor: '#7E7E7E',
    borderBottomWidth: 2,
    position: 'fixed',
    top: 0
  },
  imageLogo: {
    height: 40,
    width: 140,
  },
  
});


