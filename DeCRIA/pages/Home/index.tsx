import { ScrollView } from "react-native"
import React from "react"

import { Offerproduct } from "./Offerproduct"
import { Evom } from "./Evom"
import { Destaques } from "./Destaques"
import { carouselData } from "./carouselData";
import MyCarousel from "@/components/Carousel"

export function HomePage() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <MyCarousel data={carouselData} height={480} />
            <Offerproduct />
            <Evom />
            <Destaques />
        </ScrollView >
    )


}

