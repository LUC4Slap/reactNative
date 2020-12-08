import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <Text>Olá, Mundo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
