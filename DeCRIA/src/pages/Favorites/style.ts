import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  msgVazio: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginTop: 32,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    flexBasis: "48%",
    marginBottom: 16,
    position: "relative",
  },
  card: {
    borderRadius: 10,
    padding: 10,
  },
  imagem: {
    width: "100%",
    height: 190,
    resizeMode: "contain",
    borderRadius: 8,
  },
  nome: {
    fontSize: 32,
    fontWeight: "600",
    marginTop: 8,
  },
  preco: {
    fontSize: 24,
    color: "#333",
    marginTop: 4,
  },
  heartButton: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1,
    backgroundColor: "#FFF",
    padding: 4,
    borderRadius: 12,
  },
});
