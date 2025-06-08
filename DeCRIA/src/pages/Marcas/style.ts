import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 460,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: "98%",
        resizeMode: "contain",
    },
    nome: {
        fontSize: 32,
        color: "#1c1c1c",
        fontWeight: "bold",
    },
    desc: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        fontSize: 20,
        textAlign: "center",
        color: "#1c1c1c"
    },
    produtoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 24,
        color: "#1c1c1c",
        fontWeight: "bold",
        marginBottom: 20,
    },

    activeButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 50,
    },
    activeText: {
        fontWeight: 'bold',
        color: '#000',
    }
});