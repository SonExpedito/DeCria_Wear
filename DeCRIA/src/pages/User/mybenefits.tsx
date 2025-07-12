import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import descontosIMG from "#/assets/images/benefits/desconto.png";
import referenIMG from "#/assets/images/benefits/referencias.png";
import { router } from "expo-router";

export default function MyBenefits() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', gap: 40, paddingBottom: 70 }}>
            <TouchableOpacity style={style.beneCard} className="bg-green-400" onPress={() => router.navigate("/store/destaques/ofertas")}>
                <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Text style={style.beneTitle}>Descontos</Text>
                    <Text style={style.beneText}>Sempre as melhores ofertas para você.</Text>
                </View>
                <View style={{ height: '100%', width: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image source={descontosIMG} style={{ height: '90%', resizeMode: "contain" }} />
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={style.beneCard} className="bg-red-400" onPress={() => router.navigate("/store/destaques/artistas")}>
                <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    <Text style={style.beneTitle}>Referências</Text>
                    <Text style={style.beneText}>Demonstrando aquilo que lhe define.</Text>
                </View>
                <View style={{ height: '100%', width: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image source={referenIMG} style={{ height: '90%', resizeMode: "contain" }} />
                </View>

            </TouchableOpacity>

        </View>
    );
}