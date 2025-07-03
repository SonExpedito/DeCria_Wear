import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Produto = {
  nome: string;
  preco: number;
  imagemUrl: string;
  descricao: string;
};

type Props = {
  produto: Produto;
};

export default function InfoProduct({ produto }: Props) {
  const [corSelecionada, setCorSelecionada] = useState<string | null>(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<number | null>(
    null
  );

  // Dados estáticos temporários (cores e tamanhos)
  const cores = ["#C62828", "#E91E63", "#F5F5F5"];
  const tamanhos = [37, 38, 39, 40, 41, 42, 43];

  return (
    <ScrollView style={styles.container}>
      {/* Botão voltar */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>

      {/* Imagem */}
      <Image
        source={{ uri: produto.imagemUrl }}
        style={styles.imagemPrincipal}
      />

      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.marca}>NIKE</Text>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>

        {/* Cores */}
        <Text style={styles.subtitulo}>Cores</Text>
        <View style={styles.coresContainer}>
          {cores.map((cor) => (
            <TouchableOpacity
              key={cor}
              style={[
                styles.corCirculo,
                { backgroundColor: cor },
                corSelecionada === cor && styles.corSelecionada,
              ]}
              onPress={() => setCorSelecionada(cor)}
            />
          ))}
        </View>

        {/* Tamanhos */}
        <Text style={styles.subtitulo}>Tamanhos</Text>
        <View style={styles.tamanhosContainer}>
          {tamanhos.map((tam) => (
            <TouchableOpacity
              key={tam}
              style={[
                styles.tamanhoBotao,
                tamanhoSelecionado === tam && styles.tamanhoSelecionado,
              ]}
              onPress={() => setTamanhoSelecionado(tam)}
            >
              <Text>{tam}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botões */}
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoComprar}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCoracao}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Descrição */}
        <Text style={styles.subtitulo}>Descrição</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
      </View>
    </ScrollView>
  );
}

// Styles (mesmo do seu código)
const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  imagemPrincipal: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    backgroundColor: "#f2f2f2",
    marginBottom: 16,
  },
  botaoVoltar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  textoVoltar: {
    fontSize: 25,
    marginLeft: 4,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  marca: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 4,
  },
  nome: {
    fontSize: 30,
    fontWeight: "bold",
  },
  preco: {
    fontSize: 25,
    marginVertical: 8,
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 26,
    fontWeight: "bold",
  },
  coresContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 12,
  },
  corCirculo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  corSelecionada: {
    borderColor: "#262626",
    borderWidth: 2,
  },
  tamanhosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 8,
  },
  tamanhoBotao: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  tamanhoSelecionado: {
    borderColor: "#000",
    backgroundColor: "#eee",
  },
  botoesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
    width: "100%",
    justifyContent: "center",
  },
  botaoComprar: {
    backgroundColor: "#262626",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: "center",
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textoComprar: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoCoracao: {
    left: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
  },
  descricao: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 20,
    color: "#444",
  },
});
