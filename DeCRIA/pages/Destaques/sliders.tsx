import Slider from "@/components/Slider";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { marcas } from "@/assets/images/marcas/marcas";
import EsportivoImg from "@/assets/images/conjuntos/Esportivo.png";
import InvernalImg from "@/assets/images/conjuntos/Invernal.png";
import FemininoImg from "@/assets/images/conjuntos/Feminino.png";
import EvomImg from "@/assets/images/conjuntos/EVOM.png";



const marcaSlider = [
    { id: 1, nome: "nike", rota: "/store/marcas", image: marcas.nike },
    { id: 2, nome: "adidas", rota: "/store/marcas", image: marcas.adidas },
    { id: 3, nome: "jordan", rota: "/store/marcas", image: marcas.jordan },
    { id: 4, nome: "puma", rota: "/store/marcas", image: marcas.puma },
];

const conjuntoSlider = [
    { id: 1, nome: "esportivo", rota: "/store/conjuntos", image: EsportivoImg },
    { id: 2, nome: "feminino", rota: "/store/conjuntos", image: FemininoImg },
    { id: 3, nome: "evom", rota: "/store/conjuntos", image: EvomImg },
    { id: 4, nome: "brisainvernal", rota: "/store/conjuntos", image: InvernalImg },
];


export function SliderProduct() {
    return (
        <View style={{ width: "100%", gap: 20, paddingTop: 20 }}>
            <View style={styles.sliderContainer}>
                <View style={{ width: "100%", paddingLeft: 20, paddingBottom: 20 }}>
                    <Text style={styles.sliderText}>Use o que lhe define</Text>
                </View>
                <Slider data={conjuntoSlider} styleInt={2} />
            </View>

            
            <View style={[styles.sliderContainer, { paddingBottom: 80 }]}>
                <View style={{ width: "100%", paddingLeft: 20 }}>
                    <Text style={styles.sliderText}>Navegue pelos Kit</Text>
                </View>
                <Slider data={marcaSlider} styleInt={1} />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    sliderContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    sliderText: {
        fontSize: 24,
        color: "#1c1c1c",
        fontWeight: "bold",
    }


})