import { Text, View, StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    carouselContainer: {
        height: 480,
        alignItems: "center",
        gap: 12
    },

    cardImage: {
        height: "100%",
        resizeMode: "contain"
    },

    carouselText: {
        fontSize: 24,
        color: "#1c1c1c",
        fontWeight: "bold",
    },


    //Produto

    offerProductContainer: {
        height: 420,
        backgroundColor: "#1c1c1c",
    },

    contentSide: {
        height: "95%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: 5,
    },

    textProduct: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#F5F5F5",
        textAlign: "center",
    },

    subText: {
        fontSize: 20,
        color: "#F5F5F5",
        textAlign: "center"
    },

    //CardSpoted
    evomCard: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        gap: 14
    },

    evomText: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#1c1c1c",
        textAlign: "center",

    },



    //Brands & Artists
    destaqueContainer: {
        width: "100%",
        justifyContent: "center",
        padding: 20,
        paddingLeft: 35,
        paddingRight: 35,
    },
    destaqueContent: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        columnGap: 0,
    },
    marcas: {
        height: 100,
        resizeMode: "contain",
    },

    destaqueText: {
        fontSize: 28,
        color: "#1c1c1c",
        fontWeight: "bold",
        marginBottom: 10,
    },

});


