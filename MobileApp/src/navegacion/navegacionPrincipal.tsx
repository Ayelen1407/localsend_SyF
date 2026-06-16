import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../pantallas/Inicio/Inicio';
import SelectorArchivos from '../pantallas/SelectorArchivos/SelectorArchivos';
import Transferencia from '../pantallas/Transferencia/Transferencia';
import Configuracion from '../pantallas/Configuracion/Configuracion';

const Stack = createNativeStackNavigator();

export default function NavegacionPrincipal() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen
          name="SelectorArchivos"
          component={SelectorArchivos}
        />
        <Stack.Screen
          name="Transferencia"
          component={Transferencia}
        />
        <Stack.Screen
          name="Configuracion"
          component={Configuracion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}