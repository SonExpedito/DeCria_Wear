import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Tophome } from "./Tophome";

type Props = {
    typeInt: number,
    title: string,

}

export function Header({ typeInt, title }: Props) {
    const router = useRouter();

    const HeaderType = () => {
        switch (typeInt) {
            case 1:
                return <Tophome />;

            case 2:
                return ;

            case 3:
                return <Text style={styles.titulo}>{title}</Text>;

            case 4:
                return <View style={{ flexDirection: "row", alignItems: "center", height: "100%", width: "100%", }}>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={{ flexDirection: 'row', columnGap: 8, alignItems: 'center' }}
                    >
                        <Icon name="chevron-back-outline" size={28} color="#1c1c1c" />
                        <Text style={styles.titulo}>Voltar</Text>
                    </TouchableOpacity>
                </View>;

            default:
                return null
        }
    };

    return (
        <View style={[styles.header, typeInt === 2 && { height: 60 }] }>
            {HeaderType()}
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 140,
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