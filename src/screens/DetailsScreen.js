
import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

//TELA DE DETALHES
export default class DetailsScreen extends Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>Tela de Detalhes</Text>
          </View>
  
          <View style={{margin:20}}>
            <Button
              title = 'Voltar'
              onPress = { () => this.props.navigation.navigate('Profile') }
            />
          </View>
  
  
        </View>
      );
    }
  }

