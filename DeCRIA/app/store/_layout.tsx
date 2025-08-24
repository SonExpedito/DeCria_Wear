import { Stack } from "expo-router";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";
import { View, StyleSheet } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

type RouteConfig = {
  typeInt: number;
  title?: string;
  titleKey?: string;
};

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={({ route }) => {
          const routeOptions: Record<string, RouteConfig> = {
            home: { typeInt: 1, title: "Início" },
            explorer: { typeInt: 2, title: "Destaques" },
            cart: { typeInt: 3, title: "Sacola" },
            favorite: { typeInt: 3, titleKey: "routes.favorite" },
            user: { typeInt: 3, titleKey: "routes.user" },
            benefits: { typeInt: 4, title: "Benefícios" },
            product: { typeInt: 4, title: "Produtos" },

            "product/[productid]": { typeInt: 4, title: "Produto" },
            "product/list": { typeInt: 4, title: "Produto" },
            "product/info": { typeInt: 4, title: "Produto" },
            "artistas/veigh": { typeInt: 4, title: "Veigh" },
            "artistas/teto": { typeInt: 4, title: "Teto" },
            "artistas/dricka": { typeInt: 4, title: "Dricka" },
            "artistas/tt": { typeInt: 4, title: "TT" },
            "marcas/nike": { typeInt: 4, title: "Nike" },
            "marcas/adidas": { typeInt: 4, title: "Adidas" },
            "marcas/jordan": { typeInt: 4, title: "Jordan" },
            "marcas/puma": { typeInt: 4, title: "Puma" },
            "conjuntos/conjuntoNike": { typeInt: 4, title: "Conjunto Nike" },
            "conjuntos/conjunstoAdidas": {
              typeInt: 4,
              title: "Conjunto Adidas",
            },
            "conjuntos/conjuntoPuma": { typeInt: 4, title: "Conjunto Jordan" },
            "conjuntos/esportivo": { typeInt: 4, title: "Esportivo" },
            "conjuntos/evom": { typeInt: 4, title: "Evom" },
            "conjuntos/brisainvernal": { typeInt: 4, title: "Invernal" },
            "conjuntos/feminino": { typeInt: 4, title: "Feminino" },
            "destaques/artistas": { typeInt: 4, title: "Artistas" },
            "destaques/lancamentos": { typeInt: 4, title: "Lançamentos" },
            "destaques/ofertas": { typeInt: 4, title: "Ofertas" },
          };

          const {
            typeInt = 1,
            title = "",
            titleKey,
          } = routeOptions[route.name] ?? {};

          // Se houver titleKey, pega a tradução; senão usa o título fixo
          const headerTitle = titleKey ? t(titleKey) : title;

          return {
            header: () => <Header typeInt={typeInt} title={headerTitle} />,
          };
        }}
      />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
