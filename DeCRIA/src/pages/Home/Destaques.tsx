import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

import { marcas } from "../../../assets/images/marcas/marcas";
import { artistas } from "../../../assets/images/artists/artistas";

export function Destaques() {
    const marca = [
        { name: "nike", image: marcas.nike },
        { name: "puma", image: marcas.puma },
        { name: "jordan", image: marcas.jordan },
        { name: "adidas", image: marcas.adidas },
    ];

    const referencias = [
        { nome: "veigh", img: artistas.veigh },
        { nome: "teto", img: artistas.teto },
        { nome: "dricka", img: artistas.dricka },
        { nome: "tt", img: artistas.tt },
    ];

    return (
        <>
            {/* Seção Marca Presença */}
            <View style={styles.destaqueContainer}>
                <Text style={styles.destaqueText}>Marca Presença</Text>
                <View className="flex flex-row flex-wrap justify-between gap-4">
                    {marca.map((marcaItem, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => router.navigate(`store/marcas/${marcaItem.name}`)}
                        >
                            <Image source={marcaItem.image} style={styles.marcas} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Seção Pega a Referência */}
            <View style={styles.destaqueContainer} className="mb-24">
                <Text style={styles.destaqueText}>
                    Pega a Ref
                    <Text className="font-light text-xl">erência</Text>
                </Text>
                <View className="flex flex-row flex-wrap">
                    {referencias.map((ref, index) => (
                        <TouchableOpacity
                            key={index}
                            className="w-1/2 items-center justify-center mb-4"
                            onPress={() => router.navigate(`/store/artistas/${ref.nome}`)}
                        >
                            <Image source={ref.img} style={styles.marcas} />
                            <Text className="text-lg capitalize">{ref.nome}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </>
    );
}
