import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { home_style } from './Style';

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={home_style.container}>
        <Text>
          Home
        </Text>
      </View>
    );
  }
}