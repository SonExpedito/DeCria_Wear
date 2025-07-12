import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { categorias } from './categorias';
import { Novidades, Descontos, referencias } from './itens';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { selectRandomProduct, Produto } from './selectProduto';

type Props = {
  intDestque: number;
};

export function DestaquePage({ intDestque }: Props) {
  const router = useRouter();
  const destaque = categorias.find((categoria) => categoria.id === intDestque);
  const [produtosAleatorios, setProdutosAleatorios] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);
  let item: any = "";

  useEffect(() => {
    async function buscarProdutosAleatorios() {
      if (intDestque === 2 || intDestque === 3) {
        setLoading(true);
        const produtos: Produto[] = [];

        for (let i = 0; i < 5; i++) {
          const produto = await selectRandomProduct();
          if (produto) {
            produtos.push(produto);
          }
        }

        setProdutosAleatorios(produtos);
        setLoading(false);
      }
    }

    buscarProdutosAleatorios();
  }, [intDestque]);

  switch (intDestque) {
    case 1:
      item = referencias;
      break;
    case 2:
      item = Novidades;
      break;
    case 3:
      item = Descontos;
      break;
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', gap: 20 }}>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={destaque?.imagem} style={styles.image} />
      </View>

      {/* Artistas */}
      {intDestque === 1 && Array.isArray(item) && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {item.map((artista: any, index: number) => (
            <View key={index} style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '50%', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}
                onPress={() => router.navigate(`/store/artistas/${artista.nome}`)}
              >
                <Image source={artista.img} style={styles.artistas} />
                <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>{artista.nome}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* Produtos aleatórios usando FlatList */}
      {(intDestque === 2 || intDestque === 3) && (
        <FlatList
          data={produtosAleatorios}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.produtosWrapper}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.produtoContainer}
              onPress={() =>
                router.push({
                  pathname: `/store/product/${item.id}`,
                  params: {
                    id: item.id,
                    nome: item.nome,
                    preco: item.preco,
                    imagemUrl: item.imagemUrl,
                    imagemUrl2: item.imagemUrl2,
                    imagemUrl3: item.imagemUrl3,
                    type: item.type,
                  },
                })
              }
            >
              <Ionicons
                name="heart-outline"
                size={20}
                color="black"
                style={styles.iconeCoracao}
              />
              <Image
                source={{ uri: item.imagemUrl }}
                style={styles.imagemProduto}
                resizeMode="contain"
              />
              <Text style={styles.nomeMarca}>Nike</Text>
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.preco}>
                R${' '}
                {typeof item.preco === 'number' ? item.preco.toFixed(2) : '0.00'}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },

  artistas: {
    height: 80,
    resizeMode: 'contain',
  },

  produtosWrapper: {
    paddingHorizontal: 8,
    paddingBottom: 100,
  },

  produtoContainer: {
    flex: 1,
    marginBottom: 32,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 12,
    position: 'relative',
    maxWidth: '48%',
  },

  iconeCoracao: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },

  imagemProduto: {
    width: '100%',
    height: 160,
  },

  nomeMarca: {
    fontSize: 14,
    color: '#000000',
    marginTop: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },

  nomeProduto: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 2,
  },

  preco: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
