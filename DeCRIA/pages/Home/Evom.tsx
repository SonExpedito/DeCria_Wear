import React from "react"
import { router } from "expo-router"
import { Text, View, Image } from "react-native"
import { styles } from "./style"
import { Button } from "@/components/Button";
import evom from "@/assets/images/Content/Evom.png"

export function Evom() {

    function handleVeigh() {
        router.navigate("store/artistas/veigh")
    }


    return (
        <View style={styles.evomCard}>
            <Image source={evom} style={{ width: "80%", height: 400, resizeMode: "contain", borderRadius: 40 }} />
            <Text style={styles.evomText}>
                Ninguém Segue Sozinho
            </Text>
            <Text style={[styles.subText, { color: "#1c1c1c" }]}>Sempre houve um início</Text>
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 12 }}>
                <Text style={[styles.subText, { color: "#1c1c1c" }]}>EVOM</Text>
                <Button texto="Veigh" textColor={2} style={{ backgroundColor: "#111827", width: "25%" }} onPress={handleVeigh} />
            </View>
        </View>
    );
}