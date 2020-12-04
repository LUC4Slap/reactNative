import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

class Frase extends Component {
  render() {
    const {data} = this.props;
    const monstraFrase = (frase) => {
      Alert.alert('Frase escolhida', frase);
    };
    return (
      <TouchableOpacity
        style={styles.boxFrase}
        onPress={() => monstraFrase(data.frase)}>
        <Text style={styles.frase}>{data.frase}</Text>
        <Text style={styles.autor}>Autor: {data.autor}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  boxFrase: {
    margin: 10,
    borderWidth: 2,
    padding: 5,
    backgroundColor: '#3A7CA5',
  },
  frase: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  autor: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 4,
    color: '#81C3D7',
    fontWeight: 'bold',
  },
});

export default Frase;
