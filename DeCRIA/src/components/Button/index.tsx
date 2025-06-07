import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./style"
import React from "react"
import { Float } from "react-native/Libraries/Types/CodegenTypes"


//Utilização da modularização por meio de props, em que a instancias podem possuir diferentes tipos
// Faça a reserva em separado para alguns em especiais, 
// enquanto as da própria função ser utilizado pelo PROPS do proprio elemento


type Props = TouchableOpacityProps & {
    texto: string,
    textColor: number
}

export function Button({ texto, textColor, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={[
                styles.texto,
                { color: textColor === 1 ? '#1c1c1c' : '#fff' }
            ]}>
                {texto}
            </Text>

        </TouchableOpacity>

    )

}