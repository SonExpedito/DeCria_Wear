import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 480,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: "contain",
        width: "98%",
        height: 420,
    },
    nome: {
        fontSize: 32,
        color: "#1c1c1c",
        fontWeight: "bold",
    },
    desc: {
        padding: 10,
        paddingBottom: 30,
        fontSize: 20,
        textAlign: "center",
        color: "#1c1c1c"
    },
    produtoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 120,
    },
    titulo: {
        fontSize: 24,
        color: "#1c1c1c",
        fontWeight: "bold",
        marginBottom: 20,
    }
});