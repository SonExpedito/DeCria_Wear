import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useRouter } from 'expo-router';
import { Button } from "../Button";
import { Tophome } from "./Tophome";
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    typeInt: number,
    title: string,

}

export function Header({ typeInt, title }: Props) {
    const HeaderType = () => {
        switch (typeInt) {
            case 1:
                return <Tophome />;

            case 2:
                return <Button texto="Busca" textColor={0} />;

            case 3:
                return <Text style={styles.titulo}>{title}</Text>;

            case 4:
                return <View style={{ flexDirection: "row", alignItems: "center", height: "100%", width: "100%", }}>
                    <TouchableOpacity onPress={() => useRouter().back()} className="gap-2 flex-row">
                        <Icon name="chevron-back-outline" size={28} color="#1c1c1c" />
                        <Text style={styles.titulo}>Voltar</Text>
                    </TouchableOpacity>
                </View>;

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
        height: 60,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-around"
    },

    titulo: {
        color: "#1c1c1c",
        fontWeight: "bold",
        fontSize: 24
    },

})