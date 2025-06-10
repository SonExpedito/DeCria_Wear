import React from "react"
import { Text, View, Image } from "react-native"
import { styles } from "./style"
import image from "#/assets/images/Content/DN8.png"
import { Button } from "@/components/Button";

export function Offerproduct() {
    const produtos = {
        DN: {
            color: "#ff5581",
            titulo: " - Estilo que fala antes de Você",
            produtoId: "1",
            nome: "DN8",
        },
    } as const;

    const keys = Object.keys(produtos) as Array<keyof typeof produtos>;
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const produto = produtos[randomKey];

    return (
        <View style={styles.offerProductContainer} >
            <View style={styles.contentSide}>
                <Text style={styles.textProduct}>
                    <Text style={{ color: produto.color }}>{produto.nome}</Text> {produto.titulo}
                </Text>

                <Image
                    style={{ width: "72%", height: 200, resizeMode: "contain" }}
                    source={image}
                />
        	    <Text style={styles.subText}>Veste Confiança, Pisa Diferente</Text>

                <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Button texto="Comprar" textColor={1} className="bg-slate-50 w-1/3"></Button>

                </View>


            </View>
            < View style={[{ backgroundColor: produto.color, height: "5%", width: "100%" }]} />
        </View >
    );
}