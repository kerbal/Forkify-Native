/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import { Container, Header, Content, Footer, Left, Body, Right, 
  Title, FooterTab, Button } from 'native-base';
import HomeScreen from './Components/Home/Home';
import SplashScreen from './Components/Splash Screen/Splash Screen';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render () {
    if(this.state.isLoading) {
      return (
        <SplashScreen/>
      );
    }

    return (
      <NativeRouter>
        <Container>
          <Content>
            <Route exact path="/" component={HomeScreen}/>
          </Content>
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button vertical>
                <Icon name="home"/>
                <Text>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="search"/>
                <Text>Search</Text>
              </Button>
              <Button vertical>
                <Icon name="heart"/>
                <Text>Favorite</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>
    );
  }

  async componentWillMount() {
    setTimeout(async () => {
      await this.setState(() => ({
        isLoading: false
      }));
    }, 1000)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#FBDB89',
  },
  footer: {
    backgroundColor: '#FBDB89'
  }
});
