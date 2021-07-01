import { StyleSheet } from 'react-native'; 

export const mainStyles = StyleSheet.create({
    menuView: {
        backgroundColor: '#A49E98',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    mainView: {
        backgroundColor: 'black',
        position: 'relative',
        top: '13%',
        left: '15%',
        width: '85%',
        height: '87%',
        borderTopLeftRadius: '25px'
    },
    TextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    menuButtons: {
        left: 0,
        width: '15%',
        height: '10%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#54514E',
        position: 'absolute',
        cursor: 'pointer'
    },
    INFObutton: {
        marginTop: '20%'
    },
    FAVSbutton: {
        marginTop: '30%'
    }
  });
