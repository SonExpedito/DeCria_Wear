import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerVoltar: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  botaoVoltar: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoVoltar: {
    fontSize: 16,
    marginLeft: 4,
  },
  h2: {
    fontSize: 25,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  produtoContainer: {
    flex: 1,
    marginBottom: 32,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 12,
    position: "relative",
    maxWidth: "48%",
  },
  iconeCoracao: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  imagemProduto: {
    width: "100%",
    height: 160,
  },
  nomeMarca: {
    fontSize: 14,
    color: "#000000",
    marginTop: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  nomeProduto: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 2,
  },
  preco: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
});
