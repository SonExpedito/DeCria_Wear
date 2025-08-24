import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { useInfos } from "./info";
import { styles } from "./style";
import ToggleSwitch from "./toggle";

type Props = {
    marcaInt: number;
};

export function Marcas({ marcaInt }: Props): React.ReactElement {
    const infos = useInfos(); // pega array traduzido
    const marca = infos.find((m) => m.int === marcaInt);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.imageContainer}>
                <Image source={marca?.banner} style={styles.image} />
                <Text style={styles.nome}>{marca?.nome}</Text>
            </View>
            <Text style={styles.desc}>
                {marca?.desc || "Descrição não disponível."}
            </Text>
            <View style={styles.produtoContainer}>
                <ToggleSwitch onToggle={(value) => { }} />
            </View>
        </ScrollView>
    );
}
