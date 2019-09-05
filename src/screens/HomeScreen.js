
import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';


//TELA HOME
export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: 'purple'
      }
    };
  
    render() {
      return(
        <View style={{flex:1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>Tela Principal!</Text>
          </View>
  
          <View style={{margin: 20}}>
            <Button 
              title = 'Ir pra Perfil'
              onPress = { () => this.props.navigation.navigate('Profile', {name: 'Hugo', age: 20}) }
            />
          </View>
  
        </View>
      );
    }
  }