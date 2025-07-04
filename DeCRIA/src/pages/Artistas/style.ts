import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 460,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        paddingTop: 20,
    },
    image: {
        height: "90%",
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
         marginBottom: 120,
    },
    titulo: {
        fontSize: 24,
        color: "#1c1c1c",
        fontWeight: "bold",
        marginBottom: 20,
    },
});