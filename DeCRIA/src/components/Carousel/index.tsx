import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

type carouselData = {
  id: number;
  nome: string;
  image: any; // tipo que aceita imagens locais ou remotas
};

type Props = {
  data: carouselData[];
  height?: number;
  width?: number;
};

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel: React.FC<Props> = ({ data, height = 200, width = screenWidth }) => {
  return (
    <View style={styles.generalContainerCarousel}>
      <Carousel
        loop
        width={width}
        height={height}
        data={data}
        style={styles.carouselContainer}
        autoPlay={true}
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => {
          const item = data[index];
          return (
            <TouchableOpacity style={styles.itemContainer}  onLongPress={() => router.navigate(`/store/conjuntos/${item.nome}`)}>
              <Image source={item.image} style={styles.cardImage} />
            </TouchableOpacity>
          );
        }}
      />

      <Text style={styles.carouselText}>Qual é seu Estilo?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainerCarousel: {
    width: '100%',
    gap: 5,
    paddingBottom: 20,

  }
  ,
  carouselContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },

  itemContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardImage: {
    height: "80%",
    resizeMode: "contain"
  },

  carouselText: {
    fontSize: 24,
    color: "#1c1c1c",
    fontWeight: "bold",
    textAlign: "center",
  },

});

export default MyCarousel;
