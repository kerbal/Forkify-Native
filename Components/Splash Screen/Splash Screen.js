import React from 'react';
import { Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { container_style } from '../../Style/container';

export default class SplashScreen extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <LinearGradient
        colors={['#ffeaa7', '#e17055']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={container_style.container}
      >
        <Image style={styles.stretch} resizeMode="contain" source={require('../../Image/logo.png')}/>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200
  }
});