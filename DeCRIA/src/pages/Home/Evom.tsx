import React from "react"
import { Text, View, Image } from "react-native"
import { styles } from "./style"
import { Button } from "@/components/Button";
import evom from "#/assets/images/Content/Evom.png"

export function Evom() {


    return (
        <View style={styles.evomCard}>
            <Image source={evom} style={{ width: "80%", resizeMode: "cover", borderRadius: 40 }} />
            <Text style={styles.evomText}>
                Ninguém Segue Sozinho
            </Text>
            <Text style={[styles.subText, { color: "#1c1c1c" }]}>Sempre houve um início</Text>
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection:"row", gap:12}}>
                <Button texto="Veigh" textColor={2 } className="bg-gray-900 w-1/4" ></Button>
                <Text style={[styles.subText, { color: "#1c1c1c" }]}>EVOM</Text>
            </View>
        </View>
    );
}