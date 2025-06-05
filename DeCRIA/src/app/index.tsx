import React, { useEffect } from "react"
import { SplashScreen } from "@/pages/SplashScreen/index"
import { useNavigation } from "expo-router";



export default function Splash() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    
    return (
        <SplashScreen />
    )

}
