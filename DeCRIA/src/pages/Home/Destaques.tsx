import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

import { marcas } from "../../../assets/images/marcas/marcas";
import { artistas } from "../../../assets/images/artists/artistas";

export function Destaques() {
    const marca = [
        marcas.nike,
        marcas.puma,
        marcas.jordan,
        marcas.adidas,
    ];

    const referencias = [
        { nome: "veigh", img: artistas.veigh },
        { nome: "teto", img: artistas.teto },
        { nome: "Dricka", img: artistas.dricka },
        { nome: "T & T", img: artistas.tt },
    ];

    return (
        <>
            {/* Seção Marca Presença */}
            <View style={styles.destaqueContainer}>
                <Text style={styles.destaqueText}>Marca Presença</Text>
                <View className="flex flex-row flex-wrap justify-between gap-4">
                    {marca.map((marca, index) => (
                        <Image key={index} source={marca} style={styles.marcas} />
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
