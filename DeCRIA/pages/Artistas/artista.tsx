import React from "react";

import { ScrollView, View, Image, Text } from "react-native";
import { styles } from "./style";
import { usePerfis } from "./perfis";
import ToggleSwitch from "./toggle";

type Props = {
    artistaInt: number;
}


export function Artista({ artistaInt }: Props) {
    const perfis = usePerfis();

    const perfil = perfis.find((perfil) => perfil.int === artistaInt);


    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.imageContainer}>
                <Image source={perfil?.banner} style={styles.image} />
                <Text style={styles.nome}>{perfil?.nome}</Text>
            </View>
            <Text style={styles.desc}>
                {perfil?.desc || "Descrição não disponível."}
            </Text>

            <View style={styles.produtoContainer}>
                <ToggleSwitch onToggle={(value) => {              
                }} />
            </View>


        </ScrollView>
    )



}