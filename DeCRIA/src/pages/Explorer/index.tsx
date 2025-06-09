import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { router } from "expo-router"
import React from "react"
import { styles } from "./styles"
import { categorias } from "./categorias"


export function ExplorerPage() {
    const caregoriaImagem = categorias[0].imagem;

    return (
        <ScrollView>
            <View style={styles.topSearchsContainer}>
                {categorias.map((categoria, index) => (
                    <TouchableOpacity
                        style={styles.destaqueButton}
                        key={index}
                        onPress={() => router.navigate(`store/destaques/${categoria.nome}`)}
                    >
                        <Image
                            source={categoria.imagem}
                            style={styles.destaqueImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}


            </View>
        </ScrollView>
    )


}