import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    position: 'relative', // necessário para o logo absoluto
  },

  bannerContainer: {
    width: '100%',
    height: '66.666%', // 4/6
    justifyContent: 'center',
    alignItems: 'center',
  },

  lastContainer: {
    width: '100%',
    height: '33.333%', // 2/6
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: "#151515", // seu background original
  },

  button: {
    backgroundColor: '#FFFFFF',
    width: '40%', // 2/5
  },

  logo: {
    width: '40%', // 2/5
    position: 'absolute',
    top: '63%',
  },
});
