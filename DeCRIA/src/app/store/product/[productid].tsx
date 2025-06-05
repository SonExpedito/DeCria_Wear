import React from "react";
import {useGlobalSearchParams} from  "expo-router"
import { View,Text } from "react-native";

export default function Produto () {
    const {productid} = useGlobalSearchParams();

    return(
        <View>
                        <Text>{productid}Alex</Text>
        </View>
    );


}