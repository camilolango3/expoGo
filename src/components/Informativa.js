import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

export function Informativa({ navigation }) {
  const secciones = [
    {
      titulo: "Lista de Pokemon",
      descripcion: "Consulta Pokemon desde PokeAPI y revisa su imagen, tipo, peso y altura.",
    },
    {
      titulo: "Favoritos",
      descripcion: "Marca los Pokemon que mas te interesan para encontrarlos rapidamente.",
    },
    {
      titulo: "Capturados",
      descripcion: "Simula capturas, guarda tu coleccion y completa el album poco a poco.",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          }}
          style={styles.imagen}
        />
        <Text style={styles.titulo}>Pokedex informativa</Text>
        <Text style={styles.descripcion}>
          Aplicacion creada para explorar Pokemon, guardar favoritos y llevar un
          registro de capturas usando datos de PokeAPI.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.subtitulo}>Que puedes hacer</Text>
        {secciones.map((seccion) => (
          <View key={seccion.titulo} style={styles.item}>
            <Text style={styles.itemTitulo}>{seccion.titulo}</Text>
            <Text style={styles.itemTexto}>{seccion.descripcion}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.subtitulo}>Fuente de datos</Text>
        <Text style={styles.texto}>
          La informacion principal de cada Pokemon se obtiene desde PokeAPI,
          una API publica utilizada para consultar datos, sprites y estadisticas.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.botonTexto}>Ver lista de Pokemon</Text>
      </TouchableOpacity>
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
  imagen: {
    width: 170,
    height: 170,
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
  infoCard: {
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
  item: {
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
    paddingLeft: 10,
    marginBottom: 12,
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  itemTexto: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  texto: {
    fontSize: 15,
    color: "#555",
    lineHeight: 21,
  },
  boton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});