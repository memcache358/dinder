import React,{Component} from 'react';
import AppNavigator from './src/cmp/app.navigator'
import {Container} from 'native-base'


export default class App extends React.Component {
  state = {
    loading: false,
  }
  
  render() {
    return (
      <Container>
        <AppNavigator/>
      </Container>
    )
  }
}
