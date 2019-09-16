//CODIGO PRA COLOCAR UM DRAWER E UM NAVIGATION VIEW NO MESMO STACK!!
 
import React, { Component } from 'react'; //Components
import { createAppContainer } from 'react-navigation'; //Navegação
import { createStackNavigator } from 'react-navigation-stack'; //Navegação
import { createDrawerNavigator } from 'react-navigation-drawer'; //Drawer
import { Home, Map, NPCs, Char, Eru } from './src/screens'; //Telas

//Rotas do DraweMenu

//São 2 Stacks em 1 só nest pra poder usar os 2
const AppStackNavigator = createStackNavigator(
  {
    drawFlow: {
      screen: createDrawerNavigator({
        Home: Home,
        Map: Map,
        NPCs: NPCs,
        Char: Char,
      },
      {
        contentOptions: {
          labelStyle: {
            fontSize: 20
          }
        }
      }
      )
    },
    Eru: {
      screen: Eru
    }
  }
);


//AppNavigator, Drawer 
const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}


