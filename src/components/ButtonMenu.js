import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export default function ButtonMenu() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View style={{ height: '120%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        style={styles.containerMenu}
        visible={visible}
        anchor={<Ionicons name="menu-outline" style={styles.botaoMenu} onPress={showMenu}> </Ionicons>}
        onRequestClose={hideMenu}
      >
        <MenuItem style={{ alignItems: 'center' }}><Ionicons name="person" style={styles.perfilMenu}></Ionicons></MenuItem>
        <MenuItem style={{ alignItems: 'center' }} onPress={hideMenu}><Text style={styles.textoMenu}>Perfil</Text></MenuItem>
        <MenuItem style={{ alignItems: 'center' }} onPress={hideMenu}><Text style={styles.textoMenu}>Configurações</Text></MenuItem>
        <MenuItem style={{ alignItems: 'center' }} onPress={hideMenu}><Text style={styles.textoMenu}>Sobre</Text></MenuItem>
        <MenuItem style={{ alignItems: 'center' }} onPress={hideMenu}><Text style={styles.textoMenu}>Ajuda</Text></MenuItem>
      </Menu>
    </View>
  );
}



const styles = StyleSheet.create({
  botaoMenu: {
    fontSize: 40,
    color: '#BFA55F',
  },
  containerMenu: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
    borderRadius: 15,
    padding: 10

  },
  textoMenu: {
    color: '#fff',
    fontSize: 15,
  },
  perfilMenu: {
    fontSize: 40,
    color: '#BFA55F',
  }

});