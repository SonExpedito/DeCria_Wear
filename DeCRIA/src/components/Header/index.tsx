import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { useRouter } from 'expo-router';
import { Button } from "../Button";
import { Tophome } from "./Tophome";

type Props = {
    typeInt: number,
    title: string,

}

export function Header({ typeInt, title }: Props) {
    const HeaderType = () => {
        switch (typeInt) {
            case 1:
                return <Tophome/> ;

            case 2:
                return <Button texto="Busca"/>;

            case 3:
                return <Text style={styles.titulo}>{title}</Text>;

            case 4:
                return <Text style={styles.titulo}>{title}</Text>;

            default:
                return null
        }
    };

    return (
        <View style={styles.header}>
            {HeaderType()}
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-around"
    },

    return: {


    },

    titulo: {
        color: "#1c1c1c",
        fontWeight: "bold",
        fontSize: 24
    },

})