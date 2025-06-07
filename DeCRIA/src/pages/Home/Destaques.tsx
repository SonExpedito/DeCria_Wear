import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./style";
import { images } from "./imagens";

export function Destaques() {
    const marcas = [
        images.nike,
        images.puma,
        images.jordan,
        images.adidas,
    ];

    const referencias = [
        { nome: "Veigh", img: images.veigh },
        { nome: "Teto", img: images.teto },
        { nome: "Dricka", img: images.dricka },
        { nome: "T & T", img: images.tt },
    ];

    return (
        <>
            {/* Seção Marca Presença */}
            <View style={styles.destaqueContainer}>
                <Text style={styles.destaqueText}>Marca Presença</Text>
                <View className="flex flex-row flex-wrap justify-between gap-4">
                    {marcas.map((marca, index) => (
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
                        <View
                            key={index}
                            className="w-1/2 items-center justify-center mb-4"
                        >
                            <Image source={ref.img} style={styles.marcas} />
                            <Text className="text-lg">{ref.nome}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}
