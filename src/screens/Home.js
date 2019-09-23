
import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';


//TELA HOME
export default class Home extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      title: 'Home',
      headerStyle: {
        backgroundColor: 'purple'
      }
    };
  
    render() {
      return(
        <View style={style.container}>
          <View style={{flexDirection: "row", justifyContent: 'center'}}>
              <Text style={{fontSize: 35}}>Journey to StarMounts</Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'center', marginBottom: 20}}>
              <Image style={{width: 150, height: 150}} source={require('../assets/bussola.png')}/>
          </View>
          
          <View style={{flexDirection: "row", justifyContent: 'center'}}>
              <Text style={style.texto}>
                Uma corrida se inicia em WaterDeep onde nossos aventureiros recebem uma marca misteriosa nas costas de suas mãos que se 
                assemelha a uma bussola


              
              </Text>
          </View>

        </View>
      );
    }
  }
  
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  texto: {
    flex: 1,
    fontSize: 20,
    margin: 15
  }


})
