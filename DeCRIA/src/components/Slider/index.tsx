import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

type sliderData = {
    id: number;
    nome: string;
    rota: string;
    image: any; // tipo que aceita imagens locais ou remotas
}


type Props = {
    data: sliderData[];
    styleInt: number 
};

export default function Slider({ data, styleInt }: Props) {

    const sliderTipo = styleInt === 1 ? styles.sliderMarcas : styles.sliderConjuntos;


    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.sliderContainer}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => router.navigate(`${item.rota}/${item.nome}`)} style={sliderTipo}>
                    <Image source={item.image} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
            )}
        />

    )


}