import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, } from 'react-native';
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

  // Function to restart the game
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

  checkForDraw = () => {
    const numOfTitles = 3
    let arr = this.state.stateOfTheGame

    for (let i=0; i < numOfTitles ; i++) {
      if (arr[0][i] === 0) {
        return 0;
      } else if (arr[1][i] === 0) {
        return 0;
      } else if (arr[2][i] === 0) {
        return 0;
      }
    }
    return 1;

  }

  // Checking if there is a winner
  checkWinner = () => {
    const numOfTitles = 3
    let arr = this.state.stateOfTheGame
    let sum

    // For rows
    for (let i = 0; i < numOfTitles; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2]
      if (sum === 3 ) { return 1 }
      else if (sum === -3 ) { return -1 }
    }

    // For columns
    for (let i = 0; i < numOfTitles; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i]
      if (sum === 3 ) { return 1 }
      else if (sum === -3 ) { return -1 }
    }

    // For Diagonal 1
    sum = arr[0][0] + arr[1][1] + arr[2][2]
    if (sum === 3 ) { return 1 }
    else if (sum === -3 ) { return -1 }

    // For Diagonal 2
    sum = arr[2][0] + arr[1][1] + arr[0][2]
    if (sum === 3 ) { return 1 }
    else if (sum === -3 ) { return -1 }

    // No winners yet
    return 0;
  }


  // Function for the press of a title
  pressTitle = (row, col) => {
    // Don't let a marked title change
    let valueOfTheCell = this.state.stateOfTheGame[row][col]
    if (valueOfTheCell !== 0) {
      return
    }

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

    let winner = this.checkWinner()
    if (winner === 1) {
      Alert.alert('¡Ganó el Jugador 1!')
      this.newGame()
      return
    } else if (winner === -1) {
      Alert.alert('¡Ganó el Jugador 2!')
      this.newGame()
      return
    }

    let draw = this.checkForDraw()
    if (draw === 1) {
      Alert.alert('¡Hubo un empate!')
      this.newGame()
    }
  }

  // Fuction to make the icon appear
  renderIcon = (row, col) => {
    let value = this.state.stateOfTheGame[row][col]
    switch(value) {
      case 1: return <Icon name='cupcake' style={styles.titleCupcake}/>;
      case -1: return <Icon name='cookie' style={styles.titleCookie}/>;
      case 0: <View />;
    }
  }

  // To show the current player on screen
  renderPlayer = () => {
    let currentPlayer = this.state.currentPlayer
    switch(currentPlayer) {
      case 1: return <View style={styles.playerView} ><Text style={styles.player}> Jugador 1 </Text><Icon name='cupcake' style={styles.iconPlayerCupcake}/></View>;
      case -1: return <View style={styles.playerViewCookie} ><Text style={styles.playerCookie}> Jugador 2 </Text><Icon name='cookie'style={styles.iconPlayerCookie}/></View>;
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {/* The Logo */}
        <Image source={require('./img/logo.png')} style={styles.logo}/>

        {/* The Player ID */}
        <View style={styles.containerPlayer}>
          <Text style={styles.gamerID}>Turno de: </Text>
          {this.renderPlayer()}
        </View>

        {/* THE GRID */}
        <View style={styles.containerGrid} >
          <View style={styles.containerRow} >
            <TouchableOpacity onPress={() => this.pressTitle(0 ,0)} style={[styles.title, {borderTopWidth: 0, borderLeftWidth:0}] }>
              {this.renderIcon(0 ,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(0 ,1)} style={[styles.title, {borderTopWidth: 0}]}>
              {this.renderIcon(0 ,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(0 ,2)} style={[styles.title, {borderTopWidth: 0, borderRightWidth:0}]}>
              {this.renderIcon(0 ,2)}
            </TouchableOpacity>
          </View>
          
          <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => this.pressTitle(1 ,0)} style={[styles.title, {borderLeftWidth:0} ]}>
              {this.renderIcon(1 ,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(1 ,1)} style={styles.title}>
              {this.renderIcon(1 ,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(1 ,2)} style={[styles.title, {borderRightWidth:0} ]}>
              {this.renderIcon(1 ,2)}
            </TouchableOpacity>
          </View>


          <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => this.pressTitle(2, 0)} style={[styles.title, {borderBottomWidth: 0, borderLeftWidth: 0} ]}>
              {this.renderIcon(2, 0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(2 ,1)} style={[styles.title, {borderBottomWidth: 0} ]}>
              {this.renderIcon(2 ,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(2 ,2)} style={[styles.title, {borderBottomWidth: 0, borderRightWidth: 0} ]}>
              {this.renderIcon(2 ,2)}
            </TouchableOpacity>
          </View>
        </View>
         
        {/* Button of New Game  */}
        <View style={{paddingTop: 40}}/>
        <TouchableOpacity onPress = {() => this.newGame()}>
          <View style = {styles.buttonNewGame}>
              <Text style = {{color: '#131515'}}>Juego nuevo</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

