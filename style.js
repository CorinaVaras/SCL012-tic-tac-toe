import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#BFD7FF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    logo: {
        flex: 1,
        aspectRatio: 2.3, 
        resizeMode: 'contain',
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


    buttonNewGame: {
        backgroundColor: '#e7627b', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        padding: 10,
        marginBottom: 50,
    },

    containerPlayer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 35,
        alignItems: 'center',
    },
    
    gamerID: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },



});