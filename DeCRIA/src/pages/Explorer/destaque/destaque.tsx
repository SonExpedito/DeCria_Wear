import React from 'react';
import { categorias } from './categorias';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Novidades, Descontos, referencias } from './itens';
import { useRouter } from 'expo-router';

type Props = {
    intDestque: number;
}

export function DestaquePage({ intDestque }: Props) {
    const router = useRouter();
    const destaque = categorias.find((categoria) => categoria.id === intDestque);
    let item: any = "";

    switch (intDestque) {
        case 1: item = referencias; break;
        case 2: item = Novidades; break;
        case 3: item = Descontos; break;
    }

    return (
       <ScrollView style={{ flex: 1, backgroundColor: "#FFF", gap: 20}}>
            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <Image source={destaque?.imagem} style={styles.image} />
            </View>
            <View className="flex flex-row flex-wrap w-full gap-y-12 ">
                {intDestque === 1 && Array.isArray(item) && item.map((artista: any, index: number) => (
                    <View key={index} style={{ width: "50%", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ width: "50%", alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
                            onPress={() => router.navigate(`/store/artistas/${artista.nome}`)}
                        >
                            <Image source={artista.img} style={styles.artistas} />
                            <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>{artista.nome}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        resizeMode: 'contain',

    },

    artistas: {
        height: 80,
        resizeMode: "contain",
    },

})