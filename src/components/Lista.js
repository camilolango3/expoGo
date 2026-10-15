import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
    const [busqueda, setBusqueda] = useState("");
    const [data, setData] = useState([]);
    const [tipoSeleccionado, setTipoSeleccionado] = useState('All');

    const navigation = useNavigation();

    useEffect(() => {
        const obtenerDatos = async () => {
            if (tipoSeleccionado === 'All') {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
                const json = await res.json();
                setData(json.results);
            } else {
                const res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
                const json = await res.json();
                const listaFiltrada = json.pokemon.map(p => p.pokemon);
                setData(listaFiltrada);
            }
        };

        obtenerDatos();
    }, [tipoSeleccionado]);

    const handleTipoChange = (tipo) => {
        setTipoSeleccionado(tipo);
    };

    const datosFiltrados = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <ScrollView>
            <TextInput
                style={styles.buscador}
                placeholder="Buscar Pokémon"
                value={busqueda}
                onChangeText={setBusqueda}
            />
            <View style={styles.lista}>
                {datosFiltrados.map((pokemon) => {
                    const id = pokemon.url.split("/").filter(Boolean).pop();

                    return (
                        <TouchableOpacity
                            key={pokemon.url}
                            style={styles.item}
                            onPress={() => navigation.navigate('Pokemon', { nombre: pokemon.name })}
                        >
                            <Image
                                source={{
                                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                                }}
                                style={styles.imagen}
                            />
                            <Text>{pokemon.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    lista: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "space-between",
        padding: 10,
    },
    buscador: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
    item: {
        backgroundColor: "aliceblue",
        width: "48%",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    imagen: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
});