import { AppProvider } from './src/context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';



import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Informativa from "./src/components/Informativa";
import Capturados from "./src/components/Capturados";
import Favoritos from "./src/components/Favoritos";
import Lista from "./src/components/Lista";
import Usuario from "./src/components/Usuario";
import Pokemon from "./src/components/Pokemon";


const Stack = createStackNavigator();

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

const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>

          
          <Tab.Screen name="Lista" component={ListaStack} />
          <Tab.Screen name="Informativa" component={Informativa} />
          <Tab.Screen name="Capturados" component={CapturadosStack} />
          <Tab.Screen name="Favoritos" component={FavoritosStack} />
          <Tab.Screen name="Usuario" component={Usuario} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>

    
  );
}