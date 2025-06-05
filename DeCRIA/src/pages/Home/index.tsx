import { View, Text } from "react-native"
import { router, Stack } from "expo-router"
import React from "react"



export function HomePage() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'My home',
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                }}
            />
            <Text>Home</Text>
        </View>


    )


}