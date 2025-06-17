
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    imageContainer: {
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    imagePic: {
        width: 160,
        height: 160,
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
        marginBottom: 20,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titulo: {
        fontSize: 18,
        color: '#1c1c1c',
    }


})