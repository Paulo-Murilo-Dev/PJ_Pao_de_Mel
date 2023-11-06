import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '67%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden', // Garante que a câmera respeite as bordas arredondadas
  },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    text: {
        fontSize: 25,
        color: 'black',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#38b0DE',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignSelf: 'center',
    },

    scanButton: {
        backgroundColor: '#38b0DE',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 450, // Ajuste a margem superior conforme necessário
    },

    scanButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    pjpaodemel: {
        marginTop: 40,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  watermarkImage: {
    width: 200,
    height: 200, // Ajuste o tamanho da imagem conforme necessário
  },
  
});

