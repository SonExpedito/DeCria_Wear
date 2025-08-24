import { router } from "expo-router";
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import "@/locales/i18n";
import { useTranslation } from "react-i18next";

type carouselData = {
  id: number;
  nome: string;
  image: any;
};

type Props = {
  data: carouselData[];
  height?: number;
  width?: number;
};

const { width: screenWidth } = Dimensions.get("window");

const MyCarousel: React.FC<Props> = ({
  data,
  height = 200,
  width = screenWidth,
}) => {
  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const { t, i18n } = useTranslation();

  const startAutoplay = () => {
    if (intervalRef.current) return; // evita duplicação
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      currentIndexRef.current = nextIndex;
    }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // limpa no unmount
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.generalContainerCarousel}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { width, height }]}
            onPress={() => router.navigate(`/store/conjuntos/${item.nome}`)}
          >
            <Image
              source={item.image}
              style={[styles.cardImage, { height: height * 0.88 }]}
            />
          </TouchableOpacity>
        )}
        onTouchStart={stopAutoplay}
        onScrollBeginDrag={stopAutoplay}
        onTouchEnd={startAutoplay}
        onScrollEndDrag={startAutoplay}
      />

      <Text style={styles.carouselText}>{t('carroselText')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainerCarousel: {
    width: "100%",
    gap: 5,
    paddingBottom: 20,
  },
  itemContainer: {
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    resizeMode: "contain",
  },
  carouselText: {
    fontSize: 24,
    color: "#1c1c1c",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MyCarousel;
