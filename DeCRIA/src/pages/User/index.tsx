import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import Icon from 'react-native-vector-icons/Ionicons';

import { usuarios } from "./perfiluser"
import { style } from "./styles"

export function UserPage() {

    const randomIndex = Math.floor(Math.random() * usuarios.length);
    const user = usuarios[randomIndex];

    const secoes = [
        { titulo: 'Meus benefícios' },
        { titulo: 'Portal de Autoatendimento' },
        { titulo: 'Avalie o aplicativo' },
    ];

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image style={style.imagePic} source={user.image} />
                <Text style={style.textPic}>Olá {user.nome}!</Text>
            </View>
            <View style={style.quickInfoContainer}>
                <View style={{ alignItems: 'center', gap: 6 }}>
                    <Icon size={26} name="file-tray-full-outline" color="#1c1c1c" />
                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>Meus Pedidos</Text>
                </View>
                <View style={{ alignItems: 'center', gap: 6 }}>
                    <Icon size={26} name="settings-outline" color="#1c1c1c" />
                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>Configurações</Text>
                </View>

            </View>

            {secoes.map((item, index) => (
                <TouchableOpacity key={index} style={style.item}>
                    <View style={{ flex: 1 }}>
                        <Text style={style.titulo}>{item.titulo}</Text>
                    </View>
                    <Icon name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>
            ))}


        </View>

    )

}