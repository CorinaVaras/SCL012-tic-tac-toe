import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#BFD7FF',
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        flex: 1,
        width: 350,
        resizeMode: 'contain',
        marginTop: 30,
    },

    icons: {
        height: 75,
        width: 75,
    },

    iconsID: {
        height: 50,
        width: 50,
    },

    containerGrid: {
        flex: 3,
    },

    containerRow: {
        flexDirection: 'row',
    },

    title: {
        borderWidth: 5, 
        width: 100, 
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
    },

    buttonNewGame: {
        backgroundColor: '#e7627b', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
    },

    containerPlayer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    gamerID: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    button: {
        flex: 1,
    },

    winner: {
        flex: 1,
        height: 50,
    },

    viewWinner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconsWinner: {
        height: 50,
        width: 50,
    },

    textWinner: {
        color: '#e7627b',
        fontSize: 25,
        fontWeight: 'bold',
    }

});