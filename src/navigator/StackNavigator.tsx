import React from 'react';
import { BienvenidoScreens } from '../screens/BienvenidoScreens';
import { FormularioScreens } from '../screens/FormularioScreens';
import { PRIMARY_COLOR } from '../commons/constant';
import 'react-native-gesture-handler'; 
import { createStackNavigator } from '@react-navigation/stack';


export type RootStackParamList = {
    Bienvenido: undefined;
    Formulario: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR,
            }
        }}>
            <Stack.Screen name='Bienvenido' options={{title:'BIENVENIDO'}} component={BienvenidoScreens} />
            <Stack.Screen name='Formulario' options={{title:'FORMULARIO DE DIVISIÓN'}} component={FormularioScreens} />
        </Stack.Navigator>
    );
};