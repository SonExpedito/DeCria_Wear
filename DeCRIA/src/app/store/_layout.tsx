import { Stack } from 'expo-router';
import Navbar from '@/components/Navbar';
import { Header } from '@/components/Header';
import { View, StyleSheet } from 'react-native';
import React from 'react';

type RouteConfig = {
  typeInt: number;
  title: string;
};

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={({ route }) => {
          /**TopBar = 1 
           * SearchBar= 2
           * HeaderName = 3
           * Return = 4
          */

          const routeOptions: Record<string, RouteConfig> = {
            home: { typeInt: 1, title: 'Início' },
            explorer: { typeInt: 2, title: 'Destaques' },
            cart: { typeInt: 3, title: 'Sacola' },
            favorite: { typeInt: 3, title: 'Favoritos' },
            user: { typeInt: 3, title: 'Usuário' },


            'artistas/veigh': { typeInt: 4, title: 'Veigh' },
            'artistas/teto': { typeInt: 4, title: 'Teto' },
            'artistas/dricka': { typeInt: 4, title: 'Dricka' },
            'artistas/tt': { typeInt: 4, title: 'TT' },

            'marcas/nike': { typeInt: 4, title: 'Nike' },
            'marcas/adidas': { typeInt: 4, title: 'Adidas' },
            'marcas/jordan': { typeInt: 4, title: 'Jordan' },
            'marcas/puma': { typeInt: 4, title: 'Puma' },

            'conjuntos/conjuntoNike': { typeInt: 4, title: 'Conjunto Nike' },
            'conjuntos/conjunstoAdidas': { typeInt: 4, title: 'Conjunto Adidas' },
            'conjuntos/conjuntoPuma': { typeInt: 4, title: 'Conjunto Jordan' },
            'conjuntos/esportivo': { typeInt: 4, title: 'Esportivo' },
            'conjuntos/evom': { typeInt: 4, title: 'Evom' },
            'conjuntos/brisainvernal': { typeInt: 4, title: 'Invernal' },
            'conjuntos/feminino': { typeInt: 4, title: 'Feminino' },
            

            'destaques/artistas': { typeInt: 4, title: 'Artistas' },
            'destaques/lancamentos': { typeInt: 4, title: 'Lançamentos' },
            'destaques/ofertas': { typeInt: 4, title: 'Ofertas' },

          };

          const { typeInt = 1, title = '' } = routeOptions[route.name] ?? {};

          return {
            header: (props) => (
              <Header {...props} typeInt={typeInt} title={title} />
            ),
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
