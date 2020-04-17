import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#4ecdc4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    logo: {
        flex: 1,
        aspectRatio: 1.9, 
        resizeMode: 'contain'
    },

    containerGrid: {
        display: 'flex',
        flexDirection: 'column',
    },

    containerRow: {
        display: 'flex',
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

    titleCupcake: {
        color: '#FF1F6C',
        fontSize: 60,
    },

    titleCookie: {
    color: '#FDFF3C',
    fontSize: 60,
    },

    buttonNewGame: {
        backgroundColor: '#FDFF3C', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        padding: 10,
        marginBottom: 50,
    },

    containerPlayer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 40,
        alignItems: 'center',
    },
    gamerID: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    playerView: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FDFF3C',
        padding: 4, 
        borderRadius: 20,
    },

    playerViewCookie: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FF1F6C',
        padding: 4, 
        borderRadius: 20,
    },

    player: {
        color: '#FF1F6C',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 18,
    },

    playerCookie: {
        color: '#FDFF3C',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 18,
    },

    iconPlayerCookie: {
        display: 'flex',
        color: '#FDFF3C',
        fontSize: 22,
        alignItems: 'center',
    },

    iconPlayerCupcake: {
        display: 'flex',
        color: '#FF1F6C',
        fontSize: 22,
        alignItems: 'center',
    }

});