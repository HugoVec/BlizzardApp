/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ProfileScreen, DetailsScreen } from './src/screens';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Definir as Rotas, Criar as telas, Nas telas criar os botoes
//Na Propriedade OnPress defina a rota que ele vai

// Quando tem () => é uma função invisivel

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

const AppContainer = createAppContainer(AppNavigator, MyDrawer);

export default class App extends Component{
  render() {
    return <AppContainer/>;
  }
}

const MyDrawer = createDrawerNavigator (
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Details: DetailsScreen
  }
)

//export default createAppContainer(MyDrawer);


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
