import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, Image, ImageBackground, } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import styles from './style.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateOfTheGame: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
      winner: null,
    }
  };

  componentDidMount() {
    this.newGame();
  }

  // Function to restart the game
  newGame = () => {
    this.setState({
      stateOfTheGame: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
      winner: null,
    })
  }

  checkForDraw = () => {
    const numOfTitles = 3
    let arr = this.state.stateOfTheGame

    for (let i = 0; i < numOfTitles; i++) {
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
      if (sum === 3) { return 1 }
      else if (sum === -3) { return -1 }
    }

    // For columns
    for (let i = 0; i < numOfTitles; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i]
      if (sum === 3) { return 1 }
      else if (sum === -3) { return -1 }
    }

    // For Diagonal 1
    sum = arr[0][0] + arr[1][1] + arr[2][2]
    if (sum === 3) { return 1 }
    else if (sum === -3) { return -1 }

    // For Diagonal 2
    sum = arr[2][0] + arr[1][1] + arr[0][2]
    if (sum === 3) { return 1 }
    else if (sum === -3) { return -1 }

    // No winners yet
    return 0;
  }



  // Function for the press of a title
  pressTitle = (row, col) => {
    let winnerState = this.state.winner

    // To not render icons after there's a winner
    if (winnerState !== null) {
      return
    }

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

    // Change the state of Winner
    let winner = this.checkWinner()
    if (winner === 1) {
      this.setState({
        winner: 1,
      })
      return
    } else if (winner === -1) {
      this.setState({
        winner: -1,
      })
      return
    }

    // Change the state if there's a draw
    let draw = this.checkForDraw()
    if (draw === 1) {
      this.setState({
        winner: 0,
      })
    }
  }

  // Fuction to make the icon appear
  renderIcon = (row, col) => {
    let winner = this.state.winner
    let value = this.state.stateOfTheGame[row][col]
    switch (value) {
      case 1: return <Image source={require('./assets/img/cupcake.png')} style={styles.icons} />;
      case -1: return <Image source={require('./assets/img/cookie.png')} style={styles.icons} />;
      case 0: <View />;
    }
  }

  // To show the current player on screen
  renderPlayer = () => {
    let currentPlayer = this.state.currentPlayer
    let winner = this.state.winner
    if (winner === null) {
      switch (currentPlayer) {
        case 1: return (
          <View style={styles.containerPlayer}>
            <Text style={styles.gamerID}>Turno de: </Text>
            <Image source={require('./assets/img/cupcake.png')} style={styles.iconsID} />
          </View>);
        case -1: return (
          <View style={styles.containerPlayer}>
            <Text style={styles.gamerID}>Turno de: </Text>
            <Image source={require('./assets/img/cookie.png')} style={styles.iconsID} />
          </View>)
      }
    } else {
      switch (winner) {
        case 1: return (
          <View style={styles.viewWinner}>
            <Text style={styles.textWinner}>¡Ganó </Text>
            <Image source={require('./assets/img/cupcake.png')} style={styles.iconsWinner} />
            <Text style={styles.textWinner}>!</Text>
          </View>);
        case -1: return (
          <View style={styles.viewWinner}>
            <Text style={styles.textWinner}>¡Ganó </Text>
            <Image source={require('./assets/img/cookie.png')} style={styles.iconsWinner} />
            <Text style={styles.textWinner}>!</Text>
          </View>);
        case 0: return (
          <View style={styles.viewWinner}>
            <Text style={styles.textWinner}>¡Empate </Text>
            <Image source={require('./assets/img/cupcake.png')} style={styles.iconsWinner} />
            <Image source={require('./assets/img/cookie.png')} style={styles.iconsWinner} />
            <Text style={styles.textWinner}>!</Text>
          </View>);
      }
    }

  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/background2.png')}
        resizeMode='cover'
        style={styles.container}>

        {/* The Logo */}
        <Image source={require('./assets/img/logo2.png')} style={styles.logo} />

        {/* The Player ID */}
        {this.renderPlayer()}

        {/* THE GRID */}
        <View style={styles.containerGrid} >
          <View style={styles.containerRow} >
            <TouchableOpacity onPress={() => this.pressTitle(0, 0)} style={[styles.title, { borderTopWidth: 0, borderLeftWidth: 0 }]}>
              {this.renderIcon(0, 0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(0, 1)} style={[styles.title, { borderTopWidth: 0 }]}>
              {this.renderIcon(0, 1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(0, 2)} style={[styles.title, { borderTopWidth: 0, borderRightWidth: 0 }]}>
              {this.renderIcon(0, 2)}
            </TouchableOpacity>
          </View>

          <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => this.pressTitle(1, 0)} style={[styles.title, { borderLeftWidth: 0 }]}>
              {this.renderIcon(1, 0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(1, 1)} style={styles.title}>
              {this.renderIcon(1, 1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(1, 2)} style={[styles.title, { borderRightWidth: 0 }]}>
              {this.renderIcon(1, 2)}
            </TouchableOpacity>
          </View>


          <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => this.pressTitle(2, 0)} style={[styles.title, { borderBottomWidth: 0, borderLeftWidth: 0 }]}>
              {this.renderIcon(2, 0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(2, 1)} style={[styles.title, { borderBottomWidth: 0 }]}>
              {this.renderIcon(2, 1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressTitle(2, 2)} style={[styles.title, { borderBottomWidth: 0, borderRightWidth: 0 }]}>
              {this.renderIcon(2, 2)}
            </TouchableOpacity>
          </View>
        </View>

        {/* Button of New Game  */}
        <TouchableOpacity style={styles.button} onPress={() => this.newGame()}>
          <View style={styles.buttonNewGame}>
            <Text style={{ color: '#fff' }}>Juego nuevo</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

