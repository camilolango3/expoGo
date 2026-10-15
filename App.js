
import { AppProvider } from "./src/context/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Informativa from "./src/components/Informativa";
import Capturados from "./src/components/Capturados";
import Favoritos from "./src/components/Favoritos";
import Lista from "./src/components/Lista";
import Usuario from "./src/components/Usuario";
import Pokemon from "./src/components/Pokemon";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function CapturadosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capturados" component={Capturados} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2563eb",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarActiveTintColor: "#2563eb",
            tabBarInactiveTintColor: "#64748b",
          }}
        >
          <Tab.Screen
            name="Lista"
            component={ListaStack}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Informativa"
            component={Informativa}
          />

          <Tab.Screen
            name="Capturados"
            component={CapturadosStack}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Favoritos"
            component={FavoritosStack}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Usuario"
            component={Usuario}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}