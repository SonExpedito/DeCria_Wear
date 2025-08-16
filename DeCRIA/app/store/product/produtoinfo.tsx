import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import ImageViewing from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";
import {
  comprarLink,
  checkFavorito,
  toggleFavorito,
  Produto,
} from "@/pages/Products/productUtils";

type Props = {
  produto: Produto;
};

function InfoProduct({ produto }: Props) {
  // const [corSelecionada, setCorSelecionada] = useState<string | null>(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | number | null>(
    null
  );
  const [imagemSelecionada, setImagemSelecionada] = useState<string>(
    produto.imagemUrl
  );
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);

  // Cores e tamanhos por tipo de produto
  const tenisTamanhos = [37, 38, 39, 40, 41, 42, 43];

  const roupaTamanhos = ["PP", "P", "M", "G", "GG"];

  // Variáveis para tamanhos que serão exibidos
  let tamanhos: (string | number)[] = [];

  if (produto.type === "Tênis") {
    tamanhos = tenisTamanhos;
  } else if (produto.type === "Roupa") {
    tamanhos = roupaTamanhos;
  } else if (produto.type === "Acessório") {
    tamanhos = [];
  }

  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    async function verificarFavorito() {
      const isFav = await checkFavorito(produto);
      setFavorito(isFav);
    }
    verificarFavorito();
  }, [produto]);

  async function handleToggleFavorito() {
    const novoStatus = await toggleFavorito(produto, favorito);
    setFavorito(novoStatus);
  }

  const imagens = [
    { uri: produto.imagemUrl },
    produto.imagemUrl2 ? { uri: produto.imagemUrl2 } : null,
    produto.imagemUrl3 ? { uri: produto.imagemUrl3 } : null,
  ].filter(Boolean) as { uri: string }[];

  return (
      <ScrollView style={styles.container}>

        {/* Imagem principal */}
        <TouchableOpacity onPress={() => setIsImageViewerVisible(true)}>
          <Image
            source={{ uri: imagemSelecionada }}
            style={styles.imagemPrincipal}
          />
        </TouchableOpacity>

        {/* Miniaturas */}
        <View style={styles.miniaturasContainer}>
          {[produto.imagemUrl, produto.imagemUrl2, produto.imagemUrl3].map(
            (img, idx) =>
              img && (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setImagemSelecionada(img)}
                  style={[
                    styles.miniaturaBotao,
                    imagemSelecionada === img && styles.miniaturaSelecionada,
                  ]}
                >
                  <Image source={{ uri: img }} style={styles.miniaturaImagem} />
                </TouchableOpacity>
              )
          )}
        </View>

        {/* Informações */}
        <View style={styles.infoContainer}>
          <Text style={styles.marca}>NIKE</Text>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>


          {/* Mostrar tamanhos se existirem */}
          {tamanhos.length > 0 && (
            <>
              <Text style={styles.subtitulo}>Tamanhos</Text>
              <View style={styles.tamanhosContainer}>
                {tamanhos.map((tam) => (
                  <TouchableOpacity
                    key={tam.toString()}
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
            </>
          )}

          {/* Botões */}
          <View style={styles.botoesContainer}>
            <TouchableOpacity
              style={styles.botaoComprar}
              onPress={() =>
                comprarLink(produto)
              }
            >
              <Text style={styles.textoComprar}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoCoracao}
              onPress={handleToggleFavorito}
            >
              <Ionicons
                name={favorito ? "heart" : "heart-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {/* Descrição */}
          <Text style={styles.subtitulo}>Descrição</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
        </View>
        <View style={{ height: 100 }} />
        <ImageViewing
          images={imagens}
          imageIndex={imagens.findIndex((img) => img.uri === imagemSelecionada)}
          visible={isImageViewerVisible}
          onRequestClose={() => setIsImageViewerVisible(false)}
        />
      </ScrollView>
  );
}

// Mantenha o styles igual ao seu código original


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imagemPrincipal: {
    backgroundColor: "#EFEDED",
    height: 250,
    marginBottom: 0,
    resizeMode: "contain",
    width: "100%",
  },

  // Miniaturas
  miniaturasContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 12,
    paddingHorizontal: 0,
  },

  miniaturaBotao: {
    flex: 1,
    borderColor: "#adadad",
    borderWidth: 1,
    borderRadius: 0,
    marginHorizontal: 0,
  },

  miniaturaImagem: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    backgroundColor: "#EFEDED",
  },
  miniaturaSelecionada: {
    borderColor: "#262626",
    borderWidth: 2,
  },

  // Voltar
  botaoVoltar: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  textoVoltar: {
    fontSize: 25,
    marginLeft: 4,
  },

  // Info produto
  infoContainer: {
    paddingHorizontal: 16,
  },
  marca: {
    color: "#000000",
    fontSize: 15,
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
    fontWeight: "bold",
    marginTop: 26,
  },
  descricao: {
    color: "#444",
    fontSize: 20,
    lineHeight: 20,
    marginTop: 8,
  },

  // Cores
  coresContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 12,
  },
  corCirculo: {
    borderColor: "#ccc",
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    width: 30,
  },
  corSelecionada: {
    borderColor: "#262626",
    borderWidth: 2,
  },

  // Tamanhos
  tamanhosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 8,
  },
  tamanhoBotao: {
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  tamanhoSelecionado: {
    backgroundColor: "#eee",
    borderColor: "#000",
  },

  // Botões
  botoesContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  botaoComprar: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#262626",
    borderRadius: 20,
    justifyContent: "center",
    minWidth: 150,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  textoComprar: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoCoracao: {
    borderColor: "#ccc",
    borderRadius: 20,
    borderWidth: 1,
    left: 10,
    padding: 10,
  },
});

// Set display name for better debugging
InfoProduct.displayName = 'InfoProduct';

export default InfoProduct;
