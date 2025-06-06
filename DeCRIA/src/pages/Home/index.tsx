import { View, Text, Image, ScrollView } from "react-native"
import { router, Stack } from "expo-router"
import React from "react"
import { styles } from "./style"
import card1 from "#/assets/images/carousel/1.png"
import { Offerproduct } from "./Offerproduct"

export function HomePage() {
    return (
        <>
            <ScrollView>
                <View style={styles.carouselContainer} >

                    <Image style={styles.cardImage} source={card1} />
                    <Text style={styles.carouselText}>Qual é seu Estilo?</Text>

                </View>

                <Offerproduct />
            </ScrollView>
        </>

    )


}

