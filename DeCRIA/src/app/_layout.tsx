import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {

    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#1c1c1c',
            },
            headerTintColor: '#F5F5F5',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="store/home" options={{}} />
            <Stack.Screen name="store/product/[productid]" options={{}} />
        </Stack>
    )

}