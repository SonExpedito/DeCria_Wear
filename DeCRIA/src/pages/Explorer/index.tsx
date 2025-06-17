import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { router } from "expo-router"
import React from "react"
import { styles } from "./styles"
import { categorias } from "./destaque/categorias"
import { SliderProduct } from "./sliders"


export function ExplorerPage() {

    return (
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.topSearchsContainer}>
                {categorias.map((categoria: { nome: string; imagem: any }, index: number) => (
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

            <SliderProduct/>

        </ScrollView>
    )


}