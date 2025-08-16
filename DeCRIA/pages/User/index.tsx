import { View, Text, Image, TouchableOpacity, Alert } from "react-native"
import React from "react"
import Icon from 'react-native-vector-icons/Ionicons';

import { usuarios } from "./perfiluser"
import { style } from "./styles"
import { router } from "expo-router";

export function UserPage() {

    const randomIndex = Math.floor(Math.random() * usuarios.length);
    const user = usuarios[randomIndex];

    const secoes = [
        { titulo: 'Configurações' },
        { titulo: 'Portal de Autoatendimento' },
        { titulo: 'Avalie o aplicativo' },
    ];

    function beneficios() {
        router.navigate('/store/benefits');
    }

    function Indisponivel() {
        Alert.alert(
            'Indisponível', // Título
            'Esta funcionalidade ainda não está implementada.', // Mensagem
            [{ text: 'OK' }] // Botões (opcional)
        );
    }

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image style={style.imagePic} source={user.image} />
                <Text style={style.textPic}>Olá {user.nome}!</Text>
            </View>
            <View style={style.quickInfoContainer}>
                <TouchableOpacity style={{ alignItems: 'center', gap: 6 }} onPress={beneficios}>
                    <Icon size={26} name="sparkles-outline" color="#1c1c1c" />
                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>Meus Benefícios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', gap: 6 }} onPress={Indisponivel}>
                    <Icon size={26} name="file-tray-full-outline" color="#1c1c1c" />
                    <Text style={{ color: '#1c1c1c', fontSize: 14 }}>Meus Pedidos</Text>
                </TouchableOpacity>

            </View>

            {secoes.map((item, index) => (
                <TouchableOpacity key={index} style={style.item} onPress={Indisponivel}>
                    <View style={{ flex: 1 }}>
                        <Text style={style.titulo}>{item.titulo}</Text>
                    </View>
                    <Icon name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>
            ))}


        </View>

    )

}