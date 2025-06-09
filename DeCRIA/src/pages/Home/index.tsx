import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import React from "react"
import { styles } from "./style"


import { Offerproduct } from "./Offerproduct"
import { Evom } from "./Evom"
import { Destaques } from "./Destaques"
import { carouselData } from "./carouselData";



export function HomePage() {

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
                <View style={styles.carouselContainer} >
                    <TouchableOpacity style={{ height: "85%" }}>
                        <Image
                            source={carouselData[0].image}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>

                    <Text style={styles.carouselText}>Qual é seu Estilo?</Text>

                </View>

                <Offerproduct />
                <Evom />
                <Destaques />
            </ScrollView >
        </>

    )


}

