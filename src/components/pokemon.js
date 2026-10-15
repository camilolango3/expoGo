import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { AppContext } from "../context/AppContext";

export default function Pokemon({ route }) {
  const { nombre } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { favoritos, setFavoritos } = useContext(AppContext);

  useEffect(() => {
    const obtenerPokemon = async () => {
      try {
        setCargando(true);
        setError(null);
        // Validamos que el nombre esté en minúsculas para evitar errores en la API
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`,
        );

        if (!res.ok) throw new Error("No se pudo encontrar el Pokémon");

        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPokemon();
  }, [nombre]);

  const esFavorito = favoritos.some((p) => p.id === pokemon?.id);

  const toggleFavorito = () => {
    if (!pokemon) return;
    if (esFavorito) {
      setFavoritos(favoritos.filter((p) => p.id !== pokemon.id));
    } else {
      setFavoritos([...favoritos, { id: pokemon.id, nombre: pokemon.name }]);
    }
  };
  // Pantalla de carga
  if (cargando) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.textoCarga}>Cargando Pokémon...</Text>
      </View>
    );
  }

  // Pantalla de error
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.textoError}>{error}</Text>
      </View>
    );
  }

  // Pantalla principal
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Capitalizamos la primera letra del nombre */}
        <Text style={styles.titulo}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Text>

        <Image
          source={{
            uri: pokemon.sprites?.other["official-artwork"]?.front_default,
          }}
          style={styles.imagen}
        />

        <Text style={styles.textoInfo}>
          <Text style={styles.bold}>Tipo(s): </Text>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </Text>

        <Text style={styles.textoInfo}>
          <Text style={styles.bold}>Altura: </Text> {pokemon.height / 10} m
          {"   |   "}
          <Text style={styles.bold}>Peso: </Text> {pokemon.weight / 10} kg
        </Text>

        <TouchableOpacity onPress={toggleFavorito} style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 32 }}>{esFavorito ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "capitalize",
  },
  imagen: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  textoInfo: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  textoCarga: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  textoError: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});