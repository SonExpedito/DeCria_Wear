import { router } from "expo-router"
import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"
import { Button } from "@/components/Button"
import { Stack, useNavigation } from 'expo-router';

import "#/global.css";
import { styles } from "./styles"
import { universal } from "#/assets/Style/Universal"

import logo from '#/assets/images/Content/Logo.png';
import Banner from "#/assets/images/Content/Splash.png"

export function SplashScreen() {
    function handleNext() {
        router.replace("store/home")

    }
    return (
        <View style={styles.container}>
            <View className="w-full h-4/6 justify-center items-center">
                <Image style={{height: "95%"}} source={Banner} accessibilityLabel="Banner" resizeMode="contain"/>
            </View>
            <View className="w-full h-2/6 items-center justify-center gap-6" style={styles.lastContainer} >
                <Image className="w-2/5 top-0 absolute " source={logo} accessibilityLabel="Logo" />
                <Text style={universal.titulo}>Represente o que lhe define</Text>
                <Button texto="Acessar" textColor={1} className="bg-white w-2/5" onPress={handleNext} ></Button>
            </View>
        </View>

    )


}