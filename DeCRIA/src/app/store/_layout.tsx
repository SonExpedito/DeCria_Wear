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
