import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from '../../components'
import ImgInitial from '../../../assets/ImgInitial.png'

export const Initial = () => {
  return (
    <View className="flex-1 flex-col">
      {/* Fundo dividido */}
      <View className="flex-1 bg-[#383838]" />
      <View className="flex-1 bg-[#1a1a1a]" />

      {/* Conteúdo em cima do fundo */}
      <View className="absolute top-[60px] left-[20px] right-[20px] items-center">
        <Image source={ImgInitial} className="w-[361px] h-[451px] rounded-[15px] mb-[30px]" />

        <Text
          className="text-white font-bold mb-[55px]"
          style={{
            fontSize: 50,
            textShadowColor: '#000',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 3
          }}
        >
          De Cria
        </Text>

        <Text className="text-white font-bold text-center mb-[60px]" style={{ fontSize: 40 }}>
          Represente o que lhe Define
        </Text>

        <Button title="Acessar"/>
      </View>
    </View>
  )
}
