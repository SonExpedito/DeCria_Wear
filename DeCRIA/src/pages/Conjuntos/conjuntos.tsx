import React from "react";
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import { conjuntos } from "./dataCon";
import { Button } from "@/components/Button";


type Props = {
    intConjunto: number;

}

export default function Conjuntos({ intConjunto }: Props) {

    const conjunto = conjuntos.find((conjunto) => conjunto.id === intConjunto);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.banner}>
                <Image source={conjunto?.image} style={styles.image} />

                <Text style={styles.title}>{conjunto?.nome}</Text>
            </View>

            <Text style={styles.desc}>{conjunto?.descricao}</Text>

            <View style={styles.lookbuy}>
                <View style={styles.side}>
                    <Image source={conjunto?.image} style={styles.conjuntomini} />
                </View>
                <View style={styles.side}>
                    <Text style={styles.looktext}><Text style={styles.looktitle}> Gostou do conjunto? </Text> Compre tudo de uma vez</Text>
                    
                    <Button textColor={1} texto="Comprar" className="bg-slate-50 w-40" />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 10

    },

    image: {
        width: "90%",
        height: 380,
        resizeMode: "contain"
    },


    title: {
        fontSize: 32,
        color: "#1c1c1c",
        fontWeight: "bold",
    },

    desc: {
        padding: 18,
        paddingTop: 30,
        paddingBottom: 30,
        fontSize: 20,
        textAlign: "center",
        color: "#1c1c1c"
    },

    lookbuy: {
        height: 300,
        backgroundColor: "#1c1c1c",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 80
    },

    side: {
        height: "100%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
    ,

    looktitle: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"

    },
    looktext: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18
    },

    conjuntomini: {
        height: "60%",
        resizeMode: "contain"

    },

})