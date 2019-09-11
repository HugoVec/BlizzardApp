
import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';

//TELA DE PROFILE
export default class ProfileScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Profile',
      title: 'Profile',
      headerStyle: {
        backgroundColor: 'blue'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };
  
    render() {
  
      const name = this.props.navigation.getParam('name', 'NoName')
      const age = this.props.navigation.getParam('age', 'NoAge')
  
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>

          <View style={{margin: 20}}>
            <Image source={require('../assets/wereboar.png')}/>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>Tela de Profile! :D</Text>
            <Text style={{fontSize: 50}}>Nome: {JSON.stringify(name)}</Text>
            <Text style={{fontSize: 50}}>Idade: {JSON.stringify(age)}</Text>
          </View>
  
          <View style={{margin: 20}}>
            <Button
              title = 'Detalhes'
              onPress = { () => this.props.navigation.navigate('Details') }
            />
          </View>
  
          <View style={{margin: 20}}>
            <Button
              title = 'Voltar'
              onPress = { () => this.props.navigation.navigate('Home') }
            />
          </View>
  
        </View>
      );
    }
  }
