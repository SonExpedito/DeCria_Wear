import { View, Text, Image, ScrollView } from "react-native"
import { router, Stack } from "expo-router"
import React from "react"
import { styles } from "./style"
import card1 from "#/assets/images/carousel/1.png"
import { Offerproduct } from "./Offerproduct"
import { Evom } from "./Evom"
import { Destaques } from "./Destaques"

export function HomePage() {
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
                <View style={styles.carouselContainer} >

                    <Image style={styles.cardImage} source={card1} />
                    <Text style={styles.carouselText}>Qual é seu Estilo?</Text>

                </View>

                <Offerproduct />
                <Evom/>
                <Destaques />
            </ScrollView>
        </>

    )


}

