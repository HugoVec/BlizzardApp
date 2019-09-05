/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Definir as Rotas, Criar as telas, Nas telas criar os botoes
//Na Propriedade OnPress defina a rota que ele vai

//TELA HOME
class HomeScreen extends Component {
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

// Quando tem () => é uma função invisivel
//TELA DE PROFILE
class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Perfil',
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

//TELA DE DETALHES
class DetailsScreen extends Component {
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

//ROTAS PRAS OUTRAS TELAS
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },

    Profile: {
      screen: ProfileScreen
    },

    Details: {
      screen: DetailsScreen
    }
  },
  {//Rota inicial é Home
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

/** 
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}

    setInterval(
      () => {this.setState({date: new Date()})},
      1000
    )
  }

  render(){
    return(
      <Text style={{fontSize:50}}>Hora: {this.state.date.toLocaleTimeString()}</Text>
    );
  }
}
*/

export default class App extends Component{
  render() {
    return <AppContainer/>;
  }
}
