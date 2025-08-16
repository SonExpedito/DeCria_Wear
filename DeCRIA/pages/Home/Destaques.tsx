import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


import { artistas } from "@/assets/images/artists/artistas";
import { marcas } from "@/assets/images/marcas/marcas";

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

    // Função utilitária para dividir array em subarrays de 2 itens
    function chunkArray(array: any[], size: number) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    return (
        <View>
            <View style={styles.destaqueContainer}>
                <Text style={styles.destaqueText}>Marca Presença</Text>
                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                    {chunkArray(marca, 2).map((row, rowIndex) => (
                        <View key={rowIndex} style={{ flexDirection: 'row' }}>
                            {row.map((marcaItem, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{ width: '50%', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
                                    onPress={() => router.navigate(`store/marcas/${marcaItem.name}`)}
                                >
                                    <Image source={marcaItem.image} style={styles.marcas} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            </View>

            {/* Seção Pega a Referência */}
            <View style={[styles.destaqueContainer, { marginBottom: 96 }]}> 
                <Text style={styles.destaqueText}>
                    Pega a Ref
                    <Text style={{ fontWeight: '300', fontSize: 20 }}>erência</Text>
                </Text>
                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                    {chunkArray(referencias, 2).map((row, rowIndex) => (
                        <View key={rowIndex} style={{ flexDirection: 'row' }}>
                            {row.map((ref, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{ width: '50%', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
                                    onPress={() => router.navigate(`/store/artistas/${ref.nome}`)}
                                >
                                    <Image source={ref.img} style={styles.artistas} />
                                    <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>{ref.nome}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
