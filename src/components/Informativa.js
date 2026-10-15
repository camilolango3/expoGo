import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Informativa({ navigation }) {
  const secciones = [
    {
      titulo: "Lista de Pokemon",
      descripcion:
        "Consulta Pokemon desde PokeAPI y revisa sus imagenes, tipos, peso y altura.",
    },
    {
      titulo: "Favoritos",
      descripcion:
        "Marca los Pokemon que mas te interesan para encontrarlos rapidamente.",
    },
    {
      titulo: "Capturados",
      descripcion:
        "Guarda los Pokemon que captures y completa tu coleccion poco a poco.",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          }}
          style={styles.imagen}
        />

        <Text style={styles.titulo}>Pokedex informativa</Text>

        <Text style={styles.descripcion}>
          Aplicacion creada para explorar Pokemon, guardar favoritos
          y llevar un registro de capturas utilizando los datos de PokeAPI.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.subtitulo}>¿Que puedes hacer?</Text>

        {secciones.map((seccion) => (
          <View key={seccion.titulo} style={styles.item}>
            <Text style={styles.itemTitulo}>
              {seccion.titulo}
            </Text>

            <Text style={styles.itemTexto}>
              {seccion.descripcion}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.subtitulo}>Fuente de datos</Text>

        <Text style={styles.texto}>
          La informacion de los Pokemon se obtiene desde PokeAPI,
          una API publica que permite consultar nombres, imagenes,
          tipos y estadisticas de diferentes Pokemon.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.subtitulo}>Objetivo de la aplicacion</Text>

        <Text style={styles.texto}>
          El objetivo es facilitar la exploracion de Pokemon,
          permitir guardar los favoritos y registrar los Pokemon
          capturados desde una aplicacion sencilla y facil de utilizar.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.botonTexto}>
          Ver lista de Pokemon
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  header: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    elevation: 3,
  },

  imagen: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 23,
  },

  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    elevation: 2,
  },

  subtitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 15,
  },

  item: {
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
    paddingLeft: 12,
    marginBottom: 16,
  },

  itemTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 5,
  },

  itemTexto: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 21,
  },

  texto: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 23,
  },

  boton: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
    elevation: 3,
  },

  botonTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
