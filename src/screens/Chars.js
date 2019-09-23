import React, {Component} from 'react';
import {View, Button, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Char extends Component {
    static navigationOptions = {
        drawerLabel: 'Chars',
        title: 'Char',
        headerStyle: {
            backgroundColor: 'blue'
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flexDirection:"row", padding:10}}>
                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Eru')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/urso1.jpg')} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Balvor')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/urso2.jpg')} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Ignirus')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/urso3.jpg')} />
                    </TouchableHighlight>
                </View>

                <View style={{flexDirection:"row", padding:10}}>
                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Kronam')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/tigre1.jpg')} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Nylldun')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/tigre2.jpg')} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>this.props.navigation.navigate('Kronam')}>
                        <Image style={{marginHorizontal:10, width:100, height:150}} source = {require('../assets/tigre3.jpg')} />
                    </TouchableHighlight>
                </View>

            </View>
        );
    }  
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
        }
})

