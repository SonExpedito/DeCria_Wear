
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    imageContainer: {
        height: 220,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    imagePic: {
        width: 140,
        height: 140,
        borderRadius: 90, // metade da largura/altura para formar um círculo
        borderWidth: 3,
        borderColor: '#1C1C1C',
        resizeMode: 'cover',
    },

    textPic: {
        color: '#1C1C1C',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },


    quickInfoContainer: {
        width: '100%',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titulo: {
        fontSize: 18,
        color: '#1c1c1c',
    },


    beneCard: {
        width: '90%',
        height: 250,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },

    beneTitle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',

    },

    beneText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    }


})