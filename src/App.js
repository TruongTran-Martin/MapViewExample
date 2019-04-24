/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import NavigationScreen from './screens/Navigation';
import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';
import './config/Reactotron';
import axios from 'axios';
import  MyApp  from './screens/Navigation';


//setup default axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default class App extends Component {
  render() {
    return (
      // <Container>
        <MyApp/>
      // </Container>
    );
  }
}

