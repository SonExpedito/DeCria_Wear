import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 16,
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "#f0f0f0",
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: "flex-start",
  },
  nomePreco: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
  },
  detalhe: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  controleQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantidade: {
    fontSize: 18,
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: "center",
  },
  resumoContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
  },
  resumoTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  resumoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  resumoTexto: {
    fontSize: 18,
  },
  resumoValor: {
    fontSize: 18,
    fontWeight: "bold",
  },
  botaoComprar: {
    marginTop: 20,
    backgroundColor: "#262626",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  vazio: {
    fontSize: 18,
    color: "#777",
  },
});
