import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu de Pizza</Text>

        <Picker>
          <Picker.Item key={} value={} label={} />
        </Picker>
        <Text style={styles.pizzas}>Você escolheu: Pizza Calabresa</Text>
        <Text style={styles.pizzas}>R$ 35,50</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#232528',
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
