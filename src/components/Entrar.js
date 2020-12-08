import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Entrar extends Component {
  render() {
    return (
      <View style={styles.viewModal}>
        <Text style={styles.txtModal}>Seja Bem-vindo</Text>
        <Button title="Fechar" onPress={this.props.fechar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewModal: {
    width: '100%',
    height: 350,
    backgroundColor: '#292929',
    borderRadius: 15,
    padding: 15,
  },
  txtModal: {
    color: '#fff',
    fontSize: 30,
    paddingTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Entrar;
