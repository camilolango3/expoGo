import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

export default function Usuario({ navigation }) {
  const estadisticas = [
    { etiqueta: "Entrenador", valor: "Inicial" },
    { etiqueta: "Region", valor: "Kanto" },
    { etiqueta: "Objetivo", valor: "Completar la Pokedex" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.titulo}>Perfil de usuario</Text>
        <Text style={styles.descripcion}>
          Guarda tus Pokemon favoritos, revisa tus capturas y sigue tu progreso
          como entrenador.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Datos del entrenador</Text>
        {estadisticas.map((item) => (
          <View key={item.etiqueta} style={styles.fila}>
            <Text style={styles.etiqueta}>{item.etiqueta}</Text>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Accesos rapidos</Text>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("Favoritos")}
        >
          <Text style={styles.botonTexto}>Ver favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boton, styles.botonSecundario]}
          onPress={() => navigation.navigate("Capturados")}
        >
          <Text style={styles.botonTexto}>Ver capturados</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    paddingBottom: 35,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 12,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  etiqueta: {
    fontSize: 15,
    color: "#666",
  },
  valor: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    textAlign: "right",
    marginLeft: 12,
  },
  boton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  botonSecundario: {
    backgroundColor: "#28a745",
    marginBottom: 0,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});