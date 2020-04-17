import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import styles from './style.js';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      stateOfTheGame: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      currentPlayer: 1,
    }
  };

 componentDidMount() {
    this.newGame();
  }

  newGame = () => {
    this.setState({
      stateOfTheGame: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ], 
      currentPlayer: 1,
    })
  }


  pressTitle = (row, col) => {
    let currentPlayer = this.state.currentPlayer;
    let arr = this.state.stateOfTheGame.slice();

    // Changing the state of the game with press
    arr[row][col] = currentPlayer;
    this.setState({
      stateOfTheGame: arr
    })

    // Switch players
    let nextPlayer = (currentPlayer == 1) ? -1 : 1; 
    this.setState({
      currentPlayer: nextPlayer
    })



  }

  renderIcon = (row, col) => {
    let value = this.state.stateOfTheGame[row][col]
    switch(value) {
      case 1: return <Icon name='cupcake' style={styles.titleCupcake}/>;
      case -1: return <Icon name='cookie' style={styles.titleCookie}/>;
      case 0: <View />;
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View >
          <TouchableOpacity onPress={() => this.pressTitle(0 ,0)} style={[styles.title, {borderTopWidth: 0, borderLeftWidth:0}] }>
            {this.renderIcon(0 ,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(1 ,0)} style={[styles.title, {borderLeftWidth:0}]}>
            {this.renderIcon(1 ,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(2 ,0)} style={[styles.title, {borderBottomWidth: 0, borderLeftWidth:0}]}>
            {this.renderIcon(2 ,0)}
          </TouchableOpacity>
        </View>
        
        <View >
          <TouchableOpacity onPress={() => this.pressTitle(0 ,1)} style={[styles.title, {borderTopWidth: 0} ]}>
            {this.renderIcon(0 ,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(1 ,1)} style={styles.title}>
            {this.renderIcon(1 ,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(2 ,1)} style={[styles.title, {borderBottomWidth: 0} ]}>
            {this.renderIcon(2 ,1)}
          </TouchableOpacity>
        </View>


        <View >
          <TouchableOpacity onPress={() => this.pressTitle(0 ,2)} style={[styles.title, {borderTopWidth: 0, borderRightWidth: 0} ]}>
            {this.renderIcon(0 ,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(1 ,2)} style={[styles.title, {borderRightWidth: 0} ]}>
            {this.renderIcon(1 ,2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressTitle(2 ,2)} style={[styles.title, {borderBottomWidth: 0, borderRightWidth: 0} ]}>
            {this.renderIcon(2 ,2)}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

